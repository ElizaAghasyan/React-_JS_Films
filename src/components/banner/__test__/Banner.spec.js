import renderer from 'react-test-renderer';
import Banner from "../Banner";
import { render } from "../../../test-utils";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";


describe('Banner Component', () => {

    it('If Banner component mounts', () => {
        let banner = render(<Provider store={store}><Banner /></Provider>)
        expect(banner).not.toBeNull()
    })

    it('Banner snapshot test', () => {
        const component = renderer.create(<Provider store={store}><Banner /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
