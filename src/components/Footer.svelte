<script>
  export let socials = [];

  const year = new Date().getFullYear();
  const email = 'rainhontanosas@gmail.com';

  const marqueeItems = Array(6).fill(`(*) ${email}`);
</script>

<footer id="contact" class="footer">
  <div class="footer-top">
    <div class="footer-col footer-col--name">
      <p class="footer-name">Irene Hontanosas</p>
      <p class="footer-copy">© {year} · All rights reserved</p>
    </div>

    <div class="footer-col">
      <p class="col-label">Find me here</p>
      <nav class="col-links" aria-label="Social links">
        {#each socials as s}
          {#if s.type === 'social'}
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.website}</a>
          {/if}
        {/each}
      </nav>
    </div>
  </div>

  <div class="footer-bottom">
    <p class="get-in-touch">Let's work together</p>
    <div class="email-marquee" aria-label="Contact email">
      <div class="email-track">
        {#each [...marqueeItems, ...marqueeItems] as item}
          <span class="email-item">{item}</span>
        {/each}
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--footer-bg);
    color: #fff;
    overflow: hidden;
    /* clear the floating pill nav */
    padding-bottom: 6rem;
  }

  :global(:root) {
    --footer-bg: #BB0A21;
  }

  :global(.dark-theme) {
    --footer-bg: #2BC016;
  }

  /* ── Top section ─────────────────────────────── */
  .footer-top {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 4rem 2rem 3rem;
  }

  @media (min-width: 640px) {
    .footer-top {
      grid-template-columns: 2fr 1fr;
      padding: 4rem 2.5rem 3rem;
    }
  }

  @media (min-width: 1280px) {
    .footer-top {
      padding: 4rem 4rem 3rem;
    }
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-name {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.01em;
    margin-bottom: 0.1rem;
  }

  .footer-copy {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.55);
  }

  .col-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 0.25rem;
  }

  .col-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .col-links a {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.18s ease;
    text-decoration: none;
  }

  .col-links a:hover {
    color: #fff;
  }

  /* ── Bottom marquee ──────────────────────────── */
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 1.5rem;
    overflow: hidden;
  }

  .get-in-touch {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
    padding: 0 2rem;
    margin-bottom: 0.75rem;
  }

  .email-marquee {
    width: 100%;
    overflow: hidden;
  }

  .email-track {
    display: flex;
    width: max-content;
    /* 55s = slow enough to read */
    animation: emailScroll 55s linear infinite;
  }

  @keyframes emailScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .email-item {
    display: inline-block;
    font-size: clamp(1.75rem, 4vw, 3.5rem);
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.03em;
    white-space: nowrap;
    padding: 0 1.5rem;
    line-height: 1.2;
    padding-bottom: 2rem;
  }
</style>
