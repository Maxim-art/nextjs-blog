import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="foo" target="_blank" rel="noopener noreferrer">
            Back to home
          </a>
        </Link>
      </h2>
    </Layout>
  );
}
