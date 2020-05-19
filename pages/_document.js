import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='ru'>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1.0' />
          <meta name='theme-color' content='#1F2022' />
          <meta name='color-scheme' content='dark' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
