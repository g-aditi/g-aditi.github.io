// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research projects and experiments",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-sima-scalable-instructable-multi-world-agent-by-google-deepmind",
        
          title: 'SIMA: Scalable Instructable Multi-world Agent by Google DeepMind <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@bytemetransformers/sima-scalable-instructable-multi-world-agent-by-google-deepmind-b4094ee90ebe?source=rss-4c07bc696f5b------2", "_blank");
          
        },
      },{id: "post-mistral-mixtral-8x7b",
        
          title: 'MISTRAL Mixtral-8x7B <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@bytemetransformers/mistral-mixtral-8x7b-c24804273290?source=rss-4c07bc696f5b------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-the-happy-lab-with-nihaarika-and-joy-seedling",
          title: 'Joined The HAPPY Lab with Nihaarika and Joy :seedling:',
          description: "",
          section: "News",},{id: "news-graduated-from-asu-with-my-master-s-degree-woman-student",
          title: 'Graduated from ASU with my Master’s degree :woman_student:',
          description: "",
          section: "News",},{id: "news-began-my-phd-at-asu-microscope",
          title: 'Began my PhD at ASU :microscope:',
          description: "",
          section: "News",},{id: "projects-it-39-s-swarming-tokens",
          title: 'It&amp;#39;s Swarming Tokens',
          description: "Hybrid GA + PSO for mining glitch tokens in LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-can-llms-plan",
          title: 'Can LLMs Plan?',
          description: "Evaluating LLMs&#39; ability to translate natural language to PDDL using semantic validation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-description-logics-for-t2i-evaluation",
          title: 'Description Logics for T2I Evaluation',
          description: "Using formal logic to systematically benchmark Stable Diffusion&#39;s compositional understanding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Aditi%20Ganapathi_PhD%20CS_ML%20Security.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%67%61%6E%61%70%31%32@%61%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/g-aditi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aditi-ganapathi# your LinkedIn user name", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
