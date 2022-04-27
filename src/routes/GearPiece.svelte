<script>
  import Augment from './Augment.svelte';
	import { augments } from '../data/data';

	export let gear = {/* type, name, augments, icon */};

</script>

<div class="grid-flow-row text-white">
  <div class="bg-red-900 text-right p-2 flex justify-between items-center gap-4">
    <img src={gear.icon} alt="">
    <h2 class="text-xl">{gear.name}</h2>
  </div>
  <div class="grid-flow-row">
		{#each gear.augments as augment}
    <Augment augment={augment} />
		{/each}
  </div>
</div>
