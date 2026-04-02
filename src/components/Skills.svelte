<script>
  export let skills = [];
</script>

<section id="skills" class="section">
  <div class="inner">
    <p class="section-label">Skills</p>
    <div class="skills-list">
      {#each skills as group}
        <div class="group">
          <p class="group-label">{group.category}</p>
          <ul class="pill-list">
            {#each group.skills as skill}
              <li>{skill}</li>
            {/each}
          </ul>
        </div>
      {/each}
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

  .section-label {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--color-heading);
    letter-spacing: -0.025em;
    line-height: 1.15;
    margin-bottom: 2.5rem;
  }

  .skills-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid var(--color-border);
  }

  @media (min-width: 900px) {
    .skills-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.25rem 1rem 1.25rem 0;
    border-bottom: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
  }

  /* Remove right border on last column */
  @media (min-width: 900px) {
    .group:nth-child(3n) { border-right: none; }
    .group:nth-child(3n+1) { padding-left: 0; }
    .group:nth-child(3n+2) { padding-left: 1rem; }
    .group:nth-child(3n) { padding-left: 1rem; }
  }

  @media (max-width: 899px) {
    .group:nth-child(2n) { border-right: none; }
    .group:nth-child(2n+1) { padding-left: 0; }
    .group:nth-child(2n) { padding-left: 1rem; }
  }

  .group-label {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin: 0;
  }

  .pill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .pill-list li {
    font-size: 0.75rem;
    color: var(--color-muted);
    padding: 0.3rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: 100px;
    cursor: default;
    transition:
      color 0.15s ease,
      background 0.15s ease,
      border-color 0.15s ease,
      transform 0.15s ease;
  }

  .pill-list li:hover {
    color: var(--color-bg);
    background: var(--color-accent);
    border-color: var(--color-accent);
    transform: scale(1.06);
  }
</style>
