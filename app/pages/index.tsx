import Head from 'next/head';
import Header from '@mmts/header';

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
}

export default Home;
