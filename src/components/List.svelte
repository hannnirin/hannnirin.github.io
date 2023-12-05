<script>
  import { bool } from '../stores/stores.js';
  export let items;
  export let listClass;

  export let contentType;
  
  // title of the list item
</script>

<ul class={listClass}>

  {#if contentType === 'skills'}
    {#each items as item}
      <!-- title -->
      <li class="port-skill--title w-fit h-fit m-0 delay-75 flex items-center rounded-full xs:p-2 text-neongreen text-xs">{item.category}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
      </li>
      {#each item.skills as skill}
        <li class="delay-75 w-fit h-fit xs:p-2 md:p-4 m-0 port-skill--content">{skill}</li>
      {/each}
    {/each}
    
  {:else}
    {#each items as item, index (index) }
      <li class="xs:my-4 xl:my-6 delay-75">
        {#if index === 0}
          <label for="" class="{ $bool ? 'text-purpleblue' : 'text-neongreen'} xl:text-3xl xs:text-2xl">
            {item.name}
          </label>

          {:else}
          <label for="" class="{ $bool ? 'text-darkpurple' : 'text-white'} xl:text-3xl xs:text-2xl">
            {item.name}
          </label>
        {/if}
        <p class="xs:text-sm md:text-lg { $bool ? 'text-darkpurple' : 'text-white'}">{item.position};{item.duration}</p>
      </li>
    {/each}
  {/if}


</ul>

<style>
  /* skills */
  .port-skill--title {
    border: 1px solid #efff67;
  }

  .port-skill--content {
    border: 1px solid var(--secondary-color);
  }

  
</style>