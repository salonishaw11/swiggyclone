import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

describe("To test the Contact Us Page", () => {
  it("should check if component loads or not", () => {
    render(<ContactUs />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  it("should check component loads or not", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
