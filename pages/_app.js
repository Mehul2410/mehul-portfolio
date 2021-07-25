import "../public/css/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Mehul | Hi There, I’m Mehul Gawhale UI/UX Designer & Developer
        </title>
        <link rel="shortcut icon" href="./img/icons.svg" type="image/x-icon" />
        <meta
          name="title"
          content="Hi There, I’m Mehul Gawhale UI/UX Designer & Developer."
        />
        <meta name="description" content="I do things which make me proud." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mehul.vercel.app" />
        <meta
          property="og:title"
          content="Hi There, I’m Mehul Gawhale UI/UX Designer & Developer."
        />
        <meta
          property="og:description"
          content="I do things which make me proud."
        />
        <meta property="og:image" content="./img/icons.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mehul.vercel.app" />
        <meta
          property="twitter:title"
          content="Hi There, I’m Mehul Gawhale UI/UX Designer & Developer."
        />
        <meta
          property="twitter:description"
          content="I do things which make me proud."
        />
        <meta property="twitter:image" content="./img/icons.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
