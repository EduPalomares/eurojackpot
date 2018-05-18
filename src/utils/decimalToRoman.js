export default function decimalToRoman(num) { 
    let romanNum = "";
    const strNum = String(num);
    const romans = {
        1: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // ones
        2: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // tens
        3: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // hundreds
        4: ["M", "MM", "MMM"] // thousands
    };

    for (let i = 1; i <= strNum.length; i++)
        if (Number(strNum[strNum.length - i]) !== 0)
            romanNum = romans[i][strNum[strNum.length - i] - 1] + romanNum;

    return romanNum;
}