import React from 'react';
import decimalToRoman from './decimalToRoman';

it('decimalToRoman:: ', () => {
	expect(decimalToRoman(1)).toEqual("I");
	expect(decimalToRoman(99)).toEqual("XCIX");
});