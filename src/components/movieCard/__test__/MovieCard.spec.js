import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import MovieCard from '../MovieCard';
import {Router} from "react-router-dom";
import { createMemoryHistory } from 'history';

describe('MovieCard Component', () => {
    it('MovieCard snapshot test', () => {
        const history = createMemoryHistory();
        const route = '/';
        history.push(route);
        const component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <MovieCard />
                </Router>
            </Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
