<script>
  import Effect from './Effect.svelte';

  import RightChevron from './icons/RightChevron.svelte';
  import DownChevron from './icons/DownChevron.svelte';

	let hidden = 'hidden';

  function toggleDisplay() {
    if (hidden === 'hidden') {
			hidden = ''
		} else {
			hidden = 'hidden'
		}
  }

	import { augments } from '../data/data';

	export let augment = null;

	let effects = augment.effects;
	let renderEffects = [];
	for (let fx in effects) {
		renderEffects.push({
			name: fx,
			value: effects[fx]
		});
	}

</script>

<li><!-- Augment Header -->
  <div on:click={toggleDisplay} class="bg-cyan-900 flex justify-between items-center gap-4">
    <h3>{augment.name}</h3>
    <h3>+{augment.battlePower}</h3>

    {#if hidden}
    <RightChevron />
    {:else}
    <DownChevron />
    {/if}
  </div>
	<ul class="{hidden}"><!-- Effects -->
		{#each renderEffects as stat}
		<Effect effectName={stat.name} effectValue={stat.value}/>
		{/each}
	</ul>
</li>
