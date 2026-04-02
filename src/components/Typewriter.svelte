<script>
  import { onMount } from 'svelte';

  export let text = '';
  export let speed = 52;     // ms between each character resolving
  export let delay = 400;    // ms before animation starts
  export let scrambleWindow = 4; // how many chars ahead scramble randomly

  const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

  function rand() {
    return POOL[Math.floor(Math.random() * POOL.length)];
  }

  let chars = [];   // array of { char, resolved }
  let done = false;

  function buildDisplay(resolved) {
    return text.split('').map((c, i) => {
      if (i < resolved) return { ch: c, resolved: true };
      // spaces resolve instantly — no scramble for whitespace
      if (c === ' ' && i < resolved + scrambleWindow) return { ch: ' ', resolved: false };
      if (i < resolved + scrambleWindow) return { ch: rand(), resolved: false };
      return { ch: '', resolved: false };
    });
  }

  onMount(() => {
    let resolved = 0;
    let resolveTimer;
    let scrambleTimer;

    // fast scramble loop — updates unresolved chars
    function startScramble() {
      scrambleTimer = setInterval(() => {
        chars = buildDisplay(resolved);
      }, 40);
    }

    // slower loop — locks in the next character
    function startResolve() {
      resolveTimer = setInterval(() => {
        resolved++;
        chars = buildDisplay(resolved);
        if (resolved >= text.length) {
          clearInterval(resolveTimer);
          clearInterval(scrambleTimer);
          // render final clean state
          chars = text.split('').map(c => ({ ch: c, resolved: true }));
          done = true;
        }
      }, speed);
    }

    const startTimeout = setTimeout(() => {
      startScramble();
      startResolve();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(resolveTimer);
      clearInterval(scrambleTimer);
    };
  });
</script>

<span class="scramble" aria-label={text}>{#each chars as c}<span class:resolved={c.resolved} class:scrambling={!c.resolved && c.ch !== ''}>{c.ch}</span>{/each}{#if !done}<span class="cursor" aria-hidden="true">_</span>{/if}</span>

<style>
  .scramble {
    display: inline;
  }

  span {
    display: inline;
  }

  .resolved {
    color: inherit;
  }

  .scrambling {
    color: var(--color-muted);
    font-weight: 400;
  }

  .cursor {
    display: inline-block;
    color: var(--color-muted);
    animation: blink 0.6s step-end infinite;
    margin-left: 1px;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
</style>
