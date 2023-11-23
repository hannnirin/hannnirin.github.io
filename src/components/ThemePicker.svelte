<script>
  import { bool } from '../stores/stores.js';

  const currentTime = new Date();

  // Get the local time in 24-hour format
  let localTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

   // Determine whether it's morning or evening
  if (currentTime.getHours() >= 6 && currentTime.getHours() < 12) {
    $bool = true;
  } else if (currentTime.getHours() >= 18 || currentTime.getHours() < 6) {
    $bool = false;
  }

  function switchTheme(e){
    const projectHTML = document.getElementById('port-superwrapper');

    $bool = e.target.checked;
    console.log('Checkbox state changed:', $bool);

    if($bool === true) {
      projectHTML.classList.add('light-theme');
    }else {
      projectHTML.classList.remove('light-theme');
    }

  }

</script>

<div class="absolute switch-theme-wrapper">
  <label class="switch-theme relative">

    <input type="checkbox" name="" id="" value="light" on:change={switchTheme} bind:checked={$bool} class="input w-0 h-0 o-0">
  
    <span class="slider absolute top-0 right-0 left-0 bottom-0"></span>
  </label>
</div>

