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
import SEO from "@bradgarropy/next-seo";

const Home = ({ works, projects }) => {
  return (
    <>
      <SEO
        title="KellsLTE - Backend Software Developer | Welcome!"
        description="Favour Max-Oti Software Developer Portfolio and Blog"
        keywords={[
          "nextjs",
          "graphcms",
          "favour max-oti",
          "software developer",
          "laravel developer",
          "nest js",
          "node js",
          "nigerian developers",
          "south east developers",
          "nuxt js",
        ]}
        icon="/favicon.png"
        twitter={{
          card: "summary",
          site: "@kellslte",
          image: "/favicon.png",
        }}
        facebook={{
          type: "website",
          url: "https://portfolio.favourmax-oti.com",
          image: "/favicon.png",
        }}
      />
      <div className={`w-full h-full block`}>
        <header className="relative mb-[18rem] lg:mb-[23rem] px-8 w-[90%] md:w-[88%] mx-auto lg:h-fit">
          <h1 className="text-link font-monument text-4xl leading-[2rem] md:leading-[4rem] mt-40 font-extrabold">
            Hey there! I'm Max.
          </h1>
          <p className="py-4 mb-4 leading-8 text-link font-lato md:w-1/2">
            I have a background in backend development and a knack for
            problem-solving, which makes me the perfect candidate for your next
            project. If you need someone to come in and build something
            completely new from the ground up, or if you'd just like some help
            refining an idea that's already been in your head for a while but
            hasn't quite come together (yet), I'm here for you. I can also help
            with any of your other needs—like finding dead ends in any project
            and figuring out what it will take to fix them. And if you need
            someone who knows how to make things happen, then I'm your guy! My
            experience has taught me that no problem is too big or too small
            when it comes to making sure we get what we want accomplished. I
            currently work at {" "}
            <Link href={"https://enugutechhub.en.gov.ng"} className="text-link">
              Gardeners For Africa,
            </Link>{" "}
            an Edtech Startup.
          </p>
          <Button
            title={"view resume"}
            link={
              "https://drive.google.com/file/d/1EgC0AfN518kG-bqD0zqfi5X5vKfIJ9Bs/view?usp=sharing"
            }
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
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
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
      }
    `,
  });

  const { works, projects } = await data;

  return {
    props: {
      works,
      projects,
    },
  };
}

export default Home;
