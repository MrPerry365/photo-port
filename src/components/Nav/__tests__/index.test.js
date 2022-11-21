import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

// Test for the Nav component //
describe("Nav component", () => {
  // First Test //
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);
  });

  //   Second Test //
  it("matches snapshot", () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);
    // Assert the match

    expect(asFragment()).toMatchSnapshot();
  });
});

// test for the camera emoji //
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange the snapshot - declare variables
    const { getByLabelText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);
    // Assert the match
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});


const {getByLabelText} = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);

expect(getByLabelText('camera')).toHaveTextContent('📸');

// test for the camera emoji //
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange the snapshot - declare variables
    const { getByLabelText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);
    // Assert the match
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange the snapshot - declare variables
        const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);
        // Assert the match
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    });
})

const {getByTestId} = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange the snapshot - declare variables
        const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);
        // Assert the match
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})