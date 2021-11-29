import MovieList from "../MovieList";
import renderer from "react-test-renderer";

describe('movieList Component', () => {
    test('movieList snapshot test', () => {
        const component = renderer.create(<MovieList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
