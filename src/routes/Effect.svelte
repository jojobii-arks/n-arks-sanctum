<script>
	export let icon = '';

	export let value = 1;
	function valueSign() {
		if (value > 0) {
			return '+';
		} else {
			return '';
		}
	};
</script>

<li class="bg-indigo-900 flex justify-between items-center"><!-- Effect -->
				<img src={icon} alt="">
				<h4>{valueSign()}{value}</h4>
			</li>
