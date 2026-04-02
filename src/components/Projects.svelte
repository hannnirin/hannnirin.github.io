<script>
  export let projects = [];
</script>

<section id="projects" class="section">
  <div class="inner">
    <p class="section-label">Projects</p>

    {#if projects.length === 0}
      <p class="empty">No projects yet.</p>
    {:else}
      <div class="grid">
        {#each projects as project}
          <div class="card">
            <div class="card-top">
              <h3 class="card-title">{project.title}</h3>
              <div class="card-links">
                {#if project.link && project.link !== '#'}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-link"
                    aria-label="View live project"
                  >
                    Live ↗
                  </a>
                {/if}
                {#if project.github && project.github !== '#'}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-link"
                    aria-label="View on GitHub"
                  >
                    GitHub ↗
                  </a>
                {/if}
              </div>
            </div>

            <p class="card-desc">{project.description}</p>

            <div class="card-stack">
              {#each project.stack as tech}
                <span class="tag">{tech}</span>
              {/each}
            </div>
          </div>
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

  /* ── Card grid ───────────────────────────────── */
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 640px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* ── Card ────────────────────────────────────── */
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    border-color: var(--color-heading);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .card-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-heading);
    line-height: 1.3;
  }

  .card-links {
    display: flex;
    gap: 0.875rem;
    flex-shrink: 0;
  }

  .card-link {
    font-size: 0.78rem;
    color: var(--color-muted);
    letter-spacing: 0.02em;
    transition: color 0.18s ease;
  }

  .card-link:hover {
    color: var(--color-heading);
  }

  .card-desc {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--color-body);
    flex: 1;
  }

  .card-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;
    padding-top: 0.25rem;
  }

  .tag {
    font-size: 0.7rem;
    color: var(--color-muted);
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    padding: 0.2rem 0.6rem;
    border-radius: 100px;
    letter-spacing: 0.03em;
  }
</style>
