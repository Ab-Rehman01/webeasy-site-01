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
          name: "ProMan – Free Bootstrap 5 Portfolio Template",
          slug: "proman-bootstrap-portfolio",
          keyphrase: "ProMan Portfolio Template",
          seoTitle: "ProMan – Free Bootstrap 5 Portfolio Template for Developers",
          metaDescription: "ProMan is a free Bootstrap 5 portfolio template with responsive design, cross-browser support, and modern UI for developers and creatives.",
          image: "/categories/portfolio/screencapture-themewagon-github.png",
          imageAlt: "ProMan Bootstrap 5 Portfolio Template Preview",
          image1: "/categories/screencapture-demo-htmlcodex-25252.png",
          demoUrl: "https://themewagon.github.io/proman/",
          price: "PKR 18,000",
          tags: [
            "ProMan",
            "Free Portfolio Template",
            "Bootstrap 5",
            "HTML5 CSS3",
            "Responsive Design",
            "Creative Portfolio",
            "Web Developer Portfolio",
            "Animated Video",
            "Testimonial Carousel",
            "Font Awesome"
          ],
          description: "ProMan is a free portfolio website template built with Bootstrap 5, perfect for developers and creatives looking for a clean and responsive design.",
          overview: "Built using modern technologies like HTML5, CSS3, and Bootstrap 5, ProMan features a responsive layout with animated video play, counters, and geolocation. It's optimized for speed and compatible with all major browsers.",
          gallery: "Includes header video modal, animated sections, testimonial carousel, portfolio sorting, and more.",
          skill: "Ideal for freelance developers, designers, and portfolio creators. No coding expertise required to customize.",
          features: [
            "HTML5 & CSS3",
            "Bootstrap 5 Framework",
            "SASS Supported Coding",
            "Clean and Modern Design",
            "Developer-Friendly HTML Code",
            "Fully Responsive and Mobile-Friendly",
            "Cross-Browser Compatibility",
            "Animated Video Play Button",
            "Popup YouTube Video Modal",
            "Animated Word Typing Effect",
            "Fun Fact Counter Section",
            "Animated Progress Bars",
            "Sortable Portfolio with Popup",
            "Hover Effects",
            "Testimonial Carousel",
            "Smooth Transition Effects",
            "Social Media Icons",
            "Back to Top Button",
            "Contact Form UI",
            "Geolocation Support",
            "Google Fonts Integration",
            "Font Awesome v5 and Bootstrap Icons"
          ]

        },
        {
          id: "4",
          name: "Mark – Multi-Page Bootstrap Portfolio Template",
          slug: "mark-bootstrap-portfolio",
          keyphrase: "Mark Portfolio Template",
          seoTitle: "Mark – Multi-Page Bootstrap 4 Portfolio Template for Professionals",
          metaDescription: "Mark is a responsive Bootstrap 4 portfolio template for developers and creatives. Showcasing your work is easy with modern layout and extra pages.",
          image: "/categories/portfolio/screencapture-themewagon-github-io-mark-.png",
          imageAlt: "Mark Bootstrap Portfolio Template Preview",
          image1: "/categories/mark-1-1200x736.png",
          demoUrl: "https://themewagon.github.io/mark/",
          price: "PKR 15,000",
          tags: [
            "Mark Portfolio",
            "Bootstrap Portfolio",
            "Personal Website Template",
            "HTML CSS Portfolio",
            "Web Developer Template",
            "Hero Header",
            "Sticky Navbar",
            "Creative Portfolio",
            "Responsive Layout",
            "Professional Design"
          ],
          description: "Mark is a multi-page Bootstrap 4 portfolio template crafted for developers, designers, and creative professionals. With a modern dark-style hero section and responsive layout, it helps you build a powerful online presence.",
          overview: "Mark is built using HTML5, CSS3, and Bootstrap 4. It includes extra customizable pages like project details, privacy policy, and more. Perfect for creating a professional and personalized portfolio site that works flawlessly across all devices and browsers.",
          gallery: "Features include a dark-themed hero header, project gallery, testimonials, and detailed service pages with interactive UI elements.",
          skill: "Ideal for web developers, designers, and freelancers. Requires only basic HTML/CSS knowledge for full customization.",
          features: [
            "Free Domain & Hosting Compatible",
            "Bootstrap 4 Framework",
            "HTML5 & CSS3",
            "Fully Responsive Design",
            "Cross-Browser Compatibility",
            "Multi-Page Template Structure",
            "Fixed Top Navigation Bar",
            "Hero Header with Call-to-Action",
            "On-Hover Effects",
            "Dropdown Menus",
            "Project Showcase Section",
            "Service Page with Accordions",
            "Testimonial Carousel",
            "Back to Top Button",
            "Functional Contact Form UI",
            "Font Awesome Icons",
            "Google Fonts Integration",
            "Footer with Navigation Links",
            "Smooth Scrolling"
          ]
        },

        {
          id: "5",
          name: "Profile – HTML5 Portfolio Website Template With Static Sidebar",
          slug: "profile-bootstrap-portfolio",
          keyphrase: "Profile Bootstrap Portfolio Template HTML5",
          seoTitle: "Profile – One Page Bootstrap Portfolio Template for Creatives",
          metaDescription: "Profile is a responsive one-page Bootstrap 5 portfolio template designed for developers, freelancers, and creatives. Stylish, customizable, and mobile-ready.",
          image: "/categories/portfolio/screencapture-themewagon-gggithub.png",
          imageAlt: "Profile Bootstrap Portfolio Template Preview",
          image1: "/categories/Profile-feat-Bootstrap-4-portfolio-website-template-1.jpg",
          demoUrl: "https://demo.themefisher.com/themefisher/profile/",
          price: "PKR 18,000",
          tags: [
            "Profile Portfolio",
            "Bootstrap One Page Template",
            "Creative Resume Website",
            "Personal Portfolio",
            "Sticky Sidebar",
            "Responsive Template",
            "Retina Ready",
            "CSS3 Animation",
            "Developer Portfolio",
            "Mobile Friendly Design"
          ],
          description: "Profile is a one-page Bootstrap 4 portfolio template designed for developers, creatives, and professionals. With sticky sidebar navigation and stylish UI elements, it helps you build a standout resume or portfolio website with ease.",
          overview: "Profile offers a vibrant layout with clean typography, smooth scrolling, and creative elements like text rotator, skill counters, and timeline sections. Built with HTML5, CSS3, jQuery, and Bootstrap 4, it’s fully responsive and optimized for all devices and browsers.",
          gallery: "Includes filterable gallery, modal image previews, timeline layout, and skill section with animated counters — all tailored for a modern personal brand.",
          skill: "Suitable for freelancers, developers, architects, and designers. Easy to edit with basic web skills.",
          features: [
            "Free Domain & Hosting Compatible",
            "One Page Template Design",
            "Sticky Sidebar Navigation",
            "Filterable Portfolio Gallery",
            "On-hover Effects",
            "Retina Ready",
            "Google Web Fonts Integration",
            "CSS3 Animations",
            "Text Rotator in Hero Section",
            "Font Awesome & Devicons Support",
            "jQuery Skill Counters",
            "Responsive Burger Menu",
            "Vertical Timeline Section",
            "Modal Image Pop-ups",
            "Smooth Scrolling",
            "Social Media Icons Integration",
            "Google Maps Support",
            "Tested on All Major Browsers",
            "Fully Responsive Layout"
          ]
        },
        {
          id: "6",
          name: "Creative Portfolio – Bootstrap 4 One Page Template",
          slug: "creative-portfolio-bootstrap-template",
          keyphrase: "Creative Portfolio Bootstrap Template",
          seoTitle: "Creative Portfolio – One Page Bootstrap 4 Template for Personal Branding",
          metaDescription: "Creative Portfolio is a sleek Bootstrap 4 one-page template for freelancers and creatives. Responsive, animated, and perfect for personal branding.",
          image: "/categories/portfolio/screencapture-themewagon-github-io-clyde-2025-05-19-.png",
          imageAlt: "Creative Portfolio Bootstrap Template Screenshot",
          image1: "/categories/Clyde-1200x736.png",
          demoUrl: "https://demo.themefisher.com/themefisher/creative-portfolio/",
          price: "PKR 16,000",
          tags: [
            "Creative Portfolio",
            "Bootstrap One Page Template",
            "Personal Branding",
            "Responsive Resume Website",
            "Portfolio Grid",
            "Freelancer Portfolio",
            "Hero Header Slider",
            "Animated Preloader",
            "Modern Web Template",
            "Creative Design Template"
          ],
          description: "A sleek and powerful single-page Bootstrap 4 portfolio template designed for personal branding, freelancers, and creatives. Fully responsive and visually engaging across all modern devices and browsers.",
          overview: "Creative Portfolio is a professionally crafted Bootstrap 4 HTML5 template ideal for showcasing personal portfolios, resumes, or freelance work. With its clean design, smooth interactions, and full mobile responsiveness, it provides a visually attractive and functionally rich platform to build your online presence. This template includes all essential sections like a hero slider, portfolio grid, blog, testimonial carousel, and contact form. It also comes with free domain & hosting for a complete start-to-finish solution.",
          gallery: "The template includes a dynamic portfolio grid, testimonial section with carousel, a hero header with slider, and blog entries – all styled to perfection for visual storytelling.",
          skill: "Built with HTML5, CSS3, and Bootstrap 4, the template ensures compatibility across all devices and modern browsers. It includes built-in features like counters, animations, and a preloader for better user experience.",
          features: [
            "Free Domain & Hosting Compatible",
            "One Page Layout with Sticky Navigation",
            "Clean and Minimal Bootstrap 4 Design",
            "Responsive Hero Header with Slider",
            "Animated SVG Preloader",
            "Cross-Browser Compatibility",
            "Interactive Hover Effects",
            "Fun Fact Counters and Progress Bars",
            "Filterable Portfolio Grid with Modal Previews",
            "Testimonial Carousel Section",
            "Integrated Contact Form",
            "Call-to-Action Buttons",
            "Blog Section with Breadcrumbs and Search",
            "Load-on-Scroll Animations",
            "Footer with Navigation Links",
            "FontAwesome Icon Integration"
          ]
        }

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
