export default function formatCurrency(num) {
	let res;
	res = new Intl.NumberFormat('en-GB', {  }).format(num/100 >> 0)+'.'+num.toString().substr(-2);
	return res;
}