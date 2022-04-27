<script>
  import Augment from './Augment.svelte';
	import { augments } from '../data/data';

	export let gear = null;

</script>

<div class="grid-flow-row text-white">
  <div class="bg-red-900 text-right p-2 flex justify-between items-center gap-4">
    <img src="./src/assets/icons-effect/icon-weapon.svg" alt="">
    <h2 class="text-xl">Weapon</h2>
  </div>
  <div class="grid-flow-row">
		{#each gear.augments as augment}
    <Augment augment={augment} />
		{/each}
  </div>
</div>
