<script>
  import "../app.css";
  import { bool } from '../stores/stores.js';

  import Loader from '../components/Loader.svelte';
  import Animate from '../components/Animate.svelte';
  import { onMount } from 'svelte';

  let pageLoaded = false;

  onMount(() => {
    // Simulate a delay (replace this with your actual loading logic)
    setTimeout(() => {
     pageLoaded = true;
    }, 1000); // Adjust the duration based on your actual loading time
  });
</script>

{#if !pageLoaded}
  <!-- Use the Loader component while the page is loading -->
  <Loader />
{:else}
  <!-- Your main content goes here -->
  <div id="active-theme" class="{$bool ? 'light-theme': 'dark-theme'}">
    <div class="noise-bg fixed"></div>
      <slot />
  </div>  
{/if}

<style>
  .noise-bg {
  background-image: url('/images/film-grain.png');
  background-size: 10%;
  animation: noise 0.2s steps(3) infinite;
  transform: translate3d(0, 0, 0);
  mix-blend-mode: multiply;
  left: -50vw;
  top: -50vh;
  width: 200vw;
  height: 200vh;
  z-index: -10;
  overflow: hidden;
}

.noise-bg::after {
  background-color: #130D19;
  content: '';
  height: 100%;
  width: 100%;
  opacity: 0.85;
  top: 0;
  left: 0;
  z-index: -10;
  position: absolute;
}
  .light-theme .noise-bg::after {
    background-color: #e3dfe7;
  }
</style>
