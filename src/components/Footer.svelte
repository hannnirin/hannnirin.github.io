<script>
	export let socials = [];

	const year = new Date().getFullYear();
</script>

<footer id="contact" class="footer">
	<div class="inner">
		<hr />
		<div class="footer-inner">
			<div class="footer-left">
				<p class="footer-name">Irene Hontanosas</p>
				<p class="footer-copy">© {year} · All rights reserved</p>
			</div>

			<nav class="footer-links" aria-label="Social links">
				{#each socials as s}
					{#if s.type === 'social'}
						<a href={s.url} target="_blank" rel="noopener noreferrer" class="footer-link">
							{s.website}
						</a>
					{/if}
				{/each}
			</nav>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 3rem 0 7.5rem;
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

	hr {
		border: none;
		border-top: 1px solid var(--color-border);
		margin-bottom: 2rem;
	}

	.footer-inner {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.footer-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-heading);
		margin-bottom: 0.3rem;
	}

	.footer-copy {
		font-size: 0.8rem;
		color: var(--color-muted);
	}

	.footer-links {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.footer-link {
		font-size: 0.8125rem;
		color: var(--color-muted);
		transition: color 0.2s ease;
		letter-spacing: 0.01em;
	}

	.footer-link:hover {
		color: var(--color-heading);
	}
</style>
