<script>
  import "../app.css";
  import { bool } from '../stores/stores.js';

  import Loader from '../components/Loader.svelte';
  import { onMount } from 'svelte';

  let pageLoaded = false;

  onMount(() => {
    setTimeout(() => {
    pageLoaded = true;
     console.log('pageload');
    }, 2000); 
  });
</script>
<div id="active-theme" class="{$bool ? 'light-theme': 'dark-theme'}">
  <div class="noise-bg fixed"></div>
{#if !pageLoaded}
  <Loader />
{:else}
  
      <slot />
  
{/if}
</div>  
<style>
  .noise-bg {
  background-image: url('/images/film-grain.png');
  background-size: 10%;
  
  mix-blend-mode: multiply;
  left: -50vw;
  top: -50vh;
  width: 220vw;
  height: 220vh;
  z-index: -10;
  overflow: hidden;
}

@media screen and (min-width: 320px) {
  .noise-bg {
    width: 200vw;
  height: 200vh;
  }
}

@media screen and (min-width: 1024px) {
  .noise-bg {
    transform: translate3d(0, 0, 0);
    animation: noise 0.2s steps(3) infinite;
  }
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
