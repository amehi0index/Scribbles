
const client = require('../config/connection.js')
const express = require('express')
const router = express.Router()
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator')

client.connect()

//@route    GET api/email-subscribers
//@desc     Get all email subsccribers
//@access   Public
router.get('/', async (req, res) => {
    client.query('SELECT * FROM email_subs', (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(result.rows);
        }
    });
})


//@route    POST api/email-subscribers
//@desc     Create new email subscribe rroute to handle new subscriber with email verification
//@access   Public
router.post('/new',
  body('email').isEmail().withMessage('Enter a valid email address')
    .normalizeEmail(),

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    console.log('email from be', email)
    const verificationToken = crypto.randomBytes(20).toString('hex');

    try {
      // Insert email with verification token and isVerified = false
      let insertQuery = `INSERT INTO email_subs(email_sub, verification_token, is_verified) VALUES($1, $2, false)`;

      await client.query(insertQuery, [email, verificationToken]);

      const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://scribbles-dac22275e7f8.herokuapp.com' 
      : 'http://localhost:5000';

      // Send verification email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.APP_USER, //Sender gmail acct 
          pass: process.env.APP_PASSWORD, //App pword from gmail acct 
        }
      });

      const mailOptions = {
        from: 'nibblersupreme@gmail.com', 
        to: email, 
        subject: 'Email Verification for Scribbles',
        html: `<p>Please verify your email by clicking on the link: <a href="${baseUrl}/api/email-subscribers/verify?token=${verificationToken}">Verify Email</a></p>`
    };

      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              console.log(error);
              res.status(500).send('Error sending email');
          } else {
              console.log('Email sent: ' + info.response);
              res.status(200).json({ message: 'Verification email sent' });
          }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

//@route    GET api/email-subscribers/verify
//@desc     Verify new subscriber email
//@access   Public
router.get('/verify', async (req, res) => {
    const { token } = req.query;
    try {
        // Update the email as verified if the token matches
        let updateQuery = `UPDATE email_subs SET is_verified = true WHERE verification_token = $1`;
        const result = await client.query(updateQuery, [token]);
        if (result.rowCount > 0) {
            res.send('Email verified successfully');
        } else {
            res.status(400).send('Invalid or expired token');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;