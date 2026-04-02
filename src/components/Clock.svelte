<script>
  import { onMount, onDestroy } from 'svelte';

  let time = '';
  let interval;

  function brisbaneTime() {
    return new Date().toLocaleTimeString('en-AU', {
      timeZone: 'Australia/Brisbane',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  onMount(() => {
    time = brisbaneTime();
    interval = setInterval(() => { time = brisbaneTime(); }, 1000);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div class="clock" aria-label="Current time in Brisbane">
  <span class="clock-label">BNE</span>
  <span class="clock-time">{time}</span>
</div>

<style>
  .clock {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    font-variant-numeric: tabular-nums;
    color: var(--color-muted);
    user-select: none;
  }

  .clock-label {
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0.6;
  }

  .clock-time {
    font-weight: 400;
  }
</style>
