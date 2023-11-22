<script>
  import List from '../components/List.svelte';
  import Companies from '../components/Companies.svelte';
  import Headline from '../components/Headline.svelte';

  let bool = false;
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
    { id: 12, text: 'Svelte' }
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

  function switchTheme(e){
    bool = e.target.checked;
    console.log('Checkbox state changed:', bool);
  }

</script>

<!-- social media -->
 <ul class="port-socialmedia fixed flex text-white">
  <li><a href="https://www.linkedin.com/in/irenehontanosas/" target="_blank" class="uppercase">Linkedin</a></li>
  <li><a href="https://dribbble.com/hannnirin" target="_blank" class="uppercase">Dribbble</a></li>
  <li class="flex items-center "><span class="break bg-lightpurple"></span></li>
  <li><a href="mailto:rainhontanosas@gmail.com" class="uppercase">rainhontanosas@gmail.com</a></li>
</ul>

<!-- switch theme -->
<!--label for="" class="switch-theme">
  <input type="checkbox" name="" id="" value="light" on:change={switchTheme} bind:checked={bool} class="w-full h-full opacity-0">
  <span class="switch-theme--toggle"></span>
</label-->

<!-- hero section-->
<header class="pt-96 pb-40">
    <div class="container flex flex-col px-28">
        <div class="headline justify-center">
            <label for="" class="uppercase text-white text-xs">Introduction</label>
            <h1 class="font-primary font-semibold text-white text-6xl pr-32">Hello, my name is <span class="text-neongreen">Irene</span></h1>
        </div>
        <div class="content mt-6 justify-center">
            <p class="text-white text-4xl leading-relaxed">I work as an AEM Frontend Developer at HEDY Philippines Inc. I love creating smooth solutions using modern designs, turning ideas into engaging user interfaces with skill and creativity.</p>
        </div>
    </div>
    <!-- container-->
</header>
<main>
    <div class="container px-28">
        <section class="port-skills flex flex-row justify-center">
          <div>
            <Headline class="" headlineTag="skills" headlineTagClass="text-white" headlineTitle="few things i am familiar and worked with"/>
        </div>
            <div>
                <List items={skills} listClass="masonry-list flex flex-row flex-wrap text-lightpurple text-xs uppercase"/>
            </div>
           
        </section>
        <section class="port-background py-56 pr-44">
          <Headline class="" headlineTag="history" headlineTagClass="text-orange" headlineTitle="" detail="I graduated with a Bachelor's degree in Information Technology. I started my career as a PHP Developer, initially unaware of the distinct role that entails both coding and the utilization of design mockups. Within less than a year, I made the decision to specialize in Frontend roles and pursued additional training in user interface and user experience." detailClass="text-white text-2xl leading-relaxed"/>
          
          <!-- <div class="headline pr-44">
              <label for="" class="uppercase text-xs text-orange">history</label>
              <p class="text-white text-2xl leading-relaxed">I graduated with a Bachelor's degree in Information Technology. I started my career as a PHP Developer, initially unaware of the distinct role that entails both coding and the utilization of design mockups. Within less than a year, I made the decision to specialize in Frontend roles and pursued additional training in user interface and user experience.</p>
          </div> -->
        </section>
        <section class="pb-48 flex port-past-companies">
            <Headline class="" headlineTag="companies i have worked with" headlineTagClass="text-white" headlineTitle="crafted my expertise with these companies"/>
            
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
