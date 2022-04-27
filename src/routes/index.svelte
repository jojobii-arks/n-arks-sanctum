<script>
  import Header from './Header.svelte';
  import GearPiece from './GearPiece.svelte';
	import { augments } from '../data/data'

	class GearHandler {
		constructor(type, name) {
			this.type = type;
			this.name = name;
			this.augments = [];
		}
	}

	let userGear = [
		new GearHandler('unit', 'Unit Name')
	]

	userGear[0].augments.push($augments.getById(19))
	userGear[0].augments.push($augments.getById(57))
	userGear[0].augments.push($augments.getById(98))
	userGear[0].augments.push($augments.getById(163))

</script>

<main class="bg-pink-50 min-h-screen h-full">

  <Header />

  <div class="grid grid-flow-row sm:grid-flow-col justify-center gap-4 py-8 px-4">
		{#each userGear as piece}
    <GearPiece gear={piece} />
		{/each}
  </div>


</main>
