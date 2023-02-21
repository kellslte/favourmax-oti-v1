import Head from "next/head";
import Button from "../components/Utils/Button";
import Link from "next/link";
import DownArrow from "../components/Utils/DownArrow";
import Projects from "../components/Projects";
import About from "../components/About";
import Work from "../components/Work";
import Floater from "../components/Utils/Floater";
import Separator from "../components/Utils/Separator";
import Contact from "../components/Contact";
import { gql } from "@apollo/client";
import { client } from "../helpers";

const Home = ({ works, projects }) => {

  return (
    <div className={`w-full h-full block`}>
      <Head>
        <title>
          KellsLTE - Backend Software Developer | Welcome to my portfolio
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="relative mb-[18rem] lg:mb-[23rem] px-8 w-[90%] md:w-[88%] mx-auto lg:h-fit">
        <h1 className="text-link font-monument text-4xl leading-[2rem] md:leading-[4rem] mt-40 font-extrabold">
          Hey, I'm Max
        </h1>
        <p className="py-4 mb-4 leading-8 text-link font-lato md:w-1/2">
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
          link={'https://drive.google.com/file/d/1EgC0AfN518kG-bqD0zqfi5X5vKfIJ9Bs/view?usp=sharing'}
        />
        <DownArrow />
        <Floater />
      </header>
      <Projects projects={projects} />
      <About />
      <Work works={works} />
      <Separator
        text={`I write PHP, Node Js and occassionally dabble in the frontend with Next Js and Vue Js`}
      />
      <Contact />
    </div>
  );
};

export async function getServerSideProps ()
{
  const { data } = await client.query( {
    query: gql`query {
      works {
        company
        description
        end
        id
        role
        start
        url
      }
      projects {
        id
        languages
        description
        link
        title
        brief
      }
    }`
  } );
  
  const { works, projects } = await data;

  return {
    props: {
      works,
      projects,
    },
  };
}

export default Home;
