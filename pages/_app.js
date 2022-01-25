import { useState, useEffect } from "react";
import AppLayout from "components/Layouts/AppLayout";
import Router from "next/router";
import Spinner from "components/Spinner";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);
  return getLayout(
    <>
      {loading ? (
        <Spinner height={300} width={300} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
