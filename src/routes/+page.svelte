 <!-- social media -->
 <ul class="port-socialmedia flex">
  <li><a href="" target="_blank" class="txt-uppercase">Linkedin</a></li>
  <li><a href="" target="_blank" class="txt-uppercase">Dribbble</a></li>
  <li><span class="break"></span></li>
  <li><a href="mailto:rainhontanosas@gmail.com" class="txt-uppercase">rainhontanosas@gmail.com</a></li>
</ul>

<!-- hero section-->
<header>
    <div class="container">
        <div class="headline">
            <label for="" class="txt-uppercase text-white">Introduction</label>
            <h1 class="font-primary font-semibold text-white">Hello, my name is <span class="text-lightpurple">Irene</span></h1>
        </div>
        <div class="content">
            <p class="text-white">I am an AEM Frontend Developer at HEDY Philippines Inc. With a passion for crafting seamless solutions through cutting-edge designs, I transform concepts into captivating interactive user interfaces with expertise and creativity.</p>
        </div>
    </div>
    <!-- container-->
</header>
<main>
    <div class="container">
        <section class="port-skills flex dp-flex-row">

            <div>
                <ul class="masonry-list text-lightpurple">
                    <li class="item">HTML/HTML5</li>
                    <li class="item">CSS/CSS3</li>
                    <li class="item">Javascript</li>
                    <li class="item">SCSS/SASS</li>
                    <li class="item">Wordpress</li>
                    <li class="item">AEM (Frontend)</li>
                    <li class="item">GIT</li>
                    <li class="item">RWD</li>
                    <li class="item">jQuery</li>
                    <li class="item">Gulp</li>
                    <li class="item">Handlebars</li>
                    <li class="item">Svelte</li>
                </ul>
            </div>
            <div>
                <div class="headline">
                    <label for="" class="txt-uppercase text-white">skills</label>
                    <h2 class="text-white">few things i am familiar and worked with</h2>
                </div>
            </div>
        </section>
        <section class="port-history">
            <div class="headline">
                <label for="" class="txt-uppercase">history</label>
                <p class="text-white">I graduated with a Bachelor's degree in Information Technology. I started my career as a PHP Developer, initially unaware of the distinct role that entails both coding and the utilization of design mockups. Within less than a year, I made the decision to specialize in Frontend roles and pursued additional training in user interface and user experience.</p>
            </div>
        </section>
        <!-- history -->
        <section class="port-past-work flex flex-col justify-end">
            <div class="headline text-white">
                <label for="" class="txt-uppercase">companies i have worked with</label>
            </div>
            <ul class="text-white">
                <li><label for="">HEDY PHILIPPINES INC.</label>
                    <p>AEM Frontend Developer; June 2020 - Present;</p>
                </li>
                <li><label for="">Dripcreative</label>
                    <p>Frontend Developer and Designer; May 2016 - April 2020;</p>
                </li>
                <li>
                  <label for="">Symph</label>
                  <p>Frontend Developer and Designer; March 2014 - February 2016;</p>
                </li>
                <li>
                  <label for="">ViCommer/GlobalFusion</label>
                  <p>PHP Developer and Frontend Developer; April 2013 - February 2014; </p>
                </li>
            </ul>
        </section>
        <!-- past work experience -->
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

<style lang="postcss">
:root {
  --primary-color: #fff;
  --secondary-color: #B08AF8;
  --tertiary-color: #ECC080;
}

h1 {
  font-size: 64px;
}

h2 {
  font-size: 42px;
}

label {
  font-size: 14px;
}

/* text format */
.txt-uppercase {
  text-transform: uppercase;
}

/* wrappers */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.dp-flex-row {
  flex-direction: row;
}

/* header */
header {
  padding: 18% 0;
}

header h1 {
  margin: 0;
}

header p {
  font-size: 28px;
  line-height: 48px;
}

header span {
  color: var(--secondary-color);
}

header .content,
header .headline {
  width: 70%;
  margin: 0 auto;
  box-sizing: border-box;
}

header .headline {
  padding-left: 10%;
}

/* social media */
.port-socialmedia {
  position: fixed;
  right: -8%;
  top: 55%;
  rotate: z 90deg;
  display: flex;
  gap: 15px;
}

.port-socialmedia li {
  list-style-type: none;
}

.port-socialmedia a {
  color: #fff;
  font-size: 12px;
  text-decoration: none;
}

/* skills */
.port-skills {
  align-items: center;
}
.port-skills > div {
  width: 50%;
}
.port-skills ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; /* Adjust the gap between items as needed */
  list-style: none;
  padding: 0;
}

.port-skills li {
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  list-style-type: none;
  padding: 15px 15px;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  width: fit-content;
  height: fit-content;
}

.port-skills .headline {
  padding-left: 28%;
  box-sizing: border-box;
  text-align: right;
}


.port-skills .headline h2 {
  margin: 10px 0 0;
  text-align: justify;
}

/* history */
.port-history {
  padding: 18% 0;
}

.port-history .headline {
  width: 70%;
}

.port-history .headline label {
  color: var(--tertiary-color);
}

.port-history .headline p {
  font-size: 24px;
  line-height: 42px;
}

/* past work experience */

.port-past-work li { 
  list-style-type: none;
  margin-bottom: 15px;
}

.port-past-work li label {
  color: var(--secondary-color);
  font-weight: 500;
  font-size: 18px;
}

</style>