<script>
  import "../app.css";
  import { bool } from '../stores/stores.js';

</script>

<div id="active-theme" class="{$bool ? 'light-theme': 'dark-theme'}">
  <div class="noise-bg fixed"></div>
  <slot />
</div>

