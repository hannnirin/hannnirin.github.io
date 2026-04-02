<script>
  export let skills = [];
</script>

<section id="skills" class="section">
  <div class="inner">
    <p class="section-label">Skills</p>
    <div class="skills-grid">
      {#each skills as group}
        <div class="skill-group">
          <p class="group-label">{group.category}</p>
          <ul class="skill-list">
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

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 2rem;
  }

  @media (min-width: 768px) {
    .skills-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (min-width: 1080px) {
    .skills-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .group-label {
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 0.85rem;
  }

  .skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .skill-list li {
    font-size: 0.9375rem;
    color: var(--color-body);
    line-height: 1.5;
  }
</style>
