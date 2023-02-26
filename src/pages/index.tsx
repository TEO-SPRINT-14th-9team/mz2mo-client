import Head from 'next/head';

import { redirectToSpotifyAuth } from '@/apis/spotify';

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00917C" />
        <link rel="icon" href="/favicon.ico" />
        <title>MZ2MO : 음악의 세계를 열다</title>
      </Head>
      <button onClick={redirectToSpotifyAuth}>Login</button>
    </>
  );
};

export default Home;
