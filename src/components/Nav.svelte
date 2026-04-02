<script>
  import { onMount } from 'svelte';

  let scrolled = false;
  let activeSection = '';

  function onScroll() {
    scrolled = window.scrollY > 100;
  }

  onMount(() => {
    const ids = ['about', 'skills', 'experience', 'projects', 'blog', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeSection = entry.target.id;
        }
      },
      { threshold: 0.35 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<svelte:window on:scroll={onScroll} />

<!-- Pill nav: floats up from bottom on scroll -->
<nav class="nav-pill" class:visible={scrolled} aria-label="Site navigation">
  <a href="#about"      class:active={activeSection === 'about'}>About</a>
  <a href="#skills"     class:active={activeSection === 'skills'}>Skills</a>
  <a href="#experience" class:active={activeSection === 'experience'}>Work</a>
  <a href="#projects"   class:active={activeSection === 'projects'}>Projects</a>
  <a href="#contact"    class:active={activeSection === 'contact'}>Contact</a>
</nav>

<style>
  /* ── Pill nav ────────────────────────────────── */
  .nav-pill {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(calc(100% + 3rem));
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.375rem 0.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 100px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    opacity: 0;
    transition:
      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      opacity 0.4s ease;
    white-space: nowrap;
  }

  .nav-pill.visible {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }

  .nav-pill a {
    padding: 0.45rem 1.05rem;
    border-radius: 100px;
    font-size: 0.8rem;
    letter-spacing: 0.02em;
    color: var(--color-muted);
    transition: color 0.18s ease, background-color 0.18s ease;
  }

  .nav-pill a:hover {
    color: var(--color-heading);
    background-color: var(--color-border);
  }

  /* Active: filled chip — inverted colors */
  .nav-pill a.active {
    background-color: var(--color-heading);
    color: var(--color-bg);
  }

  /* ── Mobile ──────────────────────────────────── */
  @media (max-width: 540px) {
    .nav-pill {
      max-width: calc(100vw - 2rem);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .nav-pill::-webkit-scrollbar { display: none; }
    .nav-pill a { padding: 0.4rem 0.7rem; font-size: 0.72rem; }
  }
</style>
