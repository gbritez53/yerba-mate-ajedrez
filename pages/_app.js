import AppLayout from "components/Layouts/AppLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
