import Head from "next/head";
import Slider from "components/Slider";
import Text from "components/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yerba mate Ajedrez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col">
        <Slider />
        <Text />
      </div>
    </>
  );
}
