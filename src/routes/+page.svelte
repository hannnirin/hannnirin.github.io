<script>
  import { bool } from '../stores/stores.js';

  import List from '../components/List.svelte';
  import Companies from '../components/Companies.svelte';
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
      duration: 'June 2020 - Present'
    },
    {
      name: 'Dripcreative',
      position: 'Frontend Developer and Designer',
      duration: 'May 2016 - April 2020'
    },
    {
      name: 'Symph',
      position: 'Frontend Developer and Designer',
      duration: 'March 2014 - February 2016'
    },
    {
      name: 'ViCommerce/GlobalFusion',
      position: 'PHP Developer and Frontend Developer',
      duration: 'April 2013 - February 2014'
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

console.log($bool);
</script>

<ThemePicker/>
<ContactSidebar socials={socials}/>

<!-- hero section-->
<header class="pt-96 pb-80">
    <div class="container flex flex-col px-28">
        <div class="headline justify-center">
            <label for="" class="delay-75 uppercase text-xs { $bool ? 'text-darkpurple' : 'text-white'}">Introduction</label>
            <h1 class="delay-75 font-primary font-semibold text-8xl pr-20 { $bool ? 'text-darkpurple' : 'text-white'}">Hello, my name is <span class="delay-75 { $bool ? 'text-purpleblue' : 'text-neongreen'}">Irene</span></h1>
        </div>
        <div class="content mt-6 justify-center">
            <p class="delay-75 text-2xl leading-relaxed { $bool ? 'text-darkpurple' : 'text-white'}">I work as an AEM Frontend Developer at HEDY Philippines Inc. I love creating smooth solutions using modern designs, turning ideas into engaging user interfaces with skill and creativity.</p>
        </div>
    </div>
    <!-- container-->
</header>
<main>
    <div class="container px-28">
        <section class="port-skills flex flex-row justify-center">
          <div class="flex items-center">
            <Headline headlineTag="skills" headlineTagClass="text-white uppercase" headlineTitle="few things i am familiar and worked with" headlineTitleClass=""/>
        </div>
            <div>
                <List items={skills} listClass="p-0 masonry-list list-none flex flex-row flex-wrap text-xs text-center uppercase items-center { $bool ? 'text-white' : 'text-lightpurple'}"/>
            </div>
        </section>
        <section class="port-background py-80 pr-44">

          <Headline headlineTag="history" headlineTagClass="text-neongreen" headlineTitle="" detail="I graduated with a Bachelor's degree in Information Technology. I started my career as a PHP Developer, initially unaware of the distinct role that entails both coding and the utilization of design mockups. Within less than a year, I made the decision to specialize in Frontend roles and pursued additional training in user interface and user experience." detailClass="text-2xl leading-relaxed"/>
          
        </section>
        <section class="pb-80 flex port-past-companies">
            <Headline headlineTag="companies i have worked with" headlineTagClass="text-white uppercase" headlineTitle="crafted my expertise with these companies" headlineTitleClass="xl:pr-48"/>
            
           <Companies companiesClass="text-white" companies={companies}/>
          
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
