export default function handler(req, res) {
  res.status(200).json({
    work: [
      {
        title: "Enugu State Tech Hub",
        site: "https://enugustatetechhub.en.gov.ng",
        duration: "2022 - Present",
        description: [
          "I work as the engineering team  lead and backend developer",
          "I write backend code for all the products we are building and maintaining",
          "I've innovated and added automated deployment to our workflow",
        ],
      },
      {
        title: "Pennee Co",
        site: "https://pennee.co",
        duration: "2021 - 2022",
        description: [
          "I worked as a junior backend developer contributing to the development of some of the products here",
          "I reported to the head of engineering and worked with a frontend developer on the development of Pennee's partners dashboard",
          "I contributed to the development of Pennee's admin dashboard and learned how to debug production code with Vs Code",
        ],
      },
      {
        title: "Spirē",
        site: "https://www.getspire.io",
        duration: "2021 - 2022",
        description: [
          "I worked as a junior backend developer at Spirē and reported to the chief of technical operations",
          "I contributed code to the building of her main product",
          "I got introduced to graphql in production apps here",
        ],
      },
      {
        title: "Firstclass Pilot",
        site: "https://firstclasspilot.com",
        duration: "2019 - Present",
        description: [
          "I work here as a freelance backend developer and API integration specialist",
          "I write and debug code in the apps that we build",
          "I work on the setup and integration of external APIs",
        ],
      },
    ],
    socials: [],
    about: [],
    projects: [],
  });
}
