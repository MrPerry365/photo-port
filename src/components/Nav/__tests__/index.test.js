import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

// Test for the Nav component //
describe("Nav component", () => {
  // First Test //
  it("renders", () => {
    render(<Nav />);
  });

  //   Second Test //
  it("matches snapshot", () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(<Nav />);
    // Assert the match

    expect(asFragment()).toMatchSnapshot();
  });
});

// test for the camera emoji //
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange the snapshot - declare variables
    const { getByLabelText } = render(<Nav />);
    // Assert the match
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});


const {getByLabelText} = render(<Nav />);

expect(getByLabelText('camera')).toHaveTextContent('📸');

// test for the camera emoji //
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange the snapshot - declare variables
    const { getByLabelText } = render(<Nav />);
    // Assert the match
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange the snapshot - declare variables
        const { getByTestId } = render(<Nav />);
        // Assert the match
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    });
})

const {getByTestId} = render(<Nav />);

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange the snapshot - declare variables
        const { getByTestId } = render(<Nav />);
        // Assert the match
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})