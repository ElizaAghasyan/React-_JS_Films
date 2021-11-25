import TrailerModal from "../TrailerModal";
import renderer from "react-test-renderer";
import {store} from "../../../redux/store";
import {Provider} from "react-redux";

describe('TrailerModal Component', () => {

    it('TrailerModal snapshot test', () => {
        const component = renderer.create(<Provider store={store}><TrailerModal/></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
