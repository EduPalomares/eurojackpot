import React from 'react';
import ReactDOM from 'react-dom';
import EuroJackpot from './Layout';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<EuroJackpot />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('render match snapshot', () => {
    const wrapper = shallow(
		<EuroJackpot />
    );
    expect(wrapper).toMatchSnapshot();
});