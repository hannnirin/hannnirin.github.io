<script>
  import { bool } from '../stores/stores.js';
  import List from '../components/List.svelte';
  import Headline from '../components/Headline.svelte';
	import ContactSidebar from '../components/ContactSidebar.svelte';
	import ThemePicker from '../components/ThemePicker.svelte';
  

  let skills = [
      {
          category: 'Web Development',
          skills: ['HTML/HTML5', 'CSS/CSS3', 'JavaScript', 'RWD'],
      },
      {
          category: 'CSS Preprocessor and Frameworks',
          skills: ['SCSS/SASS', 'TailwindCSS', 'Bootstrap'],
      },
      {
          category: 'CMS and Frontend',
          skills: ['WordPress', 'AEM (Frontend)'],
      },
      {
          category: 'Version Control and Task Runner',
          skills: ['Git', 'Gulp'],
      },
      {
          category: 'JavaScript Libraries and Frameworks',
          skills: ['jQuery', 'Handlebars', 'Svelte'],
      },
      {
          category: 'Design',
          skills: ['UI/UX', 'Web Design', 'Typography'],
      },
      {
          category: 'Design Tools',
          skills: ['Adobe XD', 'Figma', 'Adobe Photoshop'],
      },
      {
          category: 'Video Editing',
          skills: ['Adobe Premiere Pro', 'Final Cut Pro (X)'],
      },
  ];


  let companies = [
    { 
      name: 'HEDY Philippines Inc.', 
      position: 'AEM Frontend Developer',
      duration: 'June 2020 - Present',
      role: 'I work closely with the offshore team in collaboration of developing and slicing the required components for an ecommerce website. I also worked SEO and Web Accessibility.'
    },
    {
      name: 'Dripcreative',
      position: 'Frontend Developer and Designer',
      duration: 'May 2016 - April 2020',
      role: 'I work closely with one of the cofounders of the company. Designing and creating mockups for Wordpress Websites: ecommerce, landing page, portfolio, and blog website.'
    },
    {
      name: 'Symph',
      position: 'Frontend Developer and Designer',
      duration: 'March 2014 - February 2016',
      role: 'I am a former lead frontend developer for their startup product that’s similar with Squarespace. I am responsible for developing components to be reused and drag n’ drop for users to create websites effortlessly. I also worked few client projects using with the following tech stack: phonegap, jquery, javascript, scss, wordpress.'
    },
    {
      name: 'ViCommerce/GlobalFusion',
      position: 'PHP Developer and Frontend Developer',
      duration: 'April 2013 - February 2014',
      role: 'I worked on few internal projects and a frontend developer for a Phonegap real estate app.'
    }
  ];

  let socials = [
    {
      type: 'social',
      website: 'Linkedin',
      url: 'https://www.linkedin.com/in/irenehontanosas/'
    },
    {
      type: 'social',
      website: 'Dribbble',
      url: 'https://dribbble.com/hannnirin'
    },
    {
      type: 'break',
      website: '',
      url: ''
    },
    {
      type: 'social',
      website: 'rainhontanosas@gmail.com',
      url: 'mailto:rainhontanosas@gmail.com'
    }
  ];

</script>

<ThemePicker/>


<!-- hero section-->
<header class="sm:pt-56 xl:pt-96 xs:pt-40 pb-80">
    <div class="container flex flex-col xl:px-28 xs:px-4 lg:px-10">
        <div class="headline justify-center animate__animated animate__fadeInUp xs:text-center md:text-left">
            <label for="" class="delay-75 uppercase text-xs { $bool ? 'text-darkpurple' : 'text-white'}">Introduction</label>
            <h1 class="delay-75 font-primary font-semibold xl:text-8xl xs:text-5xl sm:text-7xl xl:pr-20 lg:pr-52 { $bool ? 'text-darkpurple' : 'text-white'}">Hello, my name is <span class="delay-75 { $bool ? 'text-purpleblue' : 'text-neongreen'}">Irene</span></h1>
        </div>
        <div class="content mt-6 justify-center animate__animated animate__fadeInUp xs:text-center md:text-left">
            <p class="delay-75 xs:text-xl sm:text-2xl md:text-3xl lg:text-2xl leading-relaxed { $bool ? 'text-darkpurple' : 'text-white'}">I work as an <span class="relative">AEM Frontend Developer</span> at HEDY Philippines Inc. I love creating smooth solutions using modern designs, turning ideas into engaging user interfaces with skill and creativity.</p>
        </div>
    </div>
</header>
<main class="">
  <ContactSidebar socials={socials}/>
    <div class="container xl:px-28 xs:px-4 md:px-3 lg:px-10 xl:order-2 xs:order-1">
        <section class="port-skills flex xs:flex-col md:flex-row">
          <div class="flex items-center">
            <Headline headlineTag="skills" headlineTagClass="text-white uppercase" headlineTitle="few things i am familiar and worked with" headlineTitleClass="sm:pr-12 xl:pr-6"/>
          </div>
          <div class="">
              <List items={skills} contentType="skills" listClass="sm:pr-14 xs:pt-12 lg:pt-10 p-0 masonry-list list-none flex flex-row flex-wrap text-xs text-center uppercase items-center { $bool ? 'text-white' : 'text-lightpurple'}"/>
          </div>
        </section>
        <section class="port-background xs:py-40 lg:py-80 sm:pr-28 lg:pr-44 animate__animated animate__fadeInUp">

          <Headline headlineTag="history" headlineTagClass="text-neongreen" headlineTitle="" detail="I graduated with a Bachelor's degree in Information Technology. I started my career as a PHP Developer, initially unaware of the distinct role that entails both coding and the utilization of design mockups. Within less than a year, I made the decision to specialize in Frontend roles and pursued additional training in user interface and user experience." detailClass="text-2xl leading-relaxed"/>
          
        </section>
        <section class="xl:pb-80 xs:pb-36 flex lg:flex-row xs:flex-col port-past-companies">
            <Headline headlineTag="companies i have worked with" headlineTagClass="text-white uppercase animate__animated animate__fadeInRight" headlineTitle="crafted my expertise with these companies" headlineTitleClass="xl:pr-48"/>
          
            <List listClass="text-white animate_animated animate_fadeInLeft xl:pt-0 md:pt-6 xs:pt-10" items={companies} contentType="companies"/>
          
        </section> 
        <!-- history -->
       
        <!--section class="port-projects">
            <div class="headline"><label for="" class="txt-uppercase">mini projects</label></div>
        </section-->
        <!-- projects-->
        <!--section class="port-blog">
            <div class="headline"><label for="" class="txt-uppercase">my tech train of thoughts</label></div>
        </section-->
    </div>
    <!-- container-->
</main>

<style>
  /* header */
  header .content,
  header .headline {
    width: 70%;
  }

  header p {
    line-height: 3rem;
  }
  /* headline */
  .headline span {
    transition: 0.2s text-shadow ease-in-out;
  }
  .headline h1:hover span{
    text-shadow: 0 0 10px #efff67;
  }

  header .content:hover span {
    color: var(--darkpurple);
    transition: 0.3s all ease-in-out;
  }

  header .content:hover span::after{
    animation-name: highlight;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  header .content span::after {
    content: '';
    bottom: 0;
    background-color: #efff67;
    left: 0;
    height: 25px;
    position: absolute;
    z-index: -10;
  }
  

  /* @media screen and (min-width: 320px) {
    .port-skills div:first-child { width: 100%;}
    .port-skills div:last-child { width: 100%;}
  }

  @media screen and (min-width: 1024px) {
    .port-skills div:last-child { width: 80%}
  }

  @media screen and (min-width: 1200px) {
    .port-skills div:first-child { width: 30%;}
    .port-skills div:last-child { width: 70%;}
  } */
</style>