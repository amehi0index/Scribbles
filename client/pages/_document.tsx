import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://scribbles-dac22275e7f8.herokuapp.com; script-src 'self' https://scribbles-dac22275e7f8.herokuapp.com;"></meta>
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
