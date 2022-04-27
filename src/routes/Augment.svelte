<script>
  import Effect from './Effect.svelte';

  import RightChevron from './icons/RightChevron.svelte';
  import DownChevron from './icons/DownChevron.svelte';

  let open = true;

  function toggleDisplay() {
    open = !open;
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
	console.log(renderEffects);


</script>

<li><!-- Augment Header -->
  <div on:click={toggleDisplay} class="bg-cyan-900 flex justify-between items-center gap-4">
    <h3>{augment.name}</h3>
    <h3>+{augment.battlePower}</h3>

    {#if open}
    <DownChevron />
    {:else}
    <RightChevron />
    {/if}
  </div>
  {#if open}
		<ul><!-- Effects -->
			{#each renderEffects as stat}
			<Effect effectName={stat.name} effectValue={stat.value}/>
			{/each}
		</ul>
  {/if}
</li>
