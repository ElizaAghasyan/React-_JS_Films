import Details from "../Details";
import renderer from "react-test-renderer";
import {store} from "../../../redux/store";
import {Provider} from "react-redux";
import { createMemoryHistory } from 'history';
import {Router} from "react-router-dom";

describe('Details Component', () => {

    it('Details snapshot test', () => {

        const history = createMemoryHistory();
        const route = '/:category/:id';
        history.push(route);
        const component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <Details />
                </Router>
            </Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
