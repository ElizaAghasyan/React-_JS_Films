import Header from "../Header";
import {render, screen} from "@testing-library/react";


describe('Header Component', () => {
    test("Renders Header Title", () => {
        render(<Header />);

        const headerTitle = screen.getByText("Films");
        expect(headerTitle).toBeInTheDocument();
    });

    test("Renders Input Form", () => {
        render(<Header />);

        const inputNode = screen.getByPlaceholderText('Search Films')
        expect(inputNode).toBeInTheDocument();
    });
});
