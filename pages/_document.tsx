import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <title>Mikael Mantis, Software Engineer</title>
        <link rel="icon" type="image/png" href='/me_v2.png'/>
        <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8' />
        <meta name='description' content='Personal website of Mikael Mantis, Software Engineer and Martial Arts Tricker, currently based out of Philadelphia'/>
        <meta name='author' content='Mikael Mantis' />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap' rel='stylesheet'></link>
        <link rel='canonical' href='https://mikaelmantis.com'/>
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument