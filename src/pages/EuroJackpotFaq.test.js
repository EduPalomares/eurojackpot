import React from 'react';
import ReactDOM from 'react-dom';
import EuroJackpotFaq from './Layout';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<EuroJackpotFaq />, div);
	ReactDOM.unmountComponentAtNode(div);
});
