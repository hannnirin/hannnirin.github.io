<script>
  import { bool } from '../stores/stores.js';

  export let companies;
  export let companiesClass;
</script>

<ul class={companiesClass}>
  {#each companies as company, index (index) }
    <li class="my-4 delay-75">
      {#if index === 0}
        <label for="" class="{ $bool ? 'text-purpleblue' : 'text-neongreen'} text-lg">
          {company.name}
        </label>

        {:else}
        <label for="" class="{ $bool ? 'text-darkpurple' : 'text-white'} text-lg">
          {company.name}
        </label>
      {/if}
      <p class="text-xs { $bool ? 'text-darkpurple' : 'text-white'}">{company.position};{company.duration}</p>
    </li>
  {/each}
</ul>