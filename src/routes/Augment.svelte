<script>
  import RightChevron from './icons/RightChevron.svelte';
  import DownChevron from './icons/DownChevron.svelte';

  let open = false;

  function toggleDisplay() {
    open = !open;
  }

</script>

<li>
  <div on:click={toggleDisplay} class="bg-cyan-900 flex justify-between items-center gap-4">
    <h3>Augment Name</h3>
    <h3>+BP</h3>

    {#if open}
    <DownChevron />
    {:else}
    <RightChevron />
    {/if}

  </div>
</li>
