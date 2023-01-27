import { randomUUID } from "crypto";

export default function handler(req, res) {
  res.status(200).json({
    successful: true,
    message: "Successful",
    data: {
      project: {
        id: randomUUID(),
        title: "Super Drive",
        languages:
          "I wrote PHP for the backend and used Next Js for the frontend",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
        link: "http://lorembasetext",
        brief:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
      },
    },
  });
}
