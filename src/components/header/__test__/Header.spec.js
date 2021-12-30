import Header from "../Header";
import renderer from 'react-test-renderer';
import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";


describe('Header Component', () => {
    test("Renders Header Title", () => {
        render(<Router><Header /></Router>);

        const headerTitle = screen.getByText(/Films/g);
        expect(headerTitle).toBeInTheDocument();
    });

    test("Renders Input Form", () => {
        render(<Router><Header /></Router>);

        const inputNode = screen.getByPlaceholderText('Search Films')
        expect(inputNode).toBeInTheDocument();
    });

    test('Header snapshot test', () => {
        const component = renderer.create(<Router><Header /></Router>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
