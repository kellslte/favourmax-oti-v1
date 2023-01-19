const data = {
  featured: [
    {
      id: Math.random().toString(16),
      title: "Benefits of writing PHP as a backend framework.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et facilisis eleifend egestas iaculis. Molestie neque varius vitae tristique at scelerisque urna magna suscipit. Sollicitudin duis turpis commodo eget eget semper.",
      link: "/blog/benefits-of-writing-php-as-a-backend-framework",
      image: "/images/feature-image.png",
    },
    {
      id: Math.random().toString(16),
      title: "Introduction to Laravel for APIs.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et facilisis eleifend egestas iaculis. Molestie neque varius vitae tristique at scelerisque urna magna suscipit. Sollicitudin duis turpis commodo eget eget semper.",
      link: "/blog/introduction-to-laravel-for-apis",
      image: "/images/feature-image.png",
    },
    {
      id: Math.random().toString(16),
      title: "Benefits of writing PHP as a backend framework.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et facilisis eleifend egestas iaculis. Molestie neque varius vitae tristique at scelerisque urna magna suscipit. Sollicitudin duis turpis commodo eget eget semper.",
      link: "/blog/benefits-of-writing-php-as-a-backend-framework",
      image: "/images/feature-image.png",
    },
    {
      id: Math.random().toString(16),
      title: "Introduction to Laravel for APIs.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et facilisis eleifend egestas iaculis. Molestie neque varius vitae tristique at scelerisque urna magna suscipit. Sollicitudin duis turpis commodo eget eget semper.",
      link: "/blog/introduction-to-laravel-for-apis",
      image: "/images/feature-image.png",
    },
    {
      id: Math.random().toString(16),
      title: "Benefits of writing PHP as a backend framework.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et facilisis eleifend egestas iaculis. Molestie neque varius vitae tristique at scelerisque urna magna suscipit. Sollicitudin duis turpis commodo eget eget semper.",
      link: "/blog/benefits-of-writing-php-as-a-backend-framework",
      image: "/images/feature-image.png",
    },
  ],
};

export default function handler(req, res) {
  return res.status(200).json(data);
}
