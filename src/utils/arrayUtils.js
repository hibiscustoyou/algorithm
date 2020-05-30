function deleteItem(array, delItem) {
	return array.splice(array.findIndex(item => item === delItem), array.findIndex(item => item === delItem));
}

export default {
	DeleteItem(array, delItem) {
		return deleteItem(array, delItem)
	}
}