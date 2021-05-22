function pal(str) {
	const arr = str.split('').sort((a, b) => (a > b ? 1 : -1))

	for (let i = 0; i < (arr.length - 1); i++) {
		if (arr[i] === undefined) {
			continue
		}
		
		if (arr[i] === arr[i + 1]) {
			delete arr[i]
			delete arr[i + 1]
		}
	}

	const filteredArray = arr.filter(el => el !== undefined)

	if (arr.length % 2 === 0) {
		if (filteredArray.length === 0) {
			return true
		}
	} else {
		if (filteredArray.length === 1) {
			return true
		}
	}

	return false
}

console.log(pal('aacbb'))
