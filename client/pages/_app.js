import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";
import { ScrollContainer } from "react-scroll-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ScrollContainer>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ScrollContainer>
  );
}

export default MyApp;
