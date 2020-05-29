function getObjects(obj, key, val) {
	let objects = [];
	for (const i in obj) {
		if (!obj.hasOwnProperty(i))
			continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getObjects(obj[i], key, val));
		} else
			//if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
		if (i === key && obj[i] === val || i === key && val === '') { //
			objects.push(obj);
		} else if (obj[i] === val && key === ''){
			//only add if the object is not already in the array
			if (objects.lastIndexOf(obj) === -1){
				objects.push(obj);
			}
		}
	}
	return objects;
}

function getValues(obj, key, getChildren=true) {
	let objects = [];
	for (let i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		if (getChildren) {
			if (typeof obj[i] == 'object') {
				const temp = obj[i]
				objects = objects.concat(getValues(obj[i], key));
			} else if (i === key) {
				objects.push(obj[i]);
			}
		} else {
			if (typeof obj[i] == 'object') {
				objects.push(obj[i][key]);
			}
		}
	}
	return objects;
}

function getKeys(obj, val) {
	let objects = [];
	for (let i in obj) {
		if (!obj.hasOwnProperty(i))
			continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getKeys(obj[i], val));
		} else if (obj[i] === val) {
			objects.push(i);
		}
	}
	return objects;
}

function getObjectParent(obj, key, val, parent='') {
	for (const i in obj) {
		if (!obj.hasOwnProperty(i))
			continue;
		if (getObjects(obj[i], key, val).length) {
			if (typeof obj[i] === 'object') {
				if (obj[i].key !== val && obj[i].children) {
					return getObjectParent(obj[i].children, key, val, obj[i].key);
				} else {
					if (obj[i].key === val)
						return parent
				}
			} else {
				return obj.key === val ? parent : ''
			}
		}
	}
}

export default {
	GetObjects(obj, key, val) {
		return getObjects(obj, key, val)
	},
	GetObjectParent(obj, key, val) {
		return getObjectParent(obj, key, val)
	},
	GetValues(obj, key, getChildren=true) {
		return getValues(obj, key, getChildren)
	},
	GetKeys(obj, val) {
		return getKeys(obj, val)
	}
}