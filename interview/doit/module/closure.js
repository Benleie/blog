var moduleA = (function(){
	var flag = true
	let count = 22
	function sum(a, b) {
		return a + b
	}
	function minus() {count--}
	return {
		flag,
		sum,
		add: function() {count++},
		minus,
		count
	}
})()
exports.moduleA = moduleA
