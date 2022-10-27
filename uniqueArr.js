//отбор уникальных записей массива
function unique(array) {
	arr = array.toArray();
	var i = arr.length;
	arr.sort();
	while (i--) {
		if(i > 0) {
			if (arr[i] == arr[Number(i-1)]) {
				arr.splice(i, 1);
			}
		}
	}
	return arr;
}