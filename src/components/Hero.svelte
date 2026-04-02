<script>
	import Clock from './Clock.svelte';
</script>

<section class="hero">
	<div class="hero-inner">
		<div class="hero-top fade-up d1">
			<Clock />
			<p class="hero-label">Frontend Developer &nbsp;·&nbsp; Brisbane, Australia</p>
		</div>
		<h1 class="hero-name fade-up d2">Irene.</h1>
		<div class="hero-bottom fade-up d3">
			<p class="hero-statement">
				I design and build scalable component systems with a focus on
				accessibility, performance, and interfaces that feel effortless to use.
			</p>
			<div class="hero-actions">
				<a href="#contact" class="btn-primary">Let's work together</a>
				<a href="#projects" class="btn-ghost">Check projects ↓</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 4rem 0 6rem;
	}

	.hero-inner {
		width: 100%;
		padding: 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.hero-inner { padding: 0 2.5rem; }
	}

	@media (min-width: 1280px) {
		.hero-inner { padding: 0 4rem; }
	}

	.hero-top {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.hero-label {
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-muted);
	}

	.hero-name {
		font-size: clamp(6rem, 18vw, 16rem);
		font-weight: 600;
		color: var(--color-heading);
		letter-spacing: -0.045em;
		line-height: 0.9;
	}

	.hero-bottom {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.hero-bottom {
			flex-direction: row;
			align-items: flex-start;
			gap: 2rem;
		}
	}

	.hero-statement {
		font-size: clamp(0.875rem, 1.6vw, 1.05rem);
		color: var(--color-muted);
		line-height: 1.9;
		max-width: 52ch;
		flex: 1;
	}

	.hero-actions {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
		flex-shrink: 0;
		padding-top: 0.15rem;
		margin-left: auto;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.35rem;
		background: var(--color-heading);
		color: var(--color-bg);
		font-size: 0.8125rem;
		font-weight: 500;
		letter-spacing: 0.01em;
		border-radius: 2px;
		white-space: nowrap;
		transition: opacity 0.2s ease;
	}

	.btn-primary:hover {
		opacity: 0.75;
	}

	.btn-ghost {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.35rem;
		border: 1px solid var(--color-border);
		color: var(--color-muted);
		font-size: 0.8125rem;
		border-radius: 2px;
		white-space: nowrap;
		transition: border-color 0.2s ease, color 0.2s ease;
	}

	.btn-ghost:hover {
		border-color: var(--color-heading);
		color: var(--color-heading);
	}
</style>
