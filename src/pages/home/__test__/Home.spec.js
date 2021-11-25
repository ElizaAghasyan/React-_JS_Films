import Home from "../Home";
import renderer from "react-test-renderer";
import {store} from "../../../redux/store";
import {Provider} from "react-redux";

describe('Home Component', () => {

    it('Home snapshot test', () => {
        const component = renderer.create(<Provider store={store}><Home /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
