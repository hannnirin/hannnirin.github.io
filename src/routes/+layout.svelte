<script>
  import '../app.css';
  import { lightMode } from '../stores/stores.js';
  import Cursor from '../components/Cursor.svelte';
  import Loader from '../components/Loader.svelte';
  import ThemePicker from '../components/ThemePicker.svelte';
  import { onMount } from 'svelte';

  let ready = false;

  onMount(() => {
    // Auto-detect time of day for initial theme
    const hour = new Date().getHours();
    lightMode.set(hour >= 6 && hour < 18);

    // Subscribe and apply class to <html> so CSS variables cascade to <body>
    const unsub = lightMode.subscribe((isLight) => {
      document.documentElement.classList.toggle('dark-theme', !isLight);
    });

    // Allow npm loader animation (~2.6s) to finish before showing content
    setTimeout(() => { ready = true; }, 3200);

    return unsub;
  });
</script>

<Cursor />

<!-- Theme toggle: always fixed top-right, z-index above everything -->
<div class="theme-fixed">
  <ThemePicker />
</div>

{#if !ready}
  <Loader />
{:else}
  <slot />
{/if}

<style>
  .theme-fixed {
    position: fixed;
    top: 1.1rem;
    right: 1.5rem;
    z-index: 60;
  }

  @media (min-width: 768px) {
    .theme-fixed { right: 2.5rem; }
  }

  @media (min-width: 1280px) {
    .theme-fixed { right: 4rem; }
  }
</style>
