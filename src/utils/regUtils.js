export default {
	IsMatch(text, reg=/^-?\d+\.?\d*$/) {
		return reg.test(text)
	}
}