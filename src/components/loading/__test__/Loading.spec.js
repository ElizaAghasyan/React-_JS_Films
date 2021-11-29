import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import Loading from '../Loading';

describe('Loading Component', () => {

    it('Loading snapshot test', () => {
        const component = renderer.create(<Provider store={store}><Loading /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
