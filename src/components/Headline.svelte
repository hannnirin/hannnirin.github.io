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

  {#if headlineTagClass === 'text-neongreen'} 
    <label for="" class="delay-75 uppercase text-xs  { $bool ? 'text-darkpurple' : 'text-neongreen'}">{headlineTag}</label>

    {:else}
    <label for="" class="delay-75 text-xs uppercase { $bool ? 'text-darkpurple' : 'text-white'}">{headlineTag}</label>
  {/if}
  
  
  {#if headlineTitle}
    <h2 class="text-4xl {headlineTitleClass} { $bool ? 'text-darkpurple' : 'text-white'} delay-75">{headlineTitle}</h2>
  {/if}

  {#if detail}
    <p class="delay-75 {detailClass} { $bool ? 'text-darkpurple' : 'text-white'}">{detail}</p>
  {/if}
</div>