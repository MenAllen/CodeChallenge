
function areDeeplyEqual(o1, o2) {

	if (o1 === o2) {
		return true
	}

	if ( typeof o1 !== 'object' 
	|| typeof o2 !== 'object'
	|| Array.isArray(o1) !== Array.isArray(o2)
	|| Object.keys[o1].length !== Object.keys[o2].length ) {
		return false;
	}

	for (const key of Object.keys(o1)) {
		if (!areDeeplyEqual(o1[key], o2[key])) {
			return false; 
		}
	}

	return true;
};