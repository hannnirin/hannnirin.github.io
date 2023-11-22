<script>
  export let socials;

</script>
<ul class="port-socialmedia flex fixed text-white uppercase">
  {#each socials as social}
    {#if social.type === 'break'}
      <li class="flex items-center "><span class="break bg-lightpurple"></span></li>
      {:else}
      <li>
        <a href="{social.url}" target="_blank">{social.website}</a>
      </li>
    {/if}
    
  {/each}
  
</ul>