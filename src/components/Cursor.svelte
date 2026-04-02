<script>
  import { onMount, onDestroy } from 'svelte';

  let x = -200;
  let y = -200;

  function onMove(e) {
    x = e.clientX;
    y = e.clientY;
  }

  onMount(() => {
    window.addEventListener('mousemove', onMove);
  });

  onDestroy(() => {
    window.removeEventListener('mousemove', onMove);
  });
</script>

<div class="cursor" style="transform: translate({x}px, {y}px)">
  <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M2 2L2 17.5L5.8 13.7H10.5L2 2Z"
      fill="var(--cursor-color)"
      stroke="white"
      stroke-width="1.4"
      stroke-linejoin="round"
    />
  </svg>
  <span class="cursor-label">Irene</span>
</div>

<style>
  :global(*) {
    cursor: none !important;
  }

  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 99999;
    will-change: transform;
    /* offset so the tip of the arrow is at (x, y) */
    margin-top: -2px;
    margin-left: -2px;
  }

  .cursor-label {
    position: absolute;
    left: 16px;
    top: 1px;
    background: var(--cursor-color);
    color: #fff;
    font-size: 0.65rem;
    font-weight: 600;
    font-family: 'Inter', system-ui, sans-serif;
    letter-spacing: 0.02em;
    padding: 2px 7px 3px;
    border-radius: 0 4px 4px 4px;
    white-space: nowrap;
    line-height: 1.4;
    user-select: none;
  }

  /* ── Theme colors ──────────────────────────── */
  :global(:root) {
    --cursor-color: #BB0A21;
  }

  :global(.dark-theme) {
    --cursor-color: #2BC016;
  }
</style>
