import {create} from "react-test-renderer";
import SearchPage from "../SearchPage";
import {createMemoryHistory} from "history";
import {BrowserRouter as Router} from "react-router-dom";

describe('Search Page', () => {
    const history = createMemoryHistory()

    test('Search page snapshot test', () => {
        const component = create(
            <Router history={history}>
                <SearchPage />
            </Router>

        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
