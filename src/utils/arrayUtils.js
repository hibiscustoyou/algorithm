import _ from "lodash"

function setItemDefaultColor(itemVal, color='#4cc3d9') {
	return {
		value: itemVal,
		itemStyle: {
			color: color
		}
	}
}

export default {
	DeleteItem(array, delItem) {
		return _.dropWhile(array, (arr) => {
			return arr === delItem
		})
	},
	SetDefaultColor(array, color='#4cc3d9') {
		for (const i in array) {
			if (!array.hasOwnProperty(i) || typeof array[i] === 'object')
				continue;
			array[i] = setItemDefaultColor(array[i], color)
		}
		return array
	},
	ChangeItemColor (array, val, changeColor='#35ce8d') {
		const idx = _.findIndex(array, (arr) => {
			return arr.value === val
		})
		array[idx].itemStyle.color = changeColor
		return array
	}
}