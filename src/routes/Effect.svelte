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

	function renderedNumber(num) {
		let percentSign = '';
		if (num < 1) {
			num *= 100;
			percentSign = '%';
		}
		return sign(num) + num + percentSign;
	}

</script>

<li class="bg-indigo-900 flex justify-between items-center select-none"><!-- Effect -->
	<img src={icon} alt="">
	<h4>{renderedNumber(effectValue)}</h4>
</li>
