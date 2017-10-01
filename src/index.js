module.exports = function multiply(a, b) {
	a = a.split('').reverse();
	b = b.split('').reverse();
	var arr = [],
		a_length = a.length,
		b_length = b.length;

	for (var i = 0; i < a_length; i++) {
		for (var j = 0; j < b.length; j++) {
			if (!arr[i + j]) {
				arr[i + j] = 0;
			}
			arr[i + j] += a[i] * b[j]
		}
	}

	var arr_length = arr.length;
	for (var i = 0; i < arr_length; i++) {
		if (arr[i] > 9) {
			if (!arr[i + 1]) {
				arr[i + 1] = 0;
			}
			arr[i + 1] += Math.floor(arr[i] / 10);
			arr[i] = arr[i] % 10;
		}
	}
	return arr.reverse().join('');
}