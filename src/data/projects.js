export const projects = [
  {
    title: 'BitBuy',
    slug: 'bitbuy',
    type: 'App',
    description: 'A modern, full-stack e-commerce platform featuring a sleek user interface, secure Stripe payment integration, and a robust admin dashboard for product and order management.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'Stripe'],
    github: 'https://github.com/Markcrest-dev/BitBuy',
    demo: 'https://bit-buy-rho.vercel.app',
    caseStudy: `
# BitBuy: Next-Gen E-Commerce

BitBuy is a full-stack e-commerce platform built to demonstrate modern web development practices, focusing on performance, secure payments, and a seamless administrative experience.

## The Challenge
Building a complete e-commerce solution requires handling complex state management for the shopping cart, integrating secure third-party payment gateways, and providing a comprehensive dashboard for inventory management.

## The Solution
- **Tech Stack**: Leveraged Next.js for server-side rendering and API routes, ensuring fast load times and excellent SEO.
- **Database**: Used Prisma ORM for type-safe database interactions, managing products, users, and order history reliably.
- **Payments**: Integrated Stripe for secure, frictionless checkout experiences.
- **Admin Dashboard**: Built a protected admin area for real-time inventory and order tracking.

## The Outcome
A production-ready e-commerce template that offers a smooth shopping experience for users and powerful management tools for store owners.
    `,
  },
  {
    title: 'StockFlow',
    slug: 'stockflow',
    type: 'App',
    description: 'A collaborative task and inventory management application designed for seamless real-time updates and team coordination.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Markcrest-dev/StockFLow',
    demo: '',
    caseStudy: `
# StockFlow: Collaborative Inventory

StockFlow is a real-time inventory and task management application designed to help teams coordinate seamlessly and keep track of stock levels instantly.

## The Challenge
Traditional inventory systems often lack real-time collaboration features, leading to discrepancies when multiple team members are updating stock simultaneously.

## The Solution
- **Real-Time Sync**: Implemented WebSocket connections to broadcast inventory changes instantly to all connected clients.
- **MERN Stack**: Utilized the MERN stack (MongoDB, Express, React, Node.js) for a unified, JavaScript-driven architecture from front to back.
- **Access Control**: Built robust authentication and role-based access control to ensure only authorized personnel can modify critical inventory data.

## The Outcome
A highly responsive and collaborative platform that eliminates inventory sync issues and improves team productivity.
    `,
  },
  {
    title: 'Countdown',
    slug: 'countdown',
    type: 'Website',
    description: 'A responsive countdown website that lets users create and track events in real time with sleek timers and intuitive design.',
    tech: ['JavaScript', 'CSS3'],
    github: 'https://github.com/Markcrest-dev/Countdown',
    demo: 'https://countdown-two-tan.vercel.app',
    caseStudy: `
# Countdown: Real-Time Event Tracker

Countdown is a lightweight, responsive web application designed to help users track important upcoming events down to the second.

## The Challenge
Handling time zones and preventing UI rendering jank during continuous, high-frequency timer updates can be tricky, especially on lower-end mobile devices.

## The Solution
- **Efficient State Updates**: Utilized vanilla JavaScript's \`requestAnimationFrame\` instead of \`setInterval\` for buttery smooth timer updates that don't block the main thread.
- **Minimalist Design**: Crafted a distraction-free, sleek user interface with pure CSS3, keeping the bundle size incredibly small and the performance blazingly fast.
- **Responsiveness**: Ensured the timers dynamically scale and adapt across all screen sizes.

## The Outcome
A perfectly synchronized, high-performance countdown application that provides an intuitive and visually pleasing way to track milestones.
    `,
  },
  {
    title: 'StudyStorm',
    slug: 'studystorm',
    type: 'App',
    description: 'An interactive learning platform and biology quiz app for students, featuring timed questions, difficulty levels, and progress tracking with engaging visuals.',
    tech: ['JavaScript', 'Express', 'SQLite3'],
    github: 'https://github.com/Markcrest-dev/StudyStorm',
    demo: 'https://studystorm.netlify.app/',
    caseStudy: `
# StudyStorm: Gamified Learning

StudyStorm is an interactive biology quiz app and learning platform aimed at making studying engaging and effective through gamification.

## The Challenge
Keeping students motivated is difficult. The application needed to provide an engaging quiz loop with immediate feedback, while securely tracking user progress across sessions.

## The Solution
- **Engaging Quiz Engine**: Built a dynamic quiz system with timed questions, randomized choices, and tiered difficulty levels.
- **Secure Backend**: Leveraged Express.js to build a robust REST API, backed by SQLite3 for lightweight, efficient data storage of student profiles and scores.
- **Progress Tracking**: Implemented visual progress indicators to give students a sense of accomplishment after completing modules.

## The Outcome
An educational tool that successfully merges learning with gamified elements, increasing student retention and knowledge absorption.
    `,
  },
  {
    title: 'My Portfolio',
    slug: 'my-portfolio',
    type: 'Website',
    description: 'A modern, responsive portfolio website showcasing my professional work, built with a refined high-end design system, dark mode, and dynamic animations.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Markcrest-dev/My_Portfolio',
    demo: '',
    caseStudy: `
# My Portfolio: A Digital Masterpiece

This portfolio website serves as my primary digital presence, built entirely from scratch to showcase my skills, projects, and professional journey.

## The Challenge
A portfolio must stand out in a sea of generic templates. The goal was to create a highly performant, visually striking single-page application that feels premium and unique.

## The Solution
- **Modern Architecture**: Migrated from a static HTML structure to a modern React 18 and Vite setup for superior developer experience and optimized builds.
- **Dynamic Animations**: Integrated Framer Motion to provide buttery-smooth page transitions and micro-interactions that breathe life into the UI.
- **Refined Aesthetics**: Designed a high-end visual system based on a near-black canvas and an electric lime accent, stepping away from standard web templates.

## The Outcome
A blazingly fast, highly accessible, and visually captivating portfolio that perfectly encapsulates my identity as a full-stack developer.
    `,
  },
  {
    title: 'Tourism',
    slug: 'tourism',
    type: 'Website',
    description: 'A beautifully designed tourist website offering curated travel guides, destination highlights, and interactive elements for a seamless exploration experience.',
    tech: ['SCSS', 'JavaScript'],
    github: 'https://github.com/Markcrest-dev/Tourism',
    demo: 'https://tourism-eight-umber.vercel.app',
    caseStudy: `
# Tourism: Digital Travel Guides

Tourism is a visually immersive website designed to inspire travelers by showcasing breathtaking destinations and providing curated travel guides.

## The Challenge
Travel websites must rely heavily on high-resolution imagery, which can significantly degrade page load speeds and overall performance if not handled correctly.

## The Solution
- **Advanced Styling**: Leveraged SCSS for modular, maintainable stylesheets, allowing for complex layouts like CSS Grids and dynamic hover effects.
- **Image Optimization**: Implemented lazy loading and modern image formats to ensure the heavy visual assets do not block the initial page render.
- **Interactive UI**: Added JavaScript-driven interactive maps and image carousels to enhance the user's exploratory experience.

## The Outcome
A responsive, high-performance travel guide platform that inspires users without compromising on speed or accessibility.
    `,
  },
  {
    title: 'NoAgent',
    slug: 'noagent',
    type: 'App',
    description: 'An innovative real estate platform streamlining the leasing process by directly connecting landlords and tenants, featuring move-in services and integrated split payments.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
    github: 'https://github.com/Markcrest-dev/NoAgent',
    demo: '',
    caseStudy: `
# NoAgent: Revolutionizing Real Estate

NoAgent is an innovative real estate platform that streamlines the leasing process by directly connecting landlords and tenants, completely eliminating the need for traditional agents.

## The Challenge
The primary challenge was handling the complex logic of lease agreements, background checks, and split payments securely, while maintaining a simple and intuitive UI for both landlords and tenants.

## The Solution
We implemented a robust architecture using React and Firebase. Key features include:
- **Move-In Services**: A streamlined workflow for tenants to request and schedule services upon moving in.
- **Split Payments**: We integrated Paystack to handle complex 2% split payments automatically, transferring 98% directly to the landlord's subaccount while retaining the platform fee.
- **Real-Time Chat**: Direct, real-time messaging between landlords and tenants using Firebase Firestore.

## The Outcome
The result is a highly secure, performant application that significantly reduces the friction and cost of renting properties.
    `,
  },
  {
    title: 'House Of Aura',
    slug: 'house-of-aura',
    type: 'Website',
    description: 'A premium, highly interactive salon website featuring immersive 3D elements, smooth GSAP animations, and a dynamic content management system via Sanity.',
    tech: ['React', 'Three.js', 'GSAP', 'Sanity'],
    github: 'https://github.com/Markcrest-dev/House_Of_Aura',
    demo: 'https://house-of-aura.vercel.app',
    caseStudy: `
# House Of Aura: A Premium Salon Experience

House Of Aura is a premium, highly interactive salon website designed to reflect the elegance and high-end service of the physical salon.

## The Challenge
The goal was to create a digital experience that felt as luxurious as the salon itself. This required moving beyond standard web design and incorporating immersive 3D elements and fluid animations without sacrificing performance or accessibility.

## The Solution
- **Immersive 3D Elements**: We utilized Three.js to create subtle, engaging 3D backgrounds that respond to user interaction.
- **Fluid Animations**: GSAP was used extensively for scroll-triggered animations and smooth page transitions, giving the site a "weightless" feel.
- **Dynamic Content**: A Sanity CMS backend empowers the salon staff to easily update services, pricing, and gallery images without touching code.

## The Outcome
A visually stunning, high-performance website that captures the essence of the brand and provides a memorable first impression for potential clients.
    `,
  },
  {
    title: 'Elite Estates',
    slug: 'elite-estates',
    type: 'Website',
    description: 'A sophisticated real estate property listing platform with beautiful scroll animations, interactive data visualization, and a clean modern interface.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
    github: 'https://github.com/Markcrest-dev/elite-estates',
    demo: '',
    caseStudy: `
# Elite Estates: Premium Property Listings

Elite Estates is a sophisticated platform that elevates the property search experience through beautiful design and interactive data visualization.

## The Challenge
Real estate listings are often dry and overwhelming. The objective was to present property data in an engaging, premium format that keeps potential buyers interested.

## The Solution
- **Fluid Animations**: Utilized Framer Motion for smooth scroll animations and page transitions, giving the site a luxurious feel.
- **Data Visualization**: Integrated Recharts to provide interactive graphs for property value trends and neighborhood statistics.
- **Modern Interface**: Designed a clean, minimalist UI with Tailwind CSS, ensuring the property images remain the focal point.

## The Outcome
A visually striking real estate platform that provides buyers with both aesthetic appeal and deep, interactive data insights.
    `,
  },
  {
    title: 'Aether',
    slug: 'aether',
    type: 'Website',
    description: 'An experimental, immersive web experience built with 3D graphics, leveraging Three.js and GSAP for stunning visual storytelling and interactions.',
    tech: ['React', 'Three.js', 'GSAP'],
    github: 'https://github.com/Markcrest-dev/Aether',
    demo: 'https://aether-xi-fawn.vercel.app',
    caseStudy: `
# Aether: An Immersive 3D Experience

Aether is an experimental web project designed to push the boundaries of browser-based 3D graphics and interactive storytelling.

## The Challenge
Rendering complex 3D scenes in the browser is computationally expensive. The challenge was to maintain a stable 60 frames per second (FPS) while orchestrating complex visual transitions.

## The Solution
- **WebGL Rendering**: Utilized Three.js to build custom 3D geometries, materials, and lighting setups directly in the browser.
- **Animation Orchestration**: Used GSAP (GreenSock Animation Platform) to sync camera movements and 3D object transformations with user scroll events.
- **Performance Tuning**: Implemented object instancing and careful geometry management to reduce draw calls and memory overhead.

## The Outcome
A captivating, high-performance WebGL experience that demonstrates the creative possibilities of modern web technologies.
    `,
  },
  {
    title: 'Grandview Academy',
    slug: 'grandview-academy',
    type: 'App',
    description: 'A comprehensive school management portal featuring internationalization (i18n), interactive data charts, and Progressive Web App (PWA) capabilities.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'i18next'],
    github: 'https://github.com/Markcrest-dev/Grandview_Academy',
    demo: 'https://grandview-academy.vercel.app',
    caseStudy: `
# Grandview Academy: School Management Portal

Grandview Academy is a comprehensive portal designed to streamline administrative tasks, track student progress, and facilitate communication for educational institutions.

## The Challenge
Educational portals often suffer from cluttered interfaces and poor accessibility. The goal was to build a clean, multilingual, and offline-capable application for diverse user bases (parents, teachers, and admins).

## The Solution
- **Internationalization**: Integrated \`i18next\` to support multiple languages, making the portal accessible to non-native speaking parents.
- **PWA Capabilities**: Configured the application as a Progressive Web App, allowing users to install it on their devices and access critical information even with poor network connectivity.
- **Data Visualization**: Incorporated interactive charts to visualize student attendance and performance metrics intuitively.

## The Outcome
An inclusive, high-performance portal that modernizes school administration and enhances the user experience for all stakeholders.
    `,
  },
  {
    title: 'A-BIG',
    slug: 'a-big',
    type: 'App',
    description: 'A dynamic web application fully integrated with Firebase for real-time data handling and robust backend services.',
    tech: ['React', 'Vite', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Markcrest-dev/A-BIG',
    demo: 'https://a-big.vercel.app',
    caseStudy: `
# A-BIG: Real-Time Dynamic App

A-BIG is a dynamic web application built to handle high-frequency data changes and provide a seamless, real-time user experience.

## The Challenge
Handling user authentication, real-time data syncing, and complex application state simultaneously can quickly lead to spaghetti code if not architected properly.

## The Solution
- **Firebase Integration**: Leveraged Firebase Authentication for secure login flows and Firestore for a real-time, NoSQL database layer.
- **React Ecosystem**: Used Vite for blazing-fast development and React context to manage complex global state across the application.
- **Responsive UI**: Built a fluid, mobile-first interface using Tailwind CSS utility classes.

## The Outcome
A highly scalable, real-time application that provides users with instant data updates and a highly responsive interface.
    `,
  },
  {
    title: 'Streakly',
    slug: 'streakly',
    type: 'App',
    description: 'A habit-tracking application designed to help users build consistency and achieve their goals through daily streaks and analytics.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Markcrest-dev/Streakly',
    demo: '',
    caseStudy: `
# Streakly: Habit Tracking Gamified

Streakly is a productivity and habit-tracking application designed to help users build consistency through daily streaks and visual analytics.

## The Challenge
Habit trackers need to be frictionless. If logging a habit takes too many clicks, users will abandon the app.

## The Solution
- **Frictionless UI**: Designed a minimalist interface where habits can be logged with a single tap.
- **Visual Analytics**: Implemented calendar heatmaps and streak counters to visually reward users for their consistency.
- **Local Storage**: Utilized browser local storage for offline capabilities, ensuring users can log habits even without an internet connection.

## The Outcome
An intuitive, fast, and satisfying tool that successfully encourages users to maintain and build positive daily routines.
    `,
  },
  {
    title: 'Renewly',
    slug: 'renewly',
    type: 'App',
    description: 'A sustainable energy or subscription management platform focused on streamlined user experiences and clean aesthetics.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Markcrest-dev/Renewly',
    demo: '',
    caseStudy: `
# Renewly: Subscription Management

Renewly is a platform focused on simplifying the management of sustainable energy subscriptions, providing users with a clear overview of their usage and billing.

## The Challenge
Subscription data can be complex and confusing. The goal was to present billing cycles, energy usage, and account details in a clear, digestible format.

## The Solution
- **Dashboard Design**: Created a centralized dashboard utilizing clean, modern UI paradigms to highlight key metrics at a glance.
- **Component Reusability**: Built highly reusable React components (like progress bars and data cards) to ensure UI consistency across the application.
- **Theming**: Implemented a "green" aesthetic using Tailwind CSS to reflect the platform's sustainable mission.

## The Outcome
A user-friendly management platform that demystifies subscription data and empowers users to take control of their accounts.
    `,
  },
  {
    title: 'Aevo',
    slug: 'aevo',
    type: 'App',
    description: 'A modern, high-performance web application designed for seamless user interaction and optimal scalability.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Markcrest-dev/Aevo',
    demo: '',
    caseStudy: `
# Aevo: High-Performance Web App

Aevo is a modern web application built from the ground up to prioritize raw performance and seamless user interaction.

## The Challenge
As web applications grow in complexity, bundle sizes often bloat, leading to slow load times and sluggish interactions.

## The Solution
- **Optimized Build Tooling**: Used Vite for rapid Hot Module Replacement (HMR) and highly optimized production builds.
- **Code Splitting**: Implemented React lazy loading to split the JavaScript bundle, ensuring users only download the code they need for the current page.
- **Utility-First CSS**: Avoided heavy CSS frameworks by utilizing Tailwind CSS, resulting in a minimal CSS payload.

## The Outcome
A highly scalable, performant application that boasts near-instant load times and buttery-smooth interactions.
    `,
  },
  {
    title: 'Happy Birthday',
    slug: 'happy-birthday',
    type: 'Website',
    description: 'A personalized, interactive digital greeting card experience featuring festive animations and custom messages.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Markcrest-dev/Happy-Birthday',
    demo: '',
    caseStudy: `
# Happy Birthday: Interactive Greeting

This project is a personalized digital greeting card designed to provide a fun, interactive, and festive experience for the recipient.

## The Challenge
Creating a delightful experience requires more than just static text; it requires synchronized animations, sound, and interactivity without overcomplicating the codebase.

## The Solution
- **CSS Animations**: Built custom keyframe animations for floating balloons, confetti, and revealing text.
- **Vanilla JavaScript**: Used pure JavaScript to orchestrate the animation timings and handle user interactions.
- **Responsive Layout**: Ensured the experience feels native and joyful on both mobile devices and desktop monitors.

## The Outcome
A delightful, lightweight digital card that brings a smile to the user's face, demonstrating proficiency in core web technologies.
    `,
  },
  {
    title: 'Gift',
    slug: 'gift',
    type: 'App',
    description: 'A robust application designed to facilitate digital gifting and rewards with a secure, typing-safe architecture.',
    tech: ['TypeScript', 'React'],
    github: 'https://github.com/Markcrest-dev/Gift',
    demo: '',
    caseStudy: `
# Gift: Digital Gifting Platform

Gift is a robust application designed to facilitate secure digital gifting and rewards, built with a strong emphasis on type safety and reliability.

## The Challenge
Handling user balances, rewards, and transactions requires an extremely reliable codebase, as runtime errors can lead to bad user experiences or financial discrepancies.

## The Solution
- **Type Safety**: Utilized TypeScript across the entire application to catch potential bugs at compile time and enforce strict data contracts.
- **Component Architecture**: Built a modular React architecture, ensuring that the gifting flow (selection, checkout, confirmation) is state-driven and predictable.
- **Error Handling**: Implemented comprehensive error boundaries and fallback UIs to gracefully handle network failures or invalid data.

## The Outcome
A highly stable and reliable platform that handles digital transactions smoothly, providing peace of mind for both users and administrators.
    `,
  },
  {
    title: 'TasteTrail',
    slug: 'tastetrail',
    type: 'App',
    description: 'A food discovery and review platform helping users find, rate, and share their favorite culinary experiences.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Markcrest-dev/TasteTrail',
    demo: '',
    caseStudy: `
# TasteTrail: Culinary Discovery

TasteTrail is a full-stack platform designed for food enthusiasts to discover, review, and share their favorite local culinary experiences.

## The Challenge
Building a review platform requires a complex relational data structure (users, restaurants, reviews, ratings) and a robust search mechanism to help users find what they're looking for.

## The Solution
- **RESTful API**: Built a comprehensive Node.js and Express backend to handle data queries, user authentication, and review submissions.
- **Database Schema**: Designed an optimized MongoDB schema to efficiently relate user profiles with their submitted reviews and aggregate restaurant ratings.
- **Search & Filtering**: Implemented dynamic frontend filtering in React, allowing users to sort restaurants by cuisine, rating, and location seamlessly.

## The Outcome
A vibrant, community-driven platform that makes discovering new food experiences intuitive and socially engaging.
    `,
  },
];
