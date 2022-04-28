<script>
  import Header from './Header.svelte';
  import GearPiece from './GearPiece.svelte';
	import Augment from './Augment.svelte';
	import { augments } from '../data/data';
	import { writable } from 'svelte/store';
	import { gear } from './UserData'

	console.log(gear);

	// $gear.set({...$gear, name: 'epic'});

	// console.log($gear);

</script>

<!-- <p>{$gear.name}</p> -->

<main class="bg-pink-50 min-h-screen h-full">

  <Header />

  <div class="grid grid-flow-row sm:grid-flow-col justify-center gap-4 py-8 px-4">
    <!-- <GearPiece gear={$gear} /> -->
  </div>

	<div class="grid grid-flow-row justify-center">
		<div>
			<h2>All Augments</h2>
		</div>
		<div class="grid grid-flow-row gap-3 w-64">
			{#each $augments.data.slice(0, 20) as augment}
				<Augment {augment} hidden={true} />
				<button>Add</button>
			{/each}
		</div>
	</div>

</main>
