// complete the given function

function palindrome(str){
	str=str.split(" ").join("");
	let i=0;
	let j=str.length-1;
	let isPal=true;
	while(i<j){
		if(str[i]!==str[j]){
			isPal=false;
			break;
		}
		i++;
		j--;
	}
	return isPal;
}
module.exports = palindrome
