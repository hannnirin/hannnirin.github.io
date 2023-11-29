<script>
  import 'animate.css';

  import { onMount } from 'svelte';

let observer;
let elements = [];

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4,
};

const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

onMount(() => {
    observer = new IntersectionObserver(callbacks, options);
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  });
  
</script>

