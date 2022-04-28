<script>
  import Augment from './Augment.svelte';
	import { augments } from '../data/data';

	export let gear = {/* type, name, augments, icon */};

	// console.log(gear);

</script>

<div class="grid grid-flow-row gap-8 text-white w-64">
  <div class="bg-red-900 text-right text-xl font-bold p-4 gap-4 flex justify-between items-center">
    <img src={gear.icon} alt="">
    <h2 class="">{gear.name}</h2>
  </div>
  <div class="grid grid-flow-row gap-4">
		<!-- {#each gear.augments as augment}
    <Augment augment={augment} />
		{/each} -->
  </div>
</div>
