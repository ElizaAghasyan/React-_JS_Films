import renderer from "react-test-renderer";
import SearchPage from "../SearchPage";

describe('Search Page', () => {
    test('Search page snapshot test', () => {
        const component = renderer.create(<SearchPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
