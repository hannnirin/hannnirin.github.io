<script>
  export let projects = [];

  let hoveredProject = null;
</script>

<section id="projects" class="section">
  <div class="inner">
    <p class="section-label">Side Projects</p>
    {#if projects.length === 0}
      <p class="coming-soon">Something's brewing. Projects on their way.</p>
    {:else}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="proj-grid" on:mouseleave={() => (hoveredProject = null)}>

        <!-- Col 1: heading -->
        <div class="col-heading"></div>

        <!-- Col 2: project list -->
        <div class="col-list">
          {#each projects as project}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              class="proj-row"
              class:active={hoveredProject === project}
              on:mouseenter={() => (hoveredProject = project)}
            >
              <span class="proj-title">
                {project.title}
                {#if project.inProgress}
                  <span class="proj-badge">In progress</span>
                {/if}
              </span>
              {#if project.category}
                <span class="proj-tag">{project.category}</span>
              {/if}
            </div>
          {/each}
        </div>

        <!-- Col 3: hover detail -->
        <div class="col-detail">
          {#if hoveredProject}
            <p class="detail-desc">{hoveredProject.description}</p>
            <div class="detail-links">
              {#if hoveredProject.caseStudy}
                <a href={hoveredProject.caseStudy} class="detail-link">
                  Case Study →
                </a>
              {/if}
              {#if hoveredProject.link && hoveredProject.link !== '#'}
                <a href={hoveredProject.link} target="_blank" rel="noopener noreferrer" class="detail-link">
                  Live ↗
                </a>
              {/if}
              {#if hoveredProject.github && hoveredProject.github !== '#'}
                <a href={hoveredProject.github} target="_blank" rel="noopener noreferrer" class="detail-link">
                  GitHub ↗
                </a>
              {/if}
            </div>
          {:else}
            <p class="detail-hint">Hover a project ↑</p>
          {/if}
        </div>

      </div>
    {/if}
  </div>
</section>

<style>
  .section {
    padding: 7rem 0;

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

  /* ── 3-column grid ───────────────────────────── */
  .proj-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    .proj-grid {
      grid-template-columns: 1.2fr 2fr 2fr;
      gap: 3rem;
      align-items: start;
    }
  }

  .coming-soon {
    font-size: 0.9rem;
    color: var(--color-muted);
    font-style: italic;
    padding-top: 0.5rem;
  }

  .section-label {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--color-heading);
    letter-spacing: -0.025em;
    line-height: 1.15;
  }

  /* Col 2 */
  .col-list {
    display: flex;
    flex-direction: column;
  }

  .proj-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-border);
    cursor: default;
  }

  .proj-row:first-child {
    padding-top: 0;
  }

  .proj-row:last-child {
    border-bottom: none;
  }

  .proj-title {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-muted);
    transition: color 0.15s ease;
  }

  .proj-row.active .proj-title {
    color: var(--color-heading);
  }

  .proj-badge {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.1em 0.45em;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted);
    white-space: nowrap;
    vertical-align: 0.12em;
  }

  .proj-row.active .proj-badge {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .proj-tag {
    font-size: 0.75rem;
    color: var(--color-muted);
    letter-spacing: 0.02em;
    white-space: nowrap;
    flex-shrink: 0;
    transition: opacity 0.15s ease;
  }

  /* Col 3 */
  .col-detail {
    padding-top: 0.15rem;
  }

  .detail-desc {
    font-size: 0.9375rem;
    line-height: 1.75;
    color: var(--color-body);
    margin-bottom: 1rem;
  }

  .detail-links {
    display: flex;
    gap: 1rem;
  }

  .detail-link {
    font-size: 0.8rem;
    color: var(--color-muted);
    letter-spacing: 0.02em;
    transition: color 0.15s ease;
  }

  .detail-link:hover {
    color: var(--color-heading);
  }

  .detail-hint {
    font-size: 0.8rem;
    color: var(--color-border);
    letter-spacing: 0.02em;
  }
</style>
