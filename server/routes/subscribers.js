const client = require('../config/connection.js')
const express = require('express')
const router = express.Router()
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
//@desc     Create new email subscriber
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

    try {
      let insertQuery = `INSERT INTO email_subs(email_sub) VALUES($1)`;
      await client.query(insertQuery, [email]);

      res.status(200).json({ message: 'Thanks! We got your little email.' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);


module.exports = router