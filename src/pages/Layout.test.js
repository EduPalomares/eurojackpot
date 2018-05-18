import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

it('Layout:: renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Layout />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('render match snapshot', () => {
    const wrapper= shallow(
		<Layout />
    );
    expect(wrapper).toMatchSnapshot();
});