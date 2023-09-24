import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./index";

describe("Header component behavior", () => {
  it("should render with full height initially", () => {
    render(<Header />);
    const headerContainer = screen.getByTestId("header-container");
    expect(headerContainer).toHaveStyle("height: 100vh");
  });

  it("should change height to 10vh on Header item click", () => {
    render(<Header />);
    const headerContainer = screen.getByTestId("header-container");
    const firstHeaderItem = screen.getByText("First Item"); // Replace with the text/content of your first header item

    fireEvent.click(firstHeaderItem);

    expect(headerContainer).toHaveStyle("height: 10vh");
  });

  it("should change height to full (100vh) on scroll to top", () => {
    render(<Header />);
    const headerContainer = screen.getByTestId("header-container");
    const mockScrollEvent = new Event("scroll");

    // Simulate scroll down
    fireEvent(window, mockScrollEvent);
    expect(headerContainer).toHaveStyle("height: 10vh");

    // Simulate scroll to top
    window.pageYOffset = 0;
    fireEvent(window, mockScrollEvent);
    expect(headerContainer).toHaveStyle("height: 100vh");
  });

  it("should change height to 10vh when the user scrolls down", () => {
    render(<Header />);
    const headerContainer = screen.getByTestId("header-container");
    const mockScrollEvent = new Event("scroll");

    // Scroll down to trigger the height change
    window.pageYOffset = 100;
    fireEvent(window, mockScrollEvent);
    expect(headerContainer).toHaveStyle("height: 10vh");
  });
});
