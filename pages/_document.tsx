import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
        <meta name="description" content="책의 핵심만을 꾹 눌러 담다. 책 요약 라이브북" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}