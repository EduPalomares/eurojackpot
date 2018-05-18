import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Footer />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('render match snapshot', () => {
    const wrapper = shallow(
		<Footer />
    );
    expect(wrapper).toMatchSnapshot();
});