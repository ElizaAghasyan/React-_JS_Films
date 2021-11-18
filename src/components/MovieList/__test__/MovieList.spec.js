import MovieList from "../MovieList";
import renderer from "react-test-renderer";

describe('MovieList Component', () => {
    test('MovieList snapshot test', () => {
        const component = renderer.create(<MovieList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
