/* eslint-disable no-unused-expressions */
/* eslint-disable testing-library/no-unnecessary-act */
// libraries
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import { screen } from "@testing-library/dom";

// react components
import Home from "../../../views/home";
import Cards from "../../../components/home/cards";
import SearchBar from "../../../components/common/searchBar";

describe("Home Page render Page", () => {
  it("render the Home page", () => {
    render(<Home />);
    expect(document.title).toEqual("Meet the team");
    const elem = screen.getByTestId("team-heading");
    expect(elem).toBeInTheDocument();
  });

  it("page should show no users text if there is no user", () => {
    render(<Cards users={[]} loading={false} />);
    const element = screen.getByTestId("users-missing");
    expect(element).toBeInTheDocument();
  });

  it("lazy loading cards should be shown if the data is loading", () => {
    render(<Cards users={[]} loading={true} />);

    const element = screen.getByTestId("lazy-cards");
    expect(element).toBeInTheDocument();
  });

  describe("Search Bar", () => {
    const mock = jest.fn();

    afterEach(() => {
      jest.restoreAllMocks();
      () => cleanup();
    });

    test("render search input", () => {
      render(<SearchBar onSearch={mock} />);

      const inputEl = screen.getByTestId("search-input");
      expect(inputEl).toBeInTheDocument();
    });

    it("onsearch function should be called when the user search something", async () => {
      render(<SearchBar onSearch={mock} />);
      const inputEl = screen.getByTestId("search-input");

      await act(async () => {
        fireEvent.change(inputEl, {
          target: { value: "user" },
        });
      });

      expect(mock).toBeCalled();
    });
  });
});
