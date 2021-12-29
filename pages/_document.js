import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Descripción de la página" />
          <meta property="og:title" content="Yerba Mate Ajedrez" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Descripción de la página" />
          {/* <meta property="og:image" content="https://i.imgur.com/HIWmajr.png" /> */}
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
