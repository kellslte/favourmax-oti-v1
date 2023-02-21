import { randomUUID } from "crypto";

export default function handler(req, res) {
  res.status(200).json({
    successful: true,
    message: "Successful",
    data: {
      projects: [
        {
          id: randomUUID(),
          modalKey: 1,
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          modalKey: 2,
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          modalKey: 3,
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          modalKey: 4,
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          modalKey: 5,
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
      ],
    },
  });
}
