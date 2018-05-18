import React from 'react';
import ReactDOM from 'react-dom';
import EuroJackpotResults from './Layout';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<EuroJackpotResults />, div);
	ReactDOM.unmountComponentAtNode(div);
});
