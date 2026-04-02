<script>
  export let companies = [];
</script>

<section id="experience" class="section">
  <div class="inner">
    <p class="section-label">Experience</p>
    <div class="exp-list">
      {#each companies as job}
        <div class="exp-item">
          <div class="exp-header">
            <div class="exp-title">
              <h3 class="exp-company">{job.name}</h3>
              <p class="exp-position">{job.position}</p>
            </div>
            <span class="exp-duration">{job.duration}</span>
          </div>
          <p class="exp-role">{job.role}</p>
        </div>
      {/each}
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

  .exp-list {
    display: flex;
    flex-direction: column;
  }

  .exp-item {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 2.25rem 0;
    border-bottom: 1px solid var(--color-border);
  }

  .exp-item:first-child {
    padding-top: 0;
  }

  .exp-item:last-child {
    border-bottom: none;
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .exp-company {
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--color-heading);
    margin-bottom: 0.25rem;
  }

  .exp-position {
    font-size: 0.875rem;
    color: var(--color-muted);
  }

  .exp-duration {
    font-size: 0.8rem;
    color: var(--color-muted);
    white-space: nowrap;
    letter-spacing: 0.02em;
    padding-top: 0.15rem;
    flex-shrink: 0;
  }

  .exp-role {
    font-size: 0.9375rem;
    line-height: 1.75;
    color: var(--color-body);
    max-width: 72ch;
  }
</style>
