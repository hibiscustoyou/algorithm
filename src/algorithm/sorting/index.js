import _ from 'lodash'

function bubbleSortingPaths(array) {
	let arr = []
	console.log(array)
	arr.push(_.concat(array))
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length-1; j++) {
			if (array[j] > array[j+1]) {
				[array[j], array[j+1]] = [array[j+1], array[j]]
				arr.push(_.concat(array))
			}
			// arr.push(_.concat(array))
		}
	}
	return arr
}

export const Sorting = (sorting, array) => {
	switch (sorting) {
		case '/sorting/bubble-sorting':
			return bubbleSortingPaths(array)
		default:
			return []
	}
}