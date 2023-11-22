<script>
  import { bool } from '../stores/stores.js';

  import List from '../components/List.svelte';
  import Companies from '../components/Companies.svelte';
  import Headline from '../components/Headline.svelte';
	import ContactSidebar from '../components/ContactSidebar.svelte';
	import ThemePicker from '../components/ThemePicker.svelte';

  
  let skills = [
    { text: 'HTML/HTML5' },
    { text: 'CSS/CSS3' },
    { text: 'Javascript' },
    { text: 'SCSS/SASS' },
    { text: 'Wordpress' },
    { text: 'AEM(Frontend)' },
    { text: 'GIT' },
    { text: 'RWD' },
    { text: 'jQuery' },
    { text: 'Gulp' },
    { text: 'Handlebars' },
    { text: 'Svelte' }
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

</script>



<ThemePicker/>
<ContactSidebar socials={socials}/>

<!-- hero section-->
<header class="pt-96 pb-40">
    <div class="container flex flex-col px-28">
        <div class="headline justify-center">
            <label for="" class="uppercase text-xs { $bool ? 'text-darkpurple' : 'text-white'}">Introduction</label>
            <h1 class="delay-75 font-primary font-semibold text-6xl pr-32 { $bool ? 'text-darkpurple' : 'text-white'}">Hello, my name is <span class="text-neongreen">Irene</span></h1>
        </div>
        <div class="content mt-6 justify-center">
            <p class="delay-75 text-4xl leading-relaxed { $bool ? 'text-darkpurple' : 'text-white'}">I work as an AEM Frontend Developer at HEDY Philippines Inc. I love creating smooth solutions using modern designs, turning ideas into engaging user interfaces with skill and creativity.</p>
        </div>
    </div>
    <!-- container-->
</header>
<main>
    <div class="container px-28">
        <section class="port-skills flex flex-row justify-center">
          <div>
            <Headline headlineTag="skills" headlineTagClass="text-white uppercase" headlineTitle="few things i am familiar and worked with" headlineTitleClass="2xl:pr-48"/>
        </div>
            <div>
                <List items={skills} listClass="masonry-list flex flex-row flex-wrap text-lightpurple text-xs uppercase"/>
            </div>
        </section>
        <section class="port-background py-56 pr-44">

          <Headline headlineTag="history" headlineTagClass="text-orange" headlineTitle="" detail="I graduated with a Bachelor's degree in Information Technology. I started my career as a PHP Developer, initially unaware of the distinct role that entails both coding and the utilization of design mockups. Within less than a year, I made the decision to specialize in Frontend roles and pursued additional training in user interface and user experience." detailClass="text-2xl leading-relaxed"/>
          
        </section>
        <section class="pb-48 flex port-past-companies">
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
