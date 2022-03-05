import Head from "next/head";
// import Header from "../components/Header";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vision All AI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      {/* <Header /> */}
      <Introduction />
      
    </div>
  );
}
