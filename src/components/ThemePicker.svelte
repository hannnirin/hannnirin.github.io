<script>
  import { removeAllClasses } from '../helpers/helpers.js';
  import { bool } from '../stores/stores.js';
  import { onMount } from 'svelte';

  onMount(() => {
    // switch theme from the initial load
    defaultTheme();
  });

  function defaultTheme() {
    const currentTime = new Date();

    // Get the local time in 24-hour format
    let localTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    // Determine whether it's morning or evening
    if (currentTime.getHours() >= 6 && currentTime.getHours() < 12) {
      bool.set(true);
      console.log(bool, 'if def');
    } else if (currentTime.getHours() >= 18 || currentTime.getHours() < 6) {
      bool.set(false);
      console.log(bool, 'if def false');
    }

    //switchTheme();
  }

  function switchTheme(e){
    const projectHTML = document.getElementById("active-theme");

    // removing existing classes
    removeAllClasses(projectHTML);

    if($bool) {
      bool.set(true);
      console.log(bool.get(), 'light');

    }else {
      
      console.log(bool.get(), 'dark');

      bool.set(false);
    }

  }



</script>

<div class="absolute switch-theme-wrapper">
  <label class="switch-theme relative">

    <input type="checkbox" name="" id="" value="light" on:change={switchTheme} bind:checked={$bool} class="input w-0 h-0 o-0">
  
    <span class="slider absolute top-0 right-0 left-0 bottom-0"></span>
  </label>
</div>

