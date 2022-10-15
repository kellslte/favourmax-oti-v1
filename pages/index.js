import Head from 'next/head'
import headTitle from '../state/head'
import { useRecoilState } from "recoil";
import Button from '../components/Utils/Button'
import { loadingState } from "../state/loading";
import Link from 'next/link';
import DownArrow from '../components/Utils/DownArrow'
import Projects from "../components/Project";
import About from '../components/About'
import Work from '../components/Work'
import Floater from '../components/Utils/Floater'

const Home = () => {
  const [head, setHead] = useRecoilState(headTitle)
  const [loading, setLoading] = useRecoilState(loadingState)

  return (
    <div className={`w-full ${loading && "hidden"} h-full block`}>
      <Head>
        <title>KellsLTE - Backend Software Developer | Welcome</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="relative mb-[18rem] px-8 w-[90%] md:w-[88%] mx-auto">
        <h1 className="text-link font-monument text-4xl leading-[2rem] md:leading-[4rem] mt-64 font-extrabold">
          Hey, I'm Max
        </h1>
        <p className="text-link py-4 leading-8 mb-6 font-lato md:w-1/2">
          I'm a backend software developer. I learned to write code in 2019 with
          HTML, CSS and JavaScript. Since then I have spent my time learning the
          trade and honing my craft. I have written good code (in my opinion
          though), not so good code (that still worked- though I could not
          figure out what made it run) and bad code but I have learnt a lot of
          things along the way. I currently work at the{" "}
          <Link href={"https://enugutechhub.en.gov.ng"} className="text-link">
            Enugu State Tech Hub
          </Link>{" "}
          as the engineering team lead and lead backend developer.
        </p>
        <Button
          title={"view resume"}
          link={
            "https://drive.google.com/file/d/1ZqB0ahkttixnwq6oCXIqdPMdta-arGiM/view?usp=sharing"
          }
        />
        <DownArrow />
        <Floater />
      </header>
      <Projects />
      <About />
      <Work />
    </div>
  );
}

export default Home
