<script>
	export let posts = [];
</script>

<section id="blog" class="section">
	<div class="inner">
		<p class="section-label">Articles</p>

		{#if posts.length === 0}
			<p class="empty">No posts yet.</p>
		{:else}
			<ol class="list">
				{#each posts as post, i}
					<li class="row">
						<a
							href={post.url}
							target={post.url.startsWith('http') ? '_blank' : undefined}
							rel={post.url.startsWith('http') ? 'noopener noreferrer' : undefined}
							class="row-link"
						>
							<span class="row-index">{String(i + 1).padStart(2, '0')}</span>
							<span class="row-title">{post.title}</span>
							<span class="row-meta">
								{#if post.date}<span class="row-date">{post.date}</span>{/if}
								<span class="row-arrow" aria-hidden="true">↗</span>
							</span>
						</a>
					</li>
				{/each}
			</ol>
		{/if}
	</div>
</section>

<style>
	.section {
		padding: 7rem 0;
		border-top: 1px solid var(--color-border);
	}

	.inner {
		padding: 0 1.5rem;
	}

	@media (min-width: 768px) {
		.inner { padding: 0 2.5rem; }
	}

	@media (min-width: 1280px) {
		.inner { padding: 0 4rem; }
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

	.list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.row {
		border-bottom: 1px solid var(--color-border);
	}

	.row:first-child {
		border-top: 1px solid var(--color-border);
	}

	.row-link {
		display: grid;
		grid-template-columns: 3rem 1fr auto;
		align-items: center;
		gap: 1.5rem;
		padding: 1.4rem 0;
		color: var(--color-body);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.row-link:hover {
		color: var(--color-heading);
	}

	.row-index {
		font-size: 0.7rem;
		letter-spacing: 0.08em;
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
		transition: color 0.15s ease;
	}

	.row-link:hover .row-index {
		color: var(--color-heading);
	}

	.row-title {
		font-size: clamp(0.9375rem, 1.5vw, 1.05rem);
		font-weight: 400;
		line-height: 1.4;
		letter-spacing: -0.01em;
	}

	.row-meta {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		flex-shrink: 0;
	}

	.row-date {
		font-size: 0.72rem;
		letter-spacing: 0.06em;
		color: var(--color-muted);
		white-space: nowrap;
	}

	.row-arrow {
		font-size: 0.9rem;
		color: var(--color-muted);
		opacity: 0;
		transform: translate(-4px, 4px);
		transition: opacity 0.15s ease, transform 0.15s ease, color 0.15s ease;
	}

	.row-link:hover .row-arrow {
		opacity: 1;
		transform: translate(0, 0);
		color: var(--color-heading);
	}
</style>
