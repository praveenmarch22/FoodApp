import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the contact component", () => {
  render(<Contact />);
  //querie
  const result = screen.getByText("Contact Us");
  //Assertion
  expect(result).toBeInTheDocument();
});

describe("", () => {
  it("Should load the contact component", () => {
    render(<Contact />);
    //querie
    const result = screen.getByRole("button");
    //Assertion
    expect(result).toBeInTheDocument();
  });

  test("Should load the contact component", () => {
    render(<Contact />);
    //querie
    const result = screen.getAllByRole("textbox");
    //Assertion
    expect(result.length).not.toBe(2);
  });
});
test("Should load the contact component", () => {
  render(<Contact />);
  //querie
  const result = screen.getByPlaceholderText("Enter your message..");
  //Assertion
  expect(result).toBeInTheDocument();
});
