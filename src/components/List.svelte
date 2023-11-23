<script>
  export let items;
  export let listClass;
</script>

<ul class={listClass}>
  {#each items as item  }
    <li class="delay-75 w-fit h-fit p-4 m-0">{item.text}</li>
  {/each}
</ul>