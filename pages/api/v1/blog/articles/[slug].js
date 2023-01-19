const articles = [
  {
    title: "Benefits of writing PHP as a backend framework.",
    slug: "benefits-of-writing-php-as-a-backend-framework",
    audio: "/audio.mp3",
    featuredImage: "/images/feature-image.png",
    paragraphone:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphtwo:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphthree:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphfour:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphfive:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphsix:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    bodyimage: "/images/body-image.png",
  },
  {
    title: "Introduction to Laravel for APIs.",
    slug: "introduction-to-laravel-for-apis",
    audio:
      "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg",
    featuredImage: "/images/feature-image.png",
    paragraphone:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphtwo:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphthree:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphfour:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphfive:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    paragraphsix:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quidem, adipisci quas excepturi inventore tenetur fugiat fuga et! Commodi earum unde, at beatae aspernatur reiciendis possimus et fugit deserunt quasi.",
    bodyImage: "/images/body-image.png",
  },
];

export default function handler(req, res) {
  const response = articles.find((article) => article.slug === req.query.slug);

  if (!response) return res.status(404).json({});

  return res.status(200).json(response);
}
