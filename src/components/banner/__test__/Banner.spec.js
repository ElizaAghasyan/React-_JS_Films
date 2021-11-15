import renderer from 'react-test-renderer';
import Banner from "../Banner";
import {render} from "../../../test-utils";
import {Provider} from "react-redux";
import {store} from "../../../redux/store";

describe('Banner Component', () => {
    test('If Banner component mounts', () => {
       let banner =  render(<Banner />)
        expect(banner).not.toBeNull()
    })

    test('Banner snapshot test', () => {
        const component = renderer.create(<Provider store={store}><Banner/></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
