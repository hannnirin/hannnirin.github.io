<script>
   import { bool } from '../stores/stores.js';

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
  <label class="switch-theme">
    <input type="checkbox" name="" id="" value="light" on:change={switchTheme} bind:checked={$bool} class="input">
  
    <span class="slider"></span>
  </label>
</div>

