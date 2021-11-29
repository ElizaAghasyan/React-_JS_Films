import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import MovieCard from '../MovieCard';
import {Router} from "react-router-dom";

describe('MovieCard Component', () => {

    it('MovieCard snapshot test', () => {
        const component = renderer.create(<Provider store={store}><Router><MovieCard /></Router></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
