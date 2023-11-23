<script>
  import { bool } from '../stores/stores.js';

  export let socials;

</script>
<ul class="port-socialmedia list-none flex fixed uppercase { $bool ? 'text-darkpurple' : 'text-white'}">
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