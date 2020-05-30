function isMatch(text, reg=/^[0-9]+$/) {
	return RegExp(reg).test(text)
}

export default {
	IsMatch(text, reg=/^[0-9]+$/) {
		return isMatch(text, reg)
	}
}