<script>
  import List from '../components/List.svelte';

  let bool = false;
  let skills = [
    { id: 1, text: 'HTML/HTML5' },
    { id: 2, text: 'CSS/CSS3' },
    { id: 3, text: 'Javascript' },
    { id: 4, text: 'SCSS/SASS' },
    { id: 5, text: 'Wordpress' },
    { id: 6, text: 'AEM(Frontend)' },
    { id: 7, text: 'GIT' },
    { id: 8, text: 'RWD' },
    { id: 9, text: 'jQuery' },
    { id: 10, text: 'Gulp' },
    { id: 11, text: 'Handlebars' },
    { id: 12, text: 'Svelte' }
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
            <div class="headline">
                <label for="" class="uppercase text-white text-xs">skills</label>
                <h2 class="text-white text-4xl pr-48">few things i am familiar and worked with</h2>
            </div>
        </div>
            <div>
                <List items={skills} listClass="masonry-list flex flex-row flex-wrap text-lightpurple text-xs uppercase"/>
            </div>
           
        </section>
        <section class="port-background py-56">
          <div class="headline pr-44">
              <label for="" class="uppercase text-xs text-orange">history</label>
              <p class="text-white text-2xl leading-relaxed">I graduated with a Bachelor's degree in Information Technology. I started my career as a PHP Developer, initially unaware of the distinct role that entails both coding and the utilization of design mockups. Within less than a year, I made the decision to specialize in Frontend roles and pursued additional training in user interface and user experience.</p>
          </div>
        </section>
        <section class="pb-48 flex port-past-companies">
            
            <div class="headline">
              <label for="" class="uppercase text-white text-xs">companies i have worked with</label>
              <h2 class="text-white text-4xl">crafted my expertise with these companies</h2>
            </div>
            <ul class="text-white">
                <li class="my-4"><label for="" class="text-lightpurple text-lg">HEDY PHILIPPINES INC.</label>
                    <p class="text-xs">AEM Frontend Developer; June 2020 - Present;</p>
                </li>
                <li class="my-4"><label for="" class="text-lightpurple text-lg">Dripcreative</label>
                    <p class="text-xs">Frontend Developer and Designer; May 2016 - April 2020;</p>
                </li>
                <li class="my-4">
                  <label for="" class="text-lightpurple text-lg">Symph</label>
                  <p class="text-xs">Frontend Developer and Designer; March 2014 - February 2016;</p>
                </li>
                <li class="my-4">
                  <label for="" class="text-lightpurple text-lg">ViCommer/GlobalFusion</label>
                  <p class="text-xs">PHP Developer and Frontend Developer; April 2013 - February 2014; </p>
                </li>
            </ul>
          
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
