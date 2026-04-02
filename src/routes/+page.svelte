<script>
	import Nav from '../components/Nav.svelte';
	import Hero from '../components/Hero.svelte';
	import About from '../components/About.svelte';
	import Skills from '../components/Skills.svelte';
	import Experience from '../components/Experience.svelte';
	import Projects from '../components/Projects.svelte';
	import Blog from '../components/Blog.svelte';
	import Footer from '../components/Footer.svelte';

	const skills = [
		{
			category: 'Frontend',
			skills: ['HTML / HTML5', 'CSS / CSS3', 'JavaScript', 'Responsive Design', 'WCAG']
		},
		{
			category: 'CSS & Frameworks',
			skills: ['SCSS / SASS', 'Tailwind CSS', 'Bootstrap']
		},
		{
			category: 'CMS',
			skills: ['WordPress', 'AEM (Frontend)']
		},
		{
			category: 'Workflow',
			skills: ['Git', 'Gulp']
		},
		{
			category: 'JavaScript',
			skills: ['jQuery', 'Handlebars', 'Svelte']
		},
		{
			category: 'Design',
			skills: ['UI / UX', 'Web Design', 'Typography']
		},
		{
			category: 'Design Tools',
			skills: ['Figma', 'Adobe XD', 'Photoshop']
		},
		{
			category: 'Video',
			skills: ['Adobe Premiere Pro', 'Final Cut Pro']
		}
	];

	const companies = [
		{
			name: 'HEDY Philippines Inc.',
			position: 'AEM Frontend Developer',
			duration: 'June 2020 — January 2024',
			role: 'Collaborated closely with an offshore team to develop and slice components for a large-scale ecommerce website built on Adobe Experience Manager. Worked on SEO improvements and web accessibility standards.'
		},
		{
			name: 'Dripcreative',
			position: 'Frontend Developer & Designer',
			duration: 'May 2016 — April 2020',
			role: 'Designed and built WordPress websites — ecommerce, landing pages, portfolios, and blogs — working directly with a company co-founder. Handled full design-to-development cycles.'
		},
		{
			name: 'Symph',
			position: 'Frontend Developer & Designer',
			duration: 'March 2014 — February 2016',
			role: 'Led frontend development for an internal website-builder product similar to Squarespace. Built reusable drag-and-drop components and shipped client projects using jQuery, SCSS, PhoneGap, and WordPress.'
		},
		{
			name: 'ViCommerce / GlobalFusion',
			position: 'PHP & Frontend Developer',
			duration: 'April 2013 — February 2014',
			role: 'Contributed to internal projects and developed the frontend for a PhoneGap-based real estate application.'
		}
	];

	// TODO: Replace placeholder projects with your actual work
	const projects = [
		{
			title: 'Project Title',
			description:
				'A brief description of what this project does and the problem it solves. Replace this with your actual project details.',
			stack: ['Svelte', 'Tailwind CSS', 'JavaScript'],
			link: '#', // TODO: add live URL
			github: '#' // TODO: add GitHub URL
		},
		{
			title: 'Another Project',
			description:
				'Description of the project, its goals, and any notable technical decisions. Replace this with your actual project details.',
			stack: ['WordPress', 'PHP', 'SCSS'],
			link: '#',
			github: '#'
		}
	];

	// TODO: Replace placeholder posts with your actual blog links
	const posts = [
		{
			title: 'How to display WooCommerce featured products without shortcode',
			url: 'https://codewithannnirin.wordpress.com/2017/04/25/how-to-display-woocommerce-featured-products-without-shortcode/',
			date: '2017'
		},
		{
			title: 'Setting up Express MVC + EJS + TailwindCSS 4.0',
			url: 'https://medium.com/@hannnirin/setting-up-express-mvc-ejs-tailwindcss-4-0-2ccac72dad59',
			date: '2024'
		}
	];

	const socials = [
		{
			type: 'social',
			website: 'LinkedIn',
			url: 'https://www.linkedin.com/in/irenehontanosas/'
		},
		{
			type: 'social',
			website: 'Dribbble',
			url: 'https://dribbble.com/hannnirin'
		},
		{
			type: 'social',
			website: 'Behance',
			url: 'https://www.behance.net/rainhontanosas'
		},
		{
			type: 'social',
			website: 'rainhontanosas@gmail.com',
			url: 'mailto:rainhontanosas@gmail.com'
		}
	];
</script>

<Nav />
<Hero />
<About />
<Skills {skills} />
<Experience {companies} />
<Projects {projects} />
<Blog {posts} />
<Footer {socials} />
