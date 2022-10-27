//отбор уникальных записей массива
function unique(array) {
	arr = array.toArray();
	var i = arr.length;
	if (_debug) print("arr.length: "+arr.length);
	arr.sort();
	while (i--) {
		if(i > 0) {
			if (_debug) print("i: "+i);
			if (_debug) print("arr[i]: "+arr[i]);
			if (_debug) print("arr[i-1]: "+arr[Number(i-1)]);
			if (arr[i] == arr[Number(i-1)]) {
				arr.splice(i, 1);
			}
		}
	}
	if (_debug) print("arr: "+arr);
	return arr;
}