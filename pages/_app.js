// add bootstrap css
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/overides.css'
import Layout from './layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Paulo e Fabiana</title>
          <link href='/libs/fontawesome/css/all.min.css' rel='stylesheet' />
        </>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
