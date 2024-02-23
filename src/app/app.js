// pages/_app.js
import Head from 'next/head';
import './globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Include the Lexend font link here */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
