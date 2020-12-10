import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import Alert from "../../components/alert"

const FirstPost = () => {
  return (
    <Layout home>
      {/* <Head>
        <title>First Post</title>
      </Head> */}
      <div>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
      <Alert type="error">
        <p>aaa</p>
      </Alert>
    </Layout>
  )
}

export default FirstPost
