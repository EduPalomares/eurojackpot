import React from 'react';
import ReactDOM from 'react-dom';
import EuroJackpotNav from './EuroJackpotNav';

test('render match snapshot', () => {
    const wrapper = shallow(
		<EuroJackpotNav />
    );
    expect(wrapper).toMatchSnapshot();
});