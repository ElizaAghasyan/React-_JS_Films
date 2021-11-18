import Home from "../Home";
import renderer from "react-test-renderer";

describe('Home Component', () => {
    test('Home snapshot test', () => {
        const component = renderer.create(<Home />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
