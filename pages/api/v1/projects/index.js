import { randomUUID } from "crypto";

export default function handler(req, res) {
  res.status(200).json({
    successful: true,
    message: "Successful",
    data: {
      projects: [
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
        {
          id: randomUUID(),
          title: "Super Drive",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.",
          link: "http://lorembasetext",
        },
      ],
    },
  });
}
