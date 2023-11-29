<script>
  export let items;
  export let listClass;
  
  // title of the list item
</script>

<ul class={listClass}>
  {#each items as item}
    <!-- title -->
    <li class="port-skill--title w-fit h-fit m-0 delay-75 flex items-center rounded-full p-2 text-neongreen text-xs">{item.category}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
    </li>
    {#each item.skills as skill}
      <li class="delay-75 w-fit h-fit p-4 m-0 port-skill--content">{skill}</li>
    {/each}
  {/each}
</ul>