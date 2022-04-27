<script>
	import { augments } from '../data/data'

	export let effectName = null;
	export let effectValue = null;
	let icon = $augments.getEffectIconPath(effectName);

	function sign(num) {
		let signOfNum = Math.sign(num);
		switch (signOfNum) {
			case 1: return '+';
			case 0: return;
			case -1: return '-' ;
		}
	};

</script>

<li class="bg-indigo-900 flex justify-between items-center"><!-- Effect -->
				<img src={icon} alt="">
				<h4>{sign(effectValue)}{effectValue}</h4>
			</li>
