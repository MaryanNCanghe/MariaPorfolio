import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    
    shirt,
    iicaros,
    car,
    traveller,
    lart,
    barber,
    keyline,
    macrolab,
    jefynho,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Bussines Administration",
      icon: mobile,
    },
    {
      title: "3D Integration",
      icon: backend,
    },
    {
      title: "Graphic Designs",
      icon: creator,  
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    { name: "Three JS",
        icon: threejs,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "figma",
        icon: figma,
      },
      {
        name: "docker",
        icon: docker,
      },
    ];

    const experiences = [
        {
          title: "Web Devolper",
          company_name: "",
          //icon: ,
          iconBg: "#df256c",
          date: "Since - 2022",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
    
          ],
        },
        {
          title: "Administrative Assistent",
          company_name: "",
          //icon: ,
          iconBg: "#000",
          date: "",
          points: [
            "Managed multiple projects simultaneously, ensuring on-time delivery and satisfaction.",
            "Assisted in organizing company events, meetings, and schedules.",
            "Maintained and updated company records, both electronically and physically.",
           
          ],
        },
        {
          title: "Graphic Design",
          company_name: "",
         // icon: ,
          iconBg: "#df256c",
          date: "",
          points: [
            "Designing visually appealing yet user-friendly interfaces.",
            "Ensuring clear communication through effective font choices and layout.",
            "Crafting color palettes that align with brand identity and resonate with target audiences.",
          ],
        },

        {
            title: "Product Design",
            company_name: "",
            //icon: ,
            iconBg: "#000",
            date: "",
            points: [
              "User Experience (UX) & User Interface (UI).",
              "Creating design solutions, wireframes, and mockups that solve user problems.",
              "Building prototypes to test the products functionality and usability.",
             
            ],
          },
        ];
        
        const testimonials = [
          {
            testimonial:
              "Maria's ability to combine web development with creative designs is truly unique. She delivered a complex project with ease, showcasing a deep understanding of both design and technology. I'm were extremely satisfied with my website.",
            name: "Jefynho",
            designation: "Artist",
            company: "MC Jefynho RV",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
          },
          {
            testimonial:
              "During Maria time with us, she demonstrated excellent organizational skills and attention to detail. Handling a wide range of administrative duties and always maintained a positive attitude, even under pressure.",
            name: "Eurizanda",
            designation: "CEO",
            company: "Bonna NDja",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            testimonial:
              "Working with Maria was always a pleasure. She were reliable, hardworking, and always willing to help out wherever needed. Her positive attitude and commitment to customer satisfaction made her a standout member of our team!",
            name: "Pereira",
            designation: "Collegue",
            company: "Humana",
            image: "https://randomuser.me/api/portraits/women/6.jpg",
          },
         
        ];

        const projects = [
            {
              name: "Jefynho RV",
              description:
                "A modern singer website built with react and CSS3, featuring a dynamic layout integration to provide better navigation and seamless user interaction.",
              tags: [
                {
                  name: "NextJS",
                  color: "blue-text-gradient",
                },
                {
                  name: "API",
                  color: "green-text-gradient",
                },
                {
                  name: "CSS3",
                  color: "pink-text-gradient",
                },
              ],
              image: jefynho,
              source_code_link: "https://mcjeferson.vercel.app/",
            },
            {
              name: "Macro-lab",
              description:
              " A web application designed for laboratory management, offering a clean UI and smooth interactions powered by Next.js, TypeScript, and CSS3.",
              tags: [
                {
                  name: "NextJSt",
                  color: "blue-text-gradient",
                },
                {
                  name: "CSS3",
                  color: "green-text-gradient",
                },
                {
                  name: "TypeScript",
                  color: "pink-text-gradient",
                },
            ],
            image: macrolab,
            source_code_link: "https://maryanncanghe.github.io/MacroLab/",
          },
          {
            name: "L'Art ",
            description:
              "A visually engaging restaurant website developed with React and JavaScript, showcasing elegant CSS3 styling for a refined user experience.",
            tags: [
              {
                name: "React",
                color: "blue-text-gradient",
              },
              {
                name: "JavaScript",
                color: "green-text-gradient",
              },
              {
                name: "css3",
                color: "pink-text-gradient",
              },
            ],
            image: lart,
            source_code_link: "https://l-art.vercel.app/",
          },
          {
            name: "Dannis-Barber",
            description:
              "A clean and professional website for a barber shop, built using HTML, JavaScript, and CSS3 to deliver a simple yet effective design.",
            tags: [
              {
                name: "HTML",
                color: "blue-text-gradient",
              },
              {
                name: "JavaScript",
                color: "green-text-gradient",
              },
              {
                name: "css",
                color: "pink-text-gradient",
              },
            ],
            image:barber,
            source_code_link: "https://maryanncanghe.github.io/Danis-Barber-Smoke/",
          },
          {
            name: "3D-TShirt",
            description:
              "An interactive 3D T-shirt customization tool, leveraging Next.js, Tailwind CSS, and APIs to offer a unique and engaging user experience. Download or clone the repository to see the project",
            tags: [
              {
                name: "nextjs",
                color: "blue-text-gradient",
              },
              {
                name: "API",
                color: "green-text-gradient",
              },
              {
                name: "Express",
                color: "pink-text-gradient",
              },
            ],
            image:shirt,
            source_code_link: "https://github.com/MaryanNCanghe/3D-Shirt",
          },
          {
            name: "Keyline",
            description:
             "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
            tags: [
              {
                name: "JavaScript",
                color: "blue-text-gradient",
              },
              {
                name: "HTML",
                color: "green-text-gradient",
              },
              {
                name: "CSS",
                color: "pink-text-gradient",
              },
            ],
            image: keyline,
            source_code_link: "https://maryanncanghe.github.io/keylineupdate/",
          },
          {
            name: "UX/UI",
            description:
              "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
            tags: [
              {
                name: "TypeScript",
                color: "blue-text-gradient",
              },
              {
                name: "Tailwind",
                color: "green-text-gradient",
              },
              {
                name: "Next.Js",
                color: "pink-text-gradient",
              },
            ],
            image: traveller,
            source_code_link: "https://traveller-azure.vercel.app/",
          },
          {
            name: "CarRent",
            description:
              "A car rental service platform built with TypeScript and Next.js, featuring API integration to provide real-time availability and booking options.",
            tags: [
              {
                name: "TypeScript",
                color: "blue-text-gradient",
              },
              {
                name: "API",
                color: "green-text-gradient",
              },
              {
                name: "Next.Js",
                color: "pink-text-gradient",
              },
            ],
            image: car,
            source_code_link: "https://carrent-omega.vercel.app/",
          },
          {
            name: "IICAROS",
            description:
              "A web company app for showcasing futuristic tools to deliver a seamless user experience.",
            tags: [
              {
                name: "CSS3",
                color: "blue-text-gradient",
              },
              {
                name: "JavaScript",
                color: "green-text-gradient",
              },
              {
                name: "HTML",
                color: "pink-text-gradient",
              },
            ],
            image: iicaros,
            source_code_link: "https://maryanncanghe.github.io/ICAROS/",
          },
          
          
        ];
        
        export { services, technologies, experiences, testimonials, projects };
        
