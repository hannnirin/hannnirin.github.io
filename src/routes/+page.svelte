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
			skills: ['jQuery', 'Handlebars', 'Svelte', 'React', 'Next.js']
		},
		{
			category: 'Backend',
			skills: ['Express.js', 'EJS', 'MySQL']
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

	const allProjects = [
		{
			title: 'Hercules',
			category: 'Full-Stack Project',
			stack: ['React', 'Express.js', 'MySQL', 'Tailwind CSS'],
			description:
				'A full-stack fitness facility management platform built during my Diploma of IT at TAFE. Member sign-ups, class schedules, trainer rosters, and bookings, all run from one role-based dashboard.',
			link: '#',
			github: 'https://github.com/hannnirin/gym_mgt',
			caseStudy: '/blog/hercules'
		},
		{
			title: 'Portfolio Site',
			category: 'Personal Project',
			stack: ['SvelteKit', 'SCSS', 'GitHub Pages'],
			description:
				'A minimal, accessible personal portfolio built with SvelteKit. Features a custom cursor, smooth scroll animations, and a fully responsive layout — deployed automatically to GitHub Pages.',
			link: 'https://hannnirin.github.io/',
			github: 'https://github.com/hannnirin/hannnirin.github.io'
		},
		{
			title: 'Express + EJS + Tailwind Starter',
			category: 'Starter Kit',
			stack: ['Express.js', 'EJS', 'Tailwind CSS'],
			description:
				'An MVC folder setup for building server-rendered apps with Express 5, EJS templating, and Tailwind CSS 4. Comes wired with PostCSS, Nodemon, and a concurrent dev script',
			link: '#',
			github: 'https://github.com/hannnirin/xps-ejs-tailwind'
		},
		{
			title: 'WooCommerce Theme',
			category: 'Full-Stack Project',
			stack: ['WordPress', 'PHP', 'SCSS'],
			description:
				'A custom WordPress + WooCommerce storefront theme with a hand-built product showcase, custom checkout styling, and reusable Handlebars-style partials for landing pages.',
			link: '#',
			github: '#',
			wip: true
		},
		{
			title: 'Component Library',
			category: 'Component Library',
			stack: ['React', 'Next.js', 'Tailwind CSS'],
			description:
				'A small library of accessible, drag-and-drop UI components — buttons, cards, modals, and carousels — designed in Figma and built to WCAG standards.',
			link: '#',
			github: 'https://github.com/hannnirin',
			wip: true
		}
	];

	const projects = allProjects.filter((project) => !project.wip);

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
		},
		{
			title: 'Custom paging from SlickJS',
			url: 'https://codewithannnirin.wordpress.com/2018/08/19/utilizing-custom-paging-from-slickjs/',
			date: '2018'
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
		}
	];
</script>

<svelte:head>
	<title>Irene Hontanosas · Frontend Developer</title>
	<meta
		name="description"
		content="Portfolio of Irene Hontanosas, a frontend developer based in the Philippines: side projects, work history, and case studies."
	/>
	<link rel="canonical" href="https://hannnirin.vercel.app/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://hannnirin.vercel.app/" />
	<meta property="og:title" content="Irene Hontanosas · Frontend Developer" />
	<meta
		property="og:description"
		content="Portfolio of Irene Hontanosas, a frontend developer based in the Philippines: side projects, work history, and case studies."
	/>

	<meta property="twitter:url" content="https://hannnirin.vercel.app/" />
	<meta property="twitter:title" content="Irene Hontanosas · Frontend Developer" />
	<meta
		property="twitter:description"
		content="Portfolio of Irene Hontanosas, a frontend developer based in the Philippines: side projects, work history, and case studies."
	/>
</svelte:head>

<Nav />
<Hero />
<About />
<Skills {skills} />
<Experience {companies} />
<Projects {projects} />
<Blog {posts} />
<Footer {socials} />
