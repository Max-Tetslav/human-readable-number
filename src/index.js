module.exports = function toReadable (number) {
  const numList = {
		0 : 'zero',
		1 : 'one',
		2 : 'two',
		3 : 'three',
		4 : 'four',
		5 : 'five',
		6 : 'six',
		7 : 'seven',
		8 : 'eight',
		9 : 'nine',
		10 : 'ten',
		11 : 'eleven',
		12 : 'twelve',
		13 : 'thirteen',
		14 : 'fourteen',
		15 : 'fifteen',
		16 : 'sixteen',
		17 : 'seventeen',
		18 : 'eighteen',
		19 : 'nineteen',
		20 : 'twenty',
		30 : 'thirty',
		40 : 'forty',
		50 : 'fifty',
		60 : 'sixty',
		70 : 'seventy',
		80 : 'eighty',
		90 : 'ninety',
		100 : 'one hundred',
		200 : 'two hundred',
		300 : 'three hundred',
		400 : 'four hundred',
		500 : 'five hundred',
		600 : 'six hundred',
		700 : 'seven hundred',
		800 : 'eight hundred',
		900 : 'nine hundred'
	};

	const equal = numList.hasOwnProperty(number) ? numList[number] : 0;
	const lessHundred = `${numList[Math.floor(number / 10) * 10]} ${numList[Number(String(number).charAt(1))]}`;
	const moreHundred = `${numList[Math.floor(number / 100)] + ' hundred'} ${numList.hasOwnProperty( Number( String(number).slice(1)) ) ? numList[Number( String(number).slice(1))] : numList[Math.floor( Number( String(number).slice(1) ) / 10 ) * 10] + " " +  numList[Number( String(number).charAt(2) )]}`;

	if( numList.hasOwnProperty(number) ) {
		return equal;
	}
	if(number < 100) {
		return lessHundred;
	}
	if(number > 100){
		return moreHundred;
	}
	
}