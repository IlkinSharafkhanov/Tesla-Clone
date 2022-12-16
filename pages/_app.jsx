import { Layout } from "../components/Layout/Layout";
import { SideNavProvider } from "../components/SideNavContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SideNavProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SideNavProvider>
  );
}

export default MyApp;
