import EuroJackpotResultsContent from './EuroJackpotResultsContent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe("EuroJackpotResultsContent", () => {




  
	it("always renders a div", () => {
		const divs = EuroJackpotResultsContent().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});


});