<script>
  import { bool } from '../stores/stores.js';

  export let headlineTitle;
  export let headlineTitleClass="";
  export let headlineTag;
  export let headlineTagClass;
  export let headlineClass="";
  export let detail="";
  export let detailClass="";
</script>

<div class="headline {headlineClass}">

  {#if headlineTagClass === 'text-orange'} 
    <label for="" class="delay-75 uppercase text-xs  { $bool ? 'text-darkpurple' : 'text-orange'}">{headlineTag}</label>

    {:else}
    <label for="" class="delay-75 uppercase { $bool ? 'text-darkpurple' : 'text-white'}">{headlineTag}</label>
  {/if}
  
  
  {#if headlineTitle}
    <h2 class="text-white text-4xl {headlineTitleClass} delay-75">{headlineTitle}</h2>
  {/if}

  {#if detail}
    <p class="delay-75 {detailClass} { $bool ? 'text-darkpurple' : 'text-white'}">{detail}</p>
  {/if}
</div>