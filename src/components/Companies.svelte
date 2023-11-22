<script>
  export let companies;
  export let companiesClass;
</script>

<ul class={companiesClass}>
  {#each companies as company }
    <li class="my-4">
      <label for="" class="text-lightpurple text-lg">
        {company.name}
      </label>
      <p class="text-xs">{company.position};{company.duration}</p>
    </li>
  {/each}
</ul>