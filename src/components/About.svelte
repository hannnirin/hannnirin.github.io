<section id="about" class="section">
	<div class="inner">
		<p class="section-label">About</p>
		<div class="about-grid">
			<div class="about-text">
				<h2>A decade of building<br />on the web.</h2>
				<div class="body-copy">
					<p>
						I'm Irene, a frontend developer based in Brisbane with over nine years of experience
						crafting websites and web applications.
					</p>
					<p>
						What started as PHP development quickly evolved into a deep focus on the frontend: the
						intersection of code and design where I do my best work. I have shipped projects from
						ecommerce platforms to content management systems, always focusing accessibility and the
						end user experience.
					</p>
					<p>
						I value simplicity, useful design, and interfaces that just work. An eye for typography
						and motion, shaped by years of UI/UX practice.
					</p>
					<p class="status-line">
						<span class="status-dot" aria-hidden="true" />
						Currently open to new opportunities.
					</p>
				</div>
			</div>

			<aside class="about-meta">
				<div class="meta-item">
					<span class="meta-label">Based in</span>
					<span>Brisbane, Australia</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Experience</span>
					<span>9+ years</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Specialty</span>
					<span>Frontend Development</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Education</span>
					<span>B.S. Information Technology</span>
					<span>Diploma of IT (Fullstack Web)</span>
					<span class="meta-sub">TAFE Queensland (South Bank)</span>
				</div>
			</aside>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 7rem 0;
		border-top: 1px solid var(--color-border);
	}

	.inner {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	@media (min-width: 768px) {
		.inner {
			padding: 0 2.5rem;
		}
	}

	@media (min-width: 1280px) {
		.inner {
			padding: 0 4rem;
		}
	}

	.section-label {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 600;
		color: var(--color-heading);
		letter-spacing: -0.025em;
		line-height: 1.15;
		margin-bottom: 2.5rem;
	}

	/* Two-column layout on md+ */
	.about-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	@media (min-width: 768px) {
		.about-grid {
			grid-template-columns: 3fr 2fr;
			gap: 5rem;
			align-items: start;
		}
	}

	/* Subheading — visually distinct from the large section-label above */
	.about-text h2 {
		font-size: clamp(1rem, 2vw, 1.25rem);
		font-weight: 400;
		color: var(--color-body);
		letter-spacing: -0.01em;
		line-height: 1.4;
		margin-bottom: 1.75rem;
	}

	.body-copy {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		font-size: 1rem;
		line-height: 1.8;
		color: var(--color-body);
		max-width: 58ch;
	}

	.status-line {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--color-accent);
		font-size: 0.9rem;
	}

	.status-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--color-accent);
		flex-shrink: 0;
		animation: blink 2.4s ease-in-out infinite;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.25;
		}
	}

	/* Meta sidebar */
	.about-meta {
		display: flex;
		flex-direction: column;
		gap: 0;
		padding-top: 0.25rem;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		padding: 1.1rem 0;
		border-bottom: 1px solid var(--color-border);
		font-size: 0.9rem;
		color: var(--color-body);
	}

	.meta-item:first-child {
		padding-top: 0;
	}

	.meta-item:last-child {
		border-bottom: none;
	}

	.meta-label {
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-muted);
	}

	.meta-sub {
		font-size: 0.8rem;
		color: var(--color-muted);
		font-style: italic;
	}
</style>
