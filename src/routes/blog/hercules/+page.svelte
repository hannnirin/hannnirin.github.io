<script>
	const diagram = `visitors, members, trainers ──▶  Mobile-first web app  ──┐
(public, phone first)                                    │
                                                         ├──▶  one shared database
admins, trainers, members ──▶  Full web application  ────┘
(desktop, full feature set)`;
</script>

<svelte:head>
	<title>Hercules: Gym Management System · Irene Hontanosas</title>
	<meta
		name="description"
		content="A gym management system built as two connected interfaces over one database: a full web application, and a public mobile-first app for members and trainers."
	/>
	<link rel="canonical" href="https://hannnirin.vercel.app/blog/hercules" />

	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://hannnirin.vercel.app/blog/hercules" />
	<meta property="og:title" content="Hercules: Gym Management System" />
	<meta
		property="og:description"
		content="A gym management system built as two connected interfaces over one database: a full web application, and a public mobile-first app for members and trainers."
	/>

	<meta property="twitter:url" content="https://hannnirin.vercel.app/blog/hercules" />
	<meta property="twitter:title" content="Hercules: Gym Management System" />
	<meta
		property="twitter:description"
		content="A gym management system built as two connected interfaces over one database: a full web application, and a public mobile-first app for members and trainers."
	/>
</svelte:head>

<article class="post">
	<div class="inner">
		<a href="/" class="back">← Back to portfolio</a>

		<header class="post-head">
			<p class="eyebrow">Case Study</p>
			<h1>Hercules: Gym Management System</h1>

			<dl class="post-meta">
				<div class="meta-item">
					<dt>Role</dt>
					<dd>UI/UX Designer &amp; Fullstack Developer</dd>
				</div>
				<div class="meta-item">
					<dt>Stack</dt>
					<dd>React · Express · EJS · MySQL · Tailwind CSS</dd>
				</div>
				<div class="meta-item">
					<dt>Code</dt>
					<dd>
						<a href="https://github.com/hannnirin/gym_mgt" target="_blank" rel="noopener noreferrer"
							>github.com/hannnirin/gym_mgt</a
						>
					</dd>
				</div>
				<div class="meta-item">
					<dt>Design</dt>
					<dd>
						<a
							href="https://www.behance.net/gallery/242545157/Gym-Website-Concept-Design"
							target="_blank"
							rel="noopener noreferrer">View on Behance</a
						>
					</dd>
				</div>
			</dl>
		</header>

		<div class="body-copy">
			<p>
				I wanted to write this one down properly, because most of what I learned on it came from
				decisions that weren't in the brief.
			</p>

			<p class="note">
				<em>Hercules</em> is an alias. The project was built to a real client brief, and the
				client's name is withheld here. The full source code is on
				<a href="https://github.com/hannnirin/gym_mgt" target="_blank" rel="noopener noreferrer"
					>GitHub</a
				>.
			</p>

			<h2>Overview</h2>
			<p>
				Hercules was our main project for the second semester of web development, part of my Diploma
				of Information Technology at TAFE. We worked as fullstack developers, and our instructor
				acted as project manager, bridging the client's needs and clarifying requirements as the
				build went on. We were expected to think beyond the brief rather than build only what it
				listed.
			</p>
			<p>
				The two audiences need different things. If you're administering the gym you need to see a lot
				at once: every booking for the week, filtered by trainer, with edit and remove controls on
				each row. If you're a member you just want to book a 6am class from your phone. Building both
				without ending up with two disconnected products shaped most of the design.
			</p>

			<h2>The project brief</h2>
			<p>
				Design, build and test a management system for a Brisbane-based gym operating several
				branches: the weekly class timetable across every location and trainer, member bookings,
				trainer-owned classes, a community feed, and the administrative tools behind all of it. It
				had to be built and tested end to end, which in practice meant testing by hand at every
				layer. The requirements were specific.
			</p>
			<ul>
				<li>MySQL as the database, with the structure designed and documented as part of the work.</li>
				<li>
					Three roles with different permissions, checked on the server for every request. Hiding a
					button in the interface isn't the same as preventing the action behind it.
				</li>
				<li>
					Australian address and contact formats: mobile numbers beginning with 04, four-digit
					postcodes, and states chosen from a fixed list.
				</li>
				<li>A member must never be able to book the same class twice.</li>
				<li>Class sizes capped at 30 people.</li>
				<li>Data export in XML, so schedules and booking history could be taken elsewhere.</li>
				<li>
					A responsive interface that works from a small phone to a wide desktop monitor, meeting
					accessibility expectations for contrast, scale and assistive software.
				</li>
			</ul>

			<h2>Who uses it, and the two systems</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr><th>Persona</th><th>What they need to do</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Administrator</td>
							<td>
								Run the gym: manage accounts, class types, branches, scheduled classes, bookings and
								community posts
							</td>
						</tr>
						<tr>
							<td>Trainer</td>
							<td>
								Own their timetable, create and cancel the classes they teach, post to the feed,
								export their week's schedule
							</td>
						</tr>
						<tr>
							<td>Member</td>
							<td>
								Browse the timetable, book and cancel a place in a class, post to the feed, export
								their booking history
							</td>
						</tr>
						<tr>
							<td>Visitor</td>
							<td>See the public timetable and community feed, and register for an account</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>Those needs are served by two systems sharing one database.</p>
			<pre class="diagram">{diagram}</pre>
			<ul>
				<li>
					<strong>Full web application.</strong> Built for administrators, trainers and members, on
					desktop and mobile. It holds the complete feature set, including everything needed to run
					the gym. Its pages are built on the server and arrive ready to display, which suits screens
					dense with forms and tables.
				</li>
				<li>
					<strong>Mobile-first web app.</strong> The public-facing side, for trainers and members and
					open to visitors: anyone can browse the timetable and feed without an account, then sign up
					when they're ready. For signed-in users it covers what people do on a phone, checking the
					timetable, booking or cancelling a class, posting, and exporting a schedule.
				</li>
			</ul>

			<h2>How it's built</h2>
			<p>
				The project is one repository with two folders. <code>backend/</code> holds the server, the
				database code and the API. <code>frontend/</code> holds the mobile-first app, including the
				landing page people arrive on. The frontend never touches the database directly. It asks the
				backend for what it needs and shows you the result.
			</p>
			<p>
				I designed the database too. It has seven tables: users, activities (the class types),
				locations (the branches), sessions (a class at a set time and place), bookings, community
				posts, and one linking trainers to the activities they can teach. A session sits at the
				centre, joining an activity, a location, a trainer and a time slot, and a booking links a
				member to one of those sessions.
			</p>
			<p>
				That last table wasn't in the brief. I proposed it to our instructor, because checking a
				trainer against a skill list seemed useful once the gym wanted to control who teaches what.
				It was approved, and it's the one part of the schema that came from me.
			</p>

			<h2>UI/UX design</h2>
			<p>I applied three usability laws so the system would feel familiar from the first click.</p>
			<ul>
				<li>
					<strong>Jakob's Law:</strong> people expect a product to work like the others they already
					know. I used a conventional dashboard layout, familiar icons, and recognisable patterns, a
					trash icon to remove a record and a primary action pinned to the top right. The smaller the
					learning curve, the sooner someone is productive.
				</li>
				<li>
					<strong>The Law of Proximity:</strong> things placed near each other are read as belonging
					together. The sidebar groups related navigation into clear sections, and edit and remove
					controls sit directly beside the record they affect.
				</li>
				<li>
					<strong>The Law of Prägnanz:</strong> people perceive complex layouts in their simplest
					possible form. One clear call to action per page, and table views showing only the columns
					that matter rather than every field a record happens to have.
				</li>
			</ul>
			<p>
				The mobile app was laid out for the smallest screen first and then allowed to expand, rather
				than a desktop layout squeezed down afterwards. Its navigation adapts to who is signed in, so
				a member and a trainer each see the options relevant to them. I designed the interface in
				Figma before building it, and the full visual walkthrough is on
				<a
					href="https://www.behance.net/gallery/242545157/Gym-Website-Concept-Design"
					target="_blank"
					rel="noopener noreferrer">Behance</a
				>.
			</p>

			<h2>Security</h2>
			<p>Security was a requirement in the brief, and it needed handling on both sides.</p>
			<ul>
				<li>
					<strong>Permissions are checked on the server, not in the interface.</strong> Each route
					states which roles may use it, and most also verify the record belongs to the person asking:
					you can only cancel your own booking, delete your own post, or cancel a class you teach.
					Hiding a control in the interface is presentation, not protection.
				</li>
				<li>
					<strong>Database queries use parameter binding.</strong> User input is passed as data, never
					pasted into the query text, including the search filters, where the typed text goes in as a
					value even though it ends up inside a wildcard pattern.
				</li>
				<li>
					<strong>Input is checked at more than one layer.</strong> Account and address details are
					validated in the application code and again by the database, and anything a user writes is
					escaped when it's displayed, so text typed into a form can't be treated as code by the
					browser.
				</li>
				<li>
					<strong>Passwords are hashed, never stored</strong>, through a one-way process that can't be
					reversed.
				</li>
				<li>
					<strong>Two sign-in methods, each suited to its client.</strong> The web application uses a
					standard session: the browser holds a small identifying token and returns it automatically.
					The mobile app gets an <em>authentication key</em>, a long random string created when you
					sign in and saved against your account, which it attaches to every request so the server
					knows who is asking.
				</li>
			</ul>
			<h2>What I took from it</h2>
			<ul>
				<li>
					<strong>Thinking beyond the brief.</strong> The requirements covered the obvious rules, but a
					real gym has situations the brief never mentions. A trainer shouldn't be scheduled to teach
					two classes in the same place at the same time. A member is stopped from booking the same
					class twice, but two different classes in the same hour is a separate problem. Spotting
					those gaps, and judging which ones matter, was a large part of the work.
				</li>
				<li>
					<strong>Deciding what survives a deletion.</strong> The real challenge in the database was
					making the cascade rules match how a gym actually works, and that meant thinking carefully
					about which records to keep and which to remove. A trainer leaving shouldn't erase the
					bookings members already made, so their classes stay and the trainer field is cleared. A
					cancelled class is different: the bookings attached to it have no meaning once it's gone, so
					they go with it. Neither answer is obviously right until you picture the person on the other
					end of it.
				</li>
				<li>
					<strong>It was the first time I applied UX principles to something I was building.</strong> I'd
					studied these laws at TAFE, and this was the project where they stopped being lecture
					material and started deciding real screens.
				</li>
				<li>
					<strong>It was my first fullstack build.</strong> Express, EJS and React were all new to me,
					and until this project I had worked on the frontend only. Taking a feature from the database,
					through the server, out to the screen, and being responsible for every layer in between, is
					a different way of thinking about a problem. It also brought back the database work I did at
					university: MySQL was the one piece I had met before, and this was the first time I used it
					for something this size.
				</li>
			</ul>
			<p>
				The code is on <a
					href="https://github.com/hannnirin/gym_mgt"
					target="_blank"
					rel="noopener noreferrer">GitHub</a
				> if you want to look through it, and the design walkthrough is on
				<a
					href="https://www.behance.net/gallery/242545157/Gym-Website-Concept-Design"
					target="_blank"
					rel="noopener noreferrer">Behance</a
				>.
			</p>
		</div>

		<a href="/" class="back back--bottom">← Back to portfolio</a>
	</div>
</article>

<style>
	.post {
		padding: 6rem 0 8rem;
	}

	.inner {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	@media (min-width: 768px) {
		.inner {
			padding: 0 2.5rem;
		}
	}

	.back {
		display: inline-block;
		font-size: 0.8rem;
		letter-spacing: 0.02em;
		color: var(--color-muted);
		transition: color 0.15s ease;
	}

	.back:hover {
		color: var(--color-heading);
	}

	.back--bottom {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
		width: 100%;
	}

	.post-head {
		margin: 2.5rem 0 3.5rem;
	}

	.eyebrow {
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: 1rem;
	}

	.post-head h1 {
		font-size: clamp(2rem, 5vw, 2.9rem);
		font-weight: 600;
		letter-spacing: -0.03em;
		margin-bottom: 1.25rem;
		line-height: 1.15;
	}

	.post-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 2.5rem;
		margin: 2.5rem 0 0;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}

	.meta-item dt {
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin-bottom: 0.35rem;
	}

	.meta-item dd {
		margin: 0;
		font-size: 0.9rem;
		color: var(--color-body);
	}

	.meta-item dd a {
		color: var(--color-accent);
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: color 0.15s ease;
	}

	.meta-item dd a:hover {
		color: var(--color-heading);
	}

	.body-copy {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		font-size: 1rem;
		line-height: 1.8;
		color: var(--color-body);
	}

	.body-copy h2 {
		font-size: clamp(1.1rem, 2.5vw, 1.4rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		margin-top: 2rem;
	}

	.body-copy ul {
		margin: 0;
		padding-left: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.body-copy li {
		position: relative;
		padding-left: 1.5rem;
	}

	.body-copy li::before {
		content: '';
		position: absolute;
		left: 0.15rem;
		top: 0.75em;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.body-copy strong {
		color: var(--color-heading);
		font-weight: 600;
	}

	.body-copy a {
		color: var(--color-accent);
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: color 0.15s ease;
	}

	.body-copy a:hover {
		color: var(--color-heading);
	}

	.body-copy code {
		font-family: ui-monospace, 'SF Mono', Menlo, monospace;
		font-size: 0.85em;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		padding: 0.1em 0.4em;
		color: var(--color-heading);
		white-space: nowrap;
	}

	.diagram {
		margin: 0;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 6px;
		padding: 1.25rem;
		overflow-x: auto;
		font-family: ui-monospace, 'SF Mono', Menlo, monospace;
		font-size: 0.72rem;
		line-height: 1.6;
		color: var(--color-muted);
		-webkit-overflow-scrolling: touch;
	}

	.table-wrap {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	.body-copy table {
		border-collapse: collapse;
		width: 100%;
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.body-copy th {
		text-align: left;
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-muted);
		font-weight: 500;
		padding: 0 1rem 0.6rem 0;
		border-bottom: 1px solid var(--color-border);
		white-space: nowrap;
	}

	.body-copy td {
		padding: 0.7rem 1rem 0.7rem 0;
		border-bottom: 1px solid var(--color-border);
		vertical-align: top;
	}

	.body-copy tr:last-child td {
		border-bottom: none;
	}

	.note {
		color: var(--color-muted);
		font-size: 0.9rem;
		line-height: 1.7;
	}
</style>
