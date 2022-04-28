<script>
	import { augments } from '../data/data'

	export let name;
	export let value;
	let icon = $augments.getEffectIconPath(name);

</script>

<li class="bg-yellow-800 even:bg-amber-800 flex justify-between items-center select-none px-2 py-0.5"><!-- Effect -->
	<img src={icon} alt="" class="w-5">
	<h4>{$augments.effectValueFormat(name, value)}</h4>
</li>
