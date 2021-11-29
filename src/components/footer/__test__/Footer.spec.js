import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import Footer from "../Footer";

describe('Footer Component', () => {

    it('Footer snapshot test', () => {
        const component = renderer.create(<Provider store={store}><Footer /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
