// lib/categories.ts


export const categories: {
  name: string;
  slug: string;
  image: string;
  templates: {
    id: string;
    name: string;
    image: string;
    image1?: string;
    demoUrl: string;
    price: string;
    description: string;
    features?: string[];

  }[];
}[] = [
    {
      name: "Portfolio Templates",
      slug: "portfolio",
      image: "/categories/portfolio.jpg",
      templates: [
        {
          id: "1",
          name: "Portfolio",
          image: "/categories/portfolio/screencapture-themewagon-.png",
          image1: "/categories/screencapture-themewagonn-.png",
          demoUrl: "https://demo.site/portfolio1",
          price: "PKR 15,000",
          description: "Elegant and responsive portfolio template for creatives."
        },
        {
          id: "2",
          name: "Creative Portfolio",
          image: "/categories/portfolio/screencapture-file-K-templete-portfolio-lizu.png",
          image1: "/categories/screencapture-file-K-templete-portfolio-lizuf.png",
          demoUrl: "https://lizu-portfolio-responsive-html-template.vercel.app/",
          price: "PKR 18,000",
          description: "Showcase your artwork with this modern creative portfolio."
        },
        {
          id: "3",
          name: "Creative Portfolio - JoySeno",
          image: "/categories/portfolio/screencapture-themewagon-github.png",
          image1: "/categories/screencapture-demo-htmlcodex-25252.png",
          demoUrl: "https://demo.site/portfolio2",
          price: "PKR 18,000",
          description: `JoySeno is a portfolio template crafted with all the required features to emphasize designers’ skills.
This modern template uses Bootstrap 4, HTML5, and CSS3. It includes various components like a modal video player,
hero header, blog section, and more. Fully responsive and developer-friendly. Domain + Hosting included!`,

          features: [
            "HTML5 & CSS3",
            "Bootstrap 5",
            "SASS supported coding",
            "Modern and unique design",
            "Developer-friendly HTML code",
            "Clean and well-commented code",
            "Web browsers compatibility",
            "Responsive and mobile-friendly",
            "Animated video play button",
            "Popup YouTube video",
            "Animated word typing",
            "Fun Fact Counter",
            "Animated progress bar",
            "Sorting and popup portfolio",
            "On-hover Effect",
            "Testimonial carousel",
            "Smooth transition effects",
            "Social link with icon",
            "“Back to Top” button",
            "Contact form UI",
            "Geolocation support",
            "Google Web Fonts integrated",
            "Bootstrap icon font support",
            "Font Awesome v5 icon font"
          ]
        },
        {
          id: "4",
          name: "Creative Portfolio",
          image: "/categories/portfolio/screencapture-themewagon-github-io-mark-.png",
          image1: "/categories/mark-1-1200x736.png",
          demoUrl: "https://demo.site/portfolio2",
          price: "PKR 18,000",
          description: "Showcase your artwork with this modern creative portfolio."
        },
        {
          id: "5",
          name: "Creative Portfolio",
          image: "/categories/portfolio/screencapture-themewagon-gggithub.png",
          image1: "/categories/Profile-feat-Bootstrap-4-portfolio-website-template-1.jpg",
          demoUrl: "https://demo.site/portfolio2",
          price: "PKR 18,000",
          description: `Profile is a modern, responsive, and thoughtfully designed Bootstrap 4 portfolio website template ideal for professionals seeking to showcase their skills and work. Whether you're a freelancer, designer, developer, architect, or any creative individual, this template offers all the essential tools to build an impressive online presence.`,

          features: [
            " * One Page Layout with sticky sidebar navigation",
            " * Smooth CSS3 animations and hover effects",
            " * Filterable portfolio gallery with modal previews",
            " * Retina ready design optimized for high-resolution screens",
            " * Text rotator for dynamic headings or roles",
            " * Responsive burger menu for seamless mobile experience",
            " * Integrated social media icons",
            " * Google Web Fonts for enhanced typography",
            " * Built-in jQuery counters to display skill percentages",
            " * Cross-browser compatibility ensuring reliable performance across major browsers",
            " * Google Maps integration for contact or location section"
          ]
        },
        {
          id: "6",
          name: "Creative Portfolio",
          image: "/categories/portfolio/screencapture-themewagon-github-io-clyde-2025-05-19-.png",
          image1: "/categories/Clyde-1200x736.png",
          demoUrl: "https://demo.site/portfolio2",
          price: "PKR 18,000",
          description: "Showcase your artwork with this modern creative portfolio."
        },
      ],
    },
    {
      name: "E-Commerce Templates",
      slug: "ecommerce",
      image: "/categories/ecommerce.jpg",
      templates: [
        {
          id: "1",
          name: "Fashion Store",
          image: "/templates/ecommerce1.jpg",
          demoUrl: "https://demo.site/ecommerce1",
          price: "PKR 25,000",
          description: "Stylish fashion e-commerce template with cart and payment integration."
        },
        {
          id: "2",
          name: "Tech Gadgets Store",
          image: "/templates/ecommerce2.jpg",
          demoUrl: "https://demo.site/ecommerce2",
          price: "PKR 30,000",
          description: "Modern tech store template for selling electronics and gadgets."
        },
        {
          id: "1",
          name: "Fashion Store",
          image: "/templates/ecommerce1.jpg",
          demoUrl: "https://demo.site/ecommerce1",
          price: "PKR 25,000",
          description: "Stylish fashion e-commerce template with cart and payment integration."
        },
        {
          id: "2",
          name: "Tech Gadgets Store",
          image: "/templates/ecommerce2.jpg",
          demoUrl: "https://demo.site/ecommerce2",
          price: "PKR 30,000",
          description: "Modern tech store template for selling electronics and gadgets."
        },
        {
          id: "1",
          name: "Fashion Store",
          image: "/templates/ecommerce1.jpg",
          demoUrl: "https://demo.site/ecommerce1",
          price: "PKR 25,000",
          description: "Stylish fashion e-commerce template with cart and payment integration."
        },
        {
          id: "2",
          name: "Tech Gadgets Store",
          image: "/templates/ecommerce2.jpg",
          demoUrl: "https://demo.site/ecommerce2",
          price: "PKR 30,000",
          description: "Modern tech store template for selling electronics and gadgets."
        },
      ],
    },
    {
      name: "Construction Business",
      slug: "construction",
      image: "/categories/construction.jpg",
      templates: [
        {
          id: "1",
          name: "Builder Pro",
          image: "/templates/construction1.jpg",
          demoUrl: "https://demo.site/construction1",
          price: "PKR 22,000",
          description: "Professional website template for construction companies."
        },
        {
          id: "1",
          name: "Builder Pro",
          image: "/templates/construction1.jpg",
          demoUrl: "https://demo.site/construction1",
          price: "PKR 22,000",
          description: "Professional website template for construction companies."
        },
        {
          id: "1",
          name: "Builder Pro",
          image: "/templates/construction1.jpg",
          demoUrl: "https://demo.site/construction1",
          price: "PKR 22,000",
          description: "Professional website template for construction companies."
        },
        {
          id: "1",
          name: "Builder Pro",
          image: "/templates/construction1.jpg",
          demoUrl: "https://demo.site/construction1",
          price: "PKR 22,000",
          description: "Professional website template for construction companies."
        },
        {
          id: "1",
          name: "Builder Pro",
          image: "/templates/construction1.jpg",
          demoUrl: "https://demo.site/construction1",
          price: "PKR 22,000",
          description: "Professional website template for construction companies."
        },
        {
          id: "1",
          name: "Builder Pro",
          image: "/templates/construction1.jpg",
          demoUrl: "https://demo.site/construction1",
          price: "PKR 22,000",
          description: "Professional website template for construction companies."
        },
      ],
    },
    {
      name: "Landing Pages",
      slug: "landing",
      image: "/categories/landing.jpg",
      templates: [
        {
          id: "1",
          name: "App Launch",
          image: "/templates/landing1.jpg",
          demoUrl: "https://demo.site/landing1",
          price: "PKR 12,000",
          description: "Perfect landing page for mobile app promotion."
        },
        {
          id: "1",
          name: "App Launch",
          image: "/templates/landing1.jpg",
          demoUrl: "https://demo.site/landing1",
          price: "PKR 12,000",
          description: "Perfect landing page for mobile app promotion."
        },
        {
          id: "1",
          name: "App Launch",
          image: "/templates/landing1.jpg",
          demoUrl: "https://demo.site/landing1",
          price: "PKR 12,000",
          description: "Perfect landing page for mobile app promotion."
        },
        {
          id: "1",
          name: "App Launch",
          image: "/templates/landing1.jpg",
          demoUrl: "https://demo.site/landing1",
          price: "PKR 12,000",
          description: "Perfect landing page for mobile app promotion."
        },
        {
          id: "1",
          name: "App Launch",
          image: "/templates/landing1.jpg",
          demoUrl: "https://demo.site/landing1",
          price: "PKR 12,000",
          description: "Perfect landing page for mobile app promotion."
        },
        {
          id: "1",
          name: "App Launch",
          image: "/templates/landing1.jpg",
          demoUrl: "https://demo.site/landing1",
          price: "PKR 12,000",
          description: "Perfect landing page for mobile app promotion."
        },
      ],
    },
    {
      name: "Business Sites",
      slug: "business",
      image: "/categories/business.jpg",
      templates: [
        {
          id: "1",
          name: "Corporate Site",
          image: "/templates/business1.jpg",
          demoUrl: "https://demo.site/business1",
          price: "PKR 20,000",
          description: "Clean and professional business website template."
        },
        {
          id: "1",
          name: "Corporate Site",
          image: "/templates/business1.jpg",
          demoUrl: "https://demo.site/business1",
          price: "PKR 20,000",
          description: "Clean and professional business website template."
        },
        {
          id: "1",
          name: "Corporate Site",
          image: "/templates/business1.jpg",
          demoUrl: "https://demo.site/business1",
          price: "PKR 20,000",
          description: "Clean and professional business website template."
        },
        {
          id: "1",
          name: "Corporate Site",
          image: "/templates/business1.jpg",
          demoUrl: "https://demo.site/business1",
          price: "PKR 20,000",
          description: "Clean and professional business website template."
        },
      ],
    },
    {
      name: "Blogs & Magazines",
      slug: "blogs",
      image: "/categories/blogs.jpg",
      templates: [
        {
          id: "1",
          name: "Tech Blog",
          image: "/templates/blog1.jpg",
          demoUrl: "https://demo.site/blog1",
          price: "PKR 14,000",
          description: "Simple and stylish blog template for tech writers."
        },
        {
          id: "1",
          name: "Tech Blog",
          image: "/templates/blog1.jpg",
          demoUrl: "https://demo.site/blog1",
          price: "PKR 14,000",
          description: "Simple and stylish blog template for tech writers."
        },
        {
          id: "1",
          name: "Tech Blog",
          image: "/templates/blog1.jpg",
          demoUrl: "https://demo.site/blog1",
          price: "PKR 14,000",
          description: "Simple and stylish blog template for tech writers."
        },
        {
          id: "1",
          name: "Tech Blog",
          image: "/templates/blog1.jpg",
          demoUrl: "https://demo.site/blog1",
          price: "PKR 14,000",
          description: "Simple and stylish blog template for tech writers."
        },
        {
          id: "1",
          name: "Tech Blog",
          image: "/templates/blog1.jpg",
          demoUrl: "https://demo.site/blog1",
          price: "PKR 14,000",
          description: "Simple and stylish blog template for tech writers."
        },
        {
          id: "1",
          name: "Tech Blog",
          image: "/templates/blog1.jpg",
          demoUrl: "https://demo.site/blog1",
          price: "PKR 14,000",
          description: "Simple and stylish blog template for tech writers."
        },
      ],
    },
  ];
