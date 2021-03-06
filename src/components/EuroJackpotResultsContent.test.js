import React from 'react';
import { shallow, mount, render } from 'enzyme';
	
import EuroJackpotResultsContent from './EuroJackpotResultsContent';

	
describe("EuroJackpotResultsContent", () => {
	
	const props = {
		data : {"nr":321,"currency":"EUR","date":{"full":"Die Lottozahlen vom Freitag, den 11.05.2018","day":11,"month":5,"year":2018,"hour":21,"minute":0,"dayOfWeek":"Freitag"},"closingDate":"11.05.2018, 19:00","lateClosingDate":"11.05.2018, 20:15","drawingDate":"11.05.2018, 21:00","numbers":[3,14,17,37,39],"euroNumbers":[5,10],"jackpot":"65","marketingJackpot":"65","specialMarketingJackpot":"65","climbedSince":7,"Winners":905671,"odds":{"rank0":{"winners":0,"specialPrize":0,"prize":0},"rank1":{"winners":0,"specialPrize":0,"prize":6500000000},"rank2":{"winners":3,"specialPrize":0,"prize":70214740},"rank3":{"winners":14,"specialPrize":0,"prize":5310350},"rank8":{"winners":31008,"specialPrize":0,"prize":2470},"rank9":{"winners":42287,"specialPrize":0,"prize":1750},"rank10":{"winners":88705,"specialPrize":0,"prize":1200},"rank4":{"winners":57,"specialPrize":0,"prize":434760},"rank5":{"winners":1060,"specialPrize":0,"prize":21040},"rank6":{"winners":2235,"specialPrize":0,"prize":7760},"rank11":{"winners":161111,"specialPrize":0,"prize":1190},"rank7":{"winners":2326,"specialPrize":0,"prize":6390},"rank12":{"winners":576865,"specialPrize":0,"prize":820}}},
		updatedata: () => {}
	};

	const wrapper = shallow(<EuroJackpotResultsContent {...props} />);
	
	it("renders custom structure", () => {
		expect(wrapper.find('.results-info').length).toBe(1);
		expect(wrapper.find('.results-table').length).toBe(1);
		expect(wrapper.find('.top').length).toBe(1);
		expect(wrapper.find('.selects').length).toBe(1);
		expect(wrapper.find('.selects').children().length).toBe(2);
		expect(wrapper.find('tr').length).toBe(13);
		expect(wrapper.find('td').length).toBe(24);
		expect(wrapper.find('i').length).toBe(53);
	});
	
});
 