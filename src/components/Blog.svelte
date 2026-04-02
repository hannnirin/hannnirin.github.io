<script>
	export let posts = [
		{
			title: 'How to display WooCommerce featured products without shortcode',
			url: 'https://codewithannnirin.wordpress.com/2017/04/25/how-to-display-woocommerce-featured-products-without-shortcode/',
			date: 'Apr 25, 2017'
		},
		{
			title: 'Setting up Express MVC + EJS + TailwindCSS 4.0',
			url: 'https://medium.com/@hannnirin/setting-up-express-mvc-ejs-tailwindcss-4-0-2ccac72dad59',
			date: '2024'
		}
	];
</script>

<section id="blog" class="section">
	<div class="inner">
		<p class="section-label">Articles</p>

		{#if posts.length === 0}
			<p class="empty">No posts yet.</p>
		{:else}
			<div class="grid">
				{#each posts as post}
					<a
						href={post.url}
						target={post.url.startsWith('http') ? '_blank' : undefined}
						rel={post.url.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="card"
					>
						{#if post.date}
							<span class="card-date">{post.date}</span>
						{/if}
						<p class="card-title">{post.title}</p>
						<span class="card-arrow" aria-hidden="true">↗</span>
					</a>
				{/each}
			</div>
		{/if}
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

	.empty {
		font-size: 0.9375rem;
		color: var(--color-muted);
	}

	/* ── Card grid ───────────────────────────────── */
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 480px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 900px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* ── Card ────────────────────────────────────── */
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 1.25rem 1.5rem;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		color: var(--color-body);
		transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
		position: relative;
	}

	.card:hover {
		border-color: var(--color-heading);
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
		color: var(--color-heading);
	}

	.card-date {
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-muted);
	}

	.card-title {
		font-size: 0.9375rem;
		line-height: 1.5;
		font-weight: 400;
		margin: 0;
		flex: 1;
	}

	.card-arrow {
		font-size: 0.9rem;
		color: var(--color-muted);
		align-self: flex-end;
		margin-top: 0.5rem;
		transition: color 0.2s ease, transform 0.2s ease;
	}

	.card:hover .card-arrow {
		color: var(--color-heading);
		transform: translate(2px, -2px);
	}
</style>
