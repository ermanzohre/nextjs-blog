import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';


const FirstPost = () => {
  return (
    <Layout>
    <Head>
      <title>Erman Zöhre</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
//toDo: continue whole page

export default FirstPost;
