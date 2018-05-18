import React from 'react';
import ReactDOM from 'react-dom';
import EuroJackpotFaq from './EuroJackpotFaq';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<EuroJackpotFaq />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('render match snapshot', () => {
    const wrapper = shallow(
		<EuroJackpotFaq />
    );
    expect(wrapper).toMatchSnapshot();
});