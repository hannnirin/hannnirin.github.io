<script>
  import { onMount } from 'svelte';

  const entries = [
    { delay: 0,    text: '> npm install irene-portfolio',  type: 'cmd'  },
    { delay: 400,  text: 'Resolving packages...',          type: 'info' },
    { delay: 750,  text: '+ svelte@4.2.19',                type: 'pkg'  },
    { delay: 950,  text: '+ tailwindcss@3.3.5',            type: 'pkg'  },
    { delay: 1150, text: '+ vite@4.5.0',                   type: 'pkg'  },
    { delay: 1350, text: '+ gsap@3.12.2',                  type: 'pkg'  },
    { delay: 1550, text: 'added 153 packages in 2.4s',     type: 'info' },
    { delay: 1900, text: '> building portfolio...',        type: 'cmd'  },
    { delay: 2250, text: '✓ compiled successfully',        type: 'ok'   },
    { delay: 2600, text: '✓ ready.',                       type: 'done' },
  ];

  let count = 0;
  let fading = false;

  onMount(() => {
    entries.forEach((entry, i) => {
      setTimeout(() => { count = i + 1; }, entry.delay);
    });
    // Start fading out just before layout unmounts this component
    setTimeout(() => { fading = true; }, 2900);
  });
</script>

<div class="loader" class:fading>
  <div class="terminal">
    {#each entries.slice(0, count) as entry}
      <div class="line {entry.type}">{entry.text}</div>
    {/each}
    {#if count > 0 && count < entries.length}
      <span class="cursor">▊</span>
    {/if}
  </div>
</div>

<style>
  .loader {
    position: fixed;
    inset: 0;
    background: #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 3rem clamp(1.5rem, 6vw, 5rem);
    z-index: 100;
    transition: opacity 0.35s ease;
  }

  .loader.fading {
    opacity: 0;
  }

  .terminal {
    font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
    font-size: clamp(0.75rem, 1.5vw, 0.9rem);
    line-height: 2;
  }

  .line {
    animation: appear 0.12s ease forwards;
  }

  @keyframes appear {
    from { opacity: 0; transform: translateX(-4px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .line.cmd  { color: #FFFFFF; }
  .line.info { color: #555555; }
  .line.pkg  { color: #39FF14; }
  .line.ok   { color: #39FF14; }
  .line.done { color: #FFFFFF; font-weight: 600; }

  .cursor {
    color: #39FF14;
    display: inline-block;
    animation: blink 0.75s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
</style>
