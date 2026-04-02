<section class="hero">
  <div class="hero-inner">
    <p class="hero-label fade-up d1">Frontend Developer &nbsp;·&nbsp; Brisbane, Australia</p>
    <h1 class="hero-name fade-up d2">Irene.</h1>
    <p class="hero-statement fade-up d3">
      I build clean, accessible interfaces —<br />
      turning ideas into thoughtful user experiences.
    </p>
    <div class="hero-actions fade-up d4">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="#contact" class="btn-ghost">Get in Touch ↗</a>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 8rem 0 6rem;
  }

  .hero-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  @media (min-width: 768px) {
    .hero-inner { padding: 0 2.5rem; }
  }

  @media (min-width: 1280px) {
    .hero-inner { padding: 0 4rem; }
  }

  .hero-label {
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-muted);
  }

  .hero-name {
    font-size: clamp(4.5rem, 12vw, 10rem);
    font-weight: 600;
    color: var(--color-heading);
    letter-spacing: -0.045em;
    line-height: 0.95;
  }

  .hero-statement {
    font-size: clamp(1.05rem, 2.5vw, 1.35rem);
    color: var(--color-body);
    line-height: 1.65;
    max-width: 42ch;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    flex-wrap: wrap;
    padding-top: 0.25rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    padding: 0.675rem 1.4rem;
    background: var(--color-heading);
    color: var(--color-bg);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    border-radius: 2px;
    transition: opacity 0.2s ease;
  }

  .btn-primary:hover {
    opacity: 0.8;
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    padding: 0.675rem 1.4rem;
    border: 1px solid var(--color-border);
    color: var(--color-body);
    font-size: 0.875rem;
    border-radius: 2px;
    transition: border-color 0.2s ease, color 0.2s ease;
  }

  .btn-ghost:hover {
    border-color: var(--color-heading);
    color: var(--color-heading);
  }
</style>
