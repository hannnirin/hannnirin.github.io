<script>
  export let items;
  export let listClass;
</script>

<ul class={listClass}>
  {#each items as item (item.id) }
    <li>{item.text}</li>
  {/each}
</ul>