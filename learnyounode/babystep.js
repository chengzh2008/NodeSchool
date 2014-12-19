var numString = process.argv.slice(2);
var sum = 0;
for(var i = 0; i<numString.length; i++) {
	sum += +numString[i];
}
console.log(sum);