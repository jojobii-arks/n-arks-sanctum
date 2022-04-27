<script>
  import Effect from './Effect.svelte';

  import RightChevron from './icons/RightChevron.svelte';
  import DownChevron from './icons/DownChevron.svelte';

  let open = true;

  function toggleDisplay() {
    open = !open;
  }

	import { augments } from '../data/data';
	let example = $augments.getById(2);
	console.log($augments)

</script>

<li><!-- Augment Header -->
  <div on:click={toggleDisplay} class="bg-cyan-900 flex justify-between items-center gap-4">
    <h3>Augment Name</h3>
    <h3>+BP</h3>

    {#if open}
    <DownChevron />
    {:else}
    <RightChevron />
    {/if}
  </div>
  {#if open}
		<ul><!-- Effects -->
			<Effect />
		</ul>
  {/if}
</li>
