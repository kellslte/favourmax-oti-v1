import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";
import { ScrollContainer } from "react-scroll-motion";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ScrollContainer>
      <RecoilRoot>
          <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <Layout>
              <Component {...pageProps} key={router.asPath} />
           </Layout>
          </AnimatePresence>
      </RecoilRoot>
    </ScrollContainer>
  );
}

export default MyApp;
