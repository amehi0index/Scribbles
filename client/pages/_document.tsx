import Document, { Html, Head, Main, NextScript } from 'next/document';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <meta http-equiv="Content-Security-Policy" content="default-src 'none'; connect-src 'self';font-src 'self'; img-src 'self' data: https:; style-src 'self' ; script-src 'self'"></meta> */}

          <meta http-equiv="Content-Security-Policy" content="img-src 'self' data:; default-src 'self' scribbles-dac22275e7f8.herokuapp.com"></meta>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
