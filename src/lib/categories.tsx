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
    overview?: string;
    features?: string[];
    gallery?: string;
    skill?: string;
    slug?: string;
    keyphrase?: string;
    seoTitle?: string;
    metaDescription?: string;
    imageAlt?: string;
    tags?: string[];


  }[];
}[] = [
    {
      name: "Portfolio Templates",
      slug: "portfolio",
      image: "/categories/portfolio.jpg",
      templates: [
        {

          id: "1",
          name: "JoySeno Portfolio",
          slug: "joyseno-portfolio-template",
          keyphrase: "Bootstrap 4 Portfolio Template",
          seoTitle: "Bootstrap 4 Personal Portfolio Website Template – JoySeno Portfolio",
          metaDescription: "JoySeno is a Bootstrap 4 portfolio template with responsive design, SEO optimization, and a modern layout. Ideal for creative professionals.",
          image: "/categories/portfolio/screencapture-themewagon-.png",
          imageAlt: "JoySeno Bootstrap 4 multipage portfolio template preview",
          image1: "/categories/screencapture-themewagonn-.png",
          demoUrl: "https://demo.site/portfolio3",
          price: "PKR 18,000",
          tags: [
            "Bootstrap 4",
            "Portfolio Template",
            "Responsive Design",
            "Personal Portfolio",
            "Creative Website",
            "Developer Portfolio",
            "Multipage Template"
          ],
          description: `A beautifully crafted multipage portfolio template ideal for designers, developers, and creative professionals. Optimized for speed and SEO, with a modern layout and interactive UI.`,
          overview: `JoySeno is a multipage portfolio website template designed to showcase personal or professional work with style and clarity. Built using Bootstrap 4, it offers a fast, responsive, and SEO-optimized structure. Whether you're launching a personal brand or displaying your projects, this template ensures a polished and engaging web presence.`,
          gallery: `The portfolio section includes a grid-based layout with hover effects and on-load animations. Each project opens in a modal preview for enhanced interaction. Blog and video sections are available to add dynamic content.`,
          skill: `Responsive design, smooth navigation, optimized loading time, and developer-friendly codebase ensure a seamless experience across all devices and browsers.`,
          features: [
            "Multipage layout with smooth navigation",
            "Clean and developer-friendly HTML5/CSS3 code",
            "Bootstrap 4.1.0 framework integration",
            "SEO-optimized structure for better search visibility",
            "Interactive hero section with modal video player",
            "On-hover and on-load animations for visual appeal",
            "Blog section included for content expansion",
            "Call-to-action buttons to boost user engagement",
            "Portfolio section with hover effects and modal previews",
            "Cross-browser compatible and mobile-friendly design",
            "Contact form UI for user interaction",
            "Burger menu for smooth mobile navigation",
            "Top navigation bar with sticky behavior",
          ]
        },
        {
          id: "2",
          name: "LiZu – Creative Portfolio for Freelancers",
          slug: "lizu-creative-portfolio",
          keyphrase: "LiZu Creative Portfolio Template",
          seoTitle: "LiZu – Creative Portfolio Template for Freelancers",
          metaDescription: "LiZu is a modern creative portfolio template for designers and freelancers. Fully customizable, responsive, and optimized for WordPress & Joomla.",
          image: "/categories/portfolio/screencapture-file-K-templete-portfolio-lizu.png",
          imageAlt: "LiZu Creative Portfolio Template Preview",
          image1: "/categories/screencapture-file-K-templete-portfolio-lizuf.png",
          demoUrl: "https://lizu-portfolio-responsive-html-template.vercel.app/",
          price: "PKR 18,000",
          tags: [
            "LiZu",
            "Creative Portfolio",
            "Freelancer Template",
            "Personal Portfolio Website",
            "Graphic Designer Portfolio",
            "Bootstrap 4 Template",
            "Retina Ready",
            "WordPress Ready",
            "Joomla Compatible",
            "Modern UI"
          ],
          description: "LiZu is a modern portfolio template perfect for graphic designers, photographers, and all kinds of creative freelancers.",
          overview: "LiZu offers a clean, fresh, and colorful layout based on Bootstrap 4+. It is retina-ready, fully customizable, and optimized for integration with WordPress, Joomla, and Drupal.",
          gallery: "Includes multiple homepage demos and creative layout variations.",
          skill: "Ideal for creative professionals like designers, artists, developers, and photographers. Beginner-friendly customization.",
         features: [
            "3 Complete Page Demos",
            "Awesome Color Preset",
            "Based on 1170px Grid System",
            "Full width: 1920px",
            "SaaS, Mail, Git Control, Cloud Landing Page",
            "Super Clear and Fresh Layout",
            "Professional and Creative Design",
            "Optimized for WordPress, Drupal, and Joomla",
            "Logical Structure and Layer Naming for Better Usability",
            "W3C Valid Code",
            "Bootstrap 4+ Layout Ready",
            "Fully Customizable",
            "Free Google Fonts",
            "Retina Ready",
            "Free Font-Based Icons",
            "Easy to Change Colors and Images",
            "Complete Documentation Included"
          ],
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
            "Font Awesome v5 icon font",
          ]
        },
        {
          id: "4",
          name: "JoySeno Portfolio",
          slug: "joyseno-portfolio-template",
          keyphrase: "Bootstrap 4 Portfolio Template",
          seoTitle: "Bootstrap 4 Personal Portfolio Website Template – JoySeno Portfolio",
          metaDescription: "JoySeno is a Bootstrap 4 portfolio template with responsive design, SEO optimization, and a modern layout. Ideal for creative professionals.",
          image: "/categories/portfolio/joyseno-thumb.jpg",
          imageAlt: "JoySeno Bootstrap 4 multipage portfolio template preview",
          image1: "/categories/portfolio/joyseno-hero.jpg",
          demoUrl: "https://demo.site/portfolio3",
          price: "PKR 18,000",
          tags: [
            "Bootstrap 4",
            "Portfolio Template",
            "Responsive Design",
            "Personal Portfolio",
            "Creative Website",
            "Developer Portfolio",
            "Multipage Template"
          ],
          description: `A beautifully crafted multipage portfolio template ideal for designers, developers, and creative professionals. Optimized for speed and SEO, with a modern layout and interactive UI.`,
          overview: `JoySeno is a multipage portfolio website template designed to showcase personal or professional work with style and clarity. Built using Bootstrap 4, it offers a fast, responsive, and SEO-optimized structure. Whether you're launching a personal brand or displaying your projects, this template ensures a polished and engaging web presence.`,
          gallery: `The portfolio section includes a grid-based layout with hover effects and on-load animations. Each project opens in a modal preview for enhanced interaction. Blog and video sections are available to add dynamic content.`,
          skill: `Responsive design, smooth navigation, optimized loading time, and developer-friendly codebase ensure a seamless experience across all devices and browsers.`,
          features: [
            "Multipage layout with smooth navigation",
            "Clean and developer-friendly HTML5/CSS3 code",
            "Bootstrap 4.1.0 framework integration",
            "SEO-optimized structure for better search visibility",
            "Interactive hero section with modal video player",
            "On-hover and on-load animations for visual appeal",
            "Blog section included for content expansion",
            "Call-to-action buttons to boost user engagement",
            "Portfolio section with hover effects and modal previews",
            "Cross-browser compatible and mobile-friendly design",
            "Contact form UI for user interaction",
            "Burger menu for smooth mobile navigation",
            "Top navigation bar with sticky behavior",
          ]
        },

        {
          id: "5",
          name: "Creative Portfolio",
          image: "/categories/portfolio/screencapture-themewagon-gggithub.png",
          image1: "/categories/Profile-feat-Bootstrap-4-portfolio-website-template-1.jpg",
          demoUrl: "https://demo.site/portfolio2",
          price: "PKR 18,000",
          description: `Profile is a modern, responsive, and thoughtfully designed Bootstrap 4 portfolio website template ideal for professionals seeking to showcase their skills and work. Whether you're a freelancer, designer, developer, architect, or any creative individual, this template offers all the essential tools to build an impressive online presence.`,
          overview: `Profile is structured as a single-page layout, featuring smooth scrolling, elegant typography, and a vibrant yet professional color scheme. The hero section prominently displays a large profile photo, your name, designation, and quick access to social media links — making an impactful first impression.A vertical static sidebar on the left showcases an avatar and a neatly animated navigation menu for easy access to different sections.`,
          gallery: `A standout feature of this template, the portfolio section includes filterable categories, allowing visitors to view work based on type or skill. Clicking on a project thumbnail opens a large modal popup where both images and descriptions can be showcased — ideal for presenting past work in an organized, professional format.`,
          skill: `The skills section includes animated counters to visually represent your proficiencies. A striking background enhances visual appeal, while integrated icon libraries such as Font Awesome, Devicons, and Simple Line Icons add clarity and consistency.The timeline section provides a vertically sliding presentation for listing educational background or project history in a dynamic, unconventional format.`,
          features: [
            " One Page Layout with sticky sidebar navigation",
            "  Smooth CSS3 animations and hover effects",
            "  Filterable portfolio gallery with modal previews",
            "  Retina ready design optimized for high-resolution screens",
            "  Text rotator for dynamic headings or roles",
            "  Responsive burger menu for seamless mobile experience",
            "  Integrated social media icons",
            "  Google Web Fonts for enhanced typography",
            "  Built-in jQuery counters to display skill percentages",
            "  Cross-browser compatibility ensuring reliable performance across major browsers",
            "  Google Maps integration for contact or location section",
          ]
        },
        {
          id: "6",
          name: "Creative Portfolio",
          image: "/categories/portfolio/screencapture-themewagon-github-io-clyde-2025-05-19-.png",
          image1: "/categories/Clyde-1200x736.png",
          demoUrl: "https://demo.site/portfolio2",
          price: "PKR 18,000",
          description: `A sleek and powerful single-page Bootstrap 4 portfolio template designed for personal branding, freelancers, and creatives. Fully responsive and visually engaging across all modern devices and browsers.`,
          overview: `Creative Portfolio is a professionally crafted Bootstrap 4 HTML5 template ideal for showcasing personal portfolios, resumes, or freelance work. With its clean design, smooth interactions, and full mobile responsiveness, it provides a visually attractive and functionally rich platform to build your online presence. This template includes all essential sections like a hero slider, portfolio grid, blog, testimonial carousel, and contact form. It also comes with free domain & hosting for a complete start-to-finish solution.`,
          gallery: `The template includes a dynamic portfolio grid, testimonial section with carousel, a hero header with slider, and blog entries – all styled to perfection for visual storytelling.`,
          skill: `Built with HTML5, CSS3, and Bootstrap 4, the template ensures compatibility across all devices and modern browsers. It includes built-in features like counters, animations, and a preloader for better user experience.`,
          features: [
            "One Page Layout with sticky navigation",
            "Clean and minimal Bootstrap 4 design",
            "Responsive hero header with slider",
            "Animated SVG preloader for smooth loading",
            "Cross-browser compatibility",
            "Interactive hover effects",
            "Fun fact counters and progress bars",
            "Filterable portfolio grid with modal previews",
            "Testimonial carousel section",
            "Integrated contact form",
            "Call-to-action buttons for engagement",
            "Blog section with breadcrumbs and search option",
            "Load-on-scroll animations",
            "Footer with navigation links",
            "FontAwesome icon integration",
            "Free domain & hosting included"
          ]
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
