<script>
  import Effect from './Effect.svelte';

  import RightChevron from './icons/RightChevron.svelte';
  import DownChevron from './icons/DownChevron.svelte';
	import UpChevron from './icons/UpChevron.svelte';

	export let hidden = true;

  function toggleDisplay() {
		hidden = !hidden
  }

	import { augments } from '../data/data';

	export let augment = null;

	let effects = augment.effects;
	const renderEffects = [];
	for (let fx in effects) {
		renderEffects.push({
			name: fx,
			value: effects[fx]
		});
	}

</script>

<div on:click={toggleDisplay} class="hover:cursor-pointer hover:brightness-105 text-white max-w-xs h-fit">
  <div class="bg-cyan-900 select-none flex justify-between items-center px-2">
    <h3>{augment.name}</h3>
    <h3>
			{#if augment.battlePower}
			+{augment.battlePower}<sub>BP</sub>
			{/if}
		</h3>
		<!--

		 -->
  </div><!-- Augment Header -->
	<ul class:hidden class="" ><!-- Effects -->
		{#each renderEffects as stat}
			<Effect {...stat}/>
		{/each}
	</ul>
	<div class="bg-cyan-900 hover:cursor-pointer flex justify-center items-center h-4">
    {#if hidden}
    <DownChevron />
    {:else}
    <UpChevron />
    {/if}
	</div>
</div>
