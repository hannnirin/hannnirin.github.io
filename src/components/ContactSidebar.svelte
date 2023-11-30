<script>
  import { bool } from '../stores/stores.js';

  export let socials;

</script>
<ul class="sm:top-96 xl:order-1 xs:order-2 port-socialmedia list-none flex sm:fixed xs:relative uppercase { $bool ? 'text-darkpurple' : 'text-white'}">
  {#each socials as social}
    {#if social.type === 'break'}
      <li class="flex items-center "><span class="break { $bool ? 'bg-purpleblue' : 'bg-lightpurple'}"></span></li>
      {:else}
      <li>
        <a href="{social.url}" target="_blank" class="relative text-xs">{social.website}</a>
      </li>
    {/if}
    
  {/each}
</ul>

<style>
  /* social media */
  .port-socialmedia {
    rotate: z 90deg;
    gap: 15px;
    right: -150px;
  }

  .port-socialmedia .break {
    width: 80px;
    height: 1px;
  }

  .port-socialmedia a:hover {
    text-decoration: dashed;
    color: var(--tertiary-color);
  }
</style>