import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../Search";
import { BrowserRouter } from "react-router-dom";
import restdata from "../mocks/restrauntList.json";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn().mockReturnValue(restdata),
}));

it("should search the item cards", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );

  console.log(MOCK_DATA);

  const searchText = screen.getByTestId("searchid");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchText, { target: { value: "desserts" } });
  fireEvent.click(searchBtn);

  const rescards = screen.getAllByTestId("rescard");
  console.log(rescards.length);

  //expect(rescards.length).toBe(14);
});
