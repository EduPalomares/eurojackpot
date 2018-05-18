import React from 'react';
import formatCurrency from './formatCurrency';

it('formatCurrency:: ', () => {
	expect(formatCurrency(70214740)).toEqual("702,147.40");
	expect(formatCurrency(6390)).toEqual("63.90");
});