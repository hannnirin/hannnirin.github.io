<script>
  export let headlineTitle;
  export let headlineTitleClass="";
  export let headlineTag;
  export let headlineTagClass;

  export let headlineClass="";
  

  export let detail="";
  export let detailClass="";
</script>

<div class="headline {headlineClass}">

  <label for="" class="uppercase text-xs {headlineTagClass}">{headlineTag}</label>
  
  {#if headlineTitle}
    <h2 class="text-white text-4xl {headlineTitleClass}">{headlineTitle}</h2>
  {/if}

  {#if detail}
    <p class="{detailClass}">{detail}</p>
  {/if}
</div>