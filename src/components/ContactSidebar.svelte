<script>
  import { bool } from '../stores/stores.js';

  export let socials;

</script>
<ul class="xs:top-96 lg:top-1/2 xl:order-1 xs:order-2 port-socialmedia list-none flex xs:relative xs:flex md:fixed uppercase { $bool ? 'text-darkpurple' : 'text-white'}">
  {#each socials as social}
    {#if social.type === 'break'}
      <li class="flex items-center list-break"><span class="break { $bool ? 'bg-purpleblue' : 'bg-lightpurple'}"></span></li>
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
  }

  @media screen and (min-width: 320px) {
    .port-socialmedia {
      right: 0;
      rotate: none;
      display: none;
    }

    .list-break {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .port-socialmedia {
      right: -90px;
      rotate: z 90deg;
      gap: 15px;
      display: flex;
    }

    .list-break {
      display: inline;
    }
  }

  @media screen and (min-width: 1024px) {
    .port-socialmedia {
      right: -105px;
    }
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