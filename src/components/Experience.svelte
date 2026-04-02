<script>
  export let companies = [];

  let hoveredJob = null;

  function getYears(duration) {
    const years = duration.match(/\d{4}/g);
    if (!years) return duration;
    return years.length >= 2 ? `${years[0]}–${years[1]}` : years[0];
  }
</script>

<section id="experience" class="section">
  <div class="inner">
    <div class="exp-grid">

      <!-- Col 1: heading -->
      <div class="col-heading">
        <p class="section-label">Experience</p>
      </div>

      <!-- Col 2: company list -->
      <div class="col-list">
        {#each companies as job}
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="job-row"
            class:active={hoveredJob === job}
            on:mouseenter={() => (hoveredJob = job)}
            on:mouseleave={() => (hoveredJob = null)}
          >
            <span class="job-company">{job.name}</span>
            <span class="job-years">{getYears(job.duration)}</span>
          </div>
        {/each}
      </div>

      <!-- Col 3: hover detail -->
      <div class="col-detail">
        {#if hoveredJob}
          <p class="detail-position">{hoveredJob.position}</p>
          <p class="detail-role">{hoveredJob.role}</p>
        {:else}
          <p class="detail-hint">Hover a company ↑</p>
        {/if}
      </div>

    </div>
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
  .exp-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    .exp-grid {
      grid-template-columns: 1.2fr 2fr 2fr;
      gap: 3rem;
      align-items: start;
    }
  }

  /* Col 1 */
  .section-label {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--color-heading);
    letter-spacing: -0.025em;
    line-height: 1.15;
  }

  /* Col 2 — list */
  .col-list {
    display: flex;
    flex-direction: column;
  }

  .job-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-border);
    cursor: default;
    transition: color 0.15s ease;
  }

  .job-row:first-child {
    padding-top: 0;
  }

  .job-row:last-child {
    border-bottom: none;
  }

  .job-company {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-muted);
    transition: color 0.15s ease;
  }

  .job-row.active .job-company {
    color: var(--color-heading);
  }

  .job-years {
    font-size: 0.78rem;
    color: var(--color-muted);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
    white-space: nowrap;
    flex-shrink: 0;
    transition: opacity 0.15s ease;
  }

  .job-row.active .job-years {
    opacity: 1;
  }

  /* Col 3 — detail */
  .col-detail {
    padding-top: 0.15rem;
  }

  .detail-position {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 0.75rem;
  }

  .detail-role {
    font-size: 0.9375rem;
    line-height: 1.75;
    color: var(--color-body);
  }

  .detail-hint {
    font-size: 0.8rem;
    color: var(--color-border);
    letter-spacing: 0.02em;
  }
</style>
