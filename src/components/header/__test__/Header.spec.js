import Header from "../Header";
import renderer from 'react-test-renderer';
import {render, screen} from "@testing-library/react";


describe('Header Component', () => {
    test("Renders Header Title", () => {
        render(<Header />);

        const headerTitle = screen.getByText(/Films/g);
        expect(headerTitle).toBeInTheDocument();
    });

    test("Renders Input Form", () => {
        render(<Header />);

        const inputNode = screen.getByPlaceholderText('Search Films')
        expect(inputNode).toBeInTheDocument();
    });

    test('Header snapshot test', () => {
        const component = renderer.create(<Header />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
