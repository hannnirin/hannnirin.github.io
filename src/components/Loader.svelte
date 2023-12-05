<!-- Loader.svelte -->

<script>
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    setTimeout(() => {
      isVisible = true;
      console.log('isvisible');
    }, 5000); 
  });
</script>

{#if !isVisible}
  <!-- Display loader while the page is loading -->
  <div class="loading flex flex-col">
    <svg viewBox="0 0 100 100" width="80" height="80" class="rotating-svg">
      <defs>
        <path id="circle"
          d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"/>
      </defs>
      <text font-size="12" fill="#efff67">
        <textPath xlink:href="#circle">
          COOKING UP SOME MAGIC.
        </textPath>
      </text>
  </div>
{/if}

<style>
  /* Add your loader styles here */
  svg {
    fill: currentColor;
    height: auto;
    max-width: 66vmin;
    transform-origin: center;
    width: 66%;
    
  }

  .loading {
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #130D19;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .rotating-svg {
    animation: rotate 5s linear infinite;
  }
      
  
</style>
