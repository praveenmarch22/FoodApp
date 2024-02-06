import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import REST_DATA from "../mocks/resDataList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(REST_DATA);
    },
  });
});

it("should load body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforesearch = screen.getAllByTestId("rescard");

  expect(cardsBeforesearch.length).toBe(20);

  //Assertion
  const filterBtn = screen.getByRole("button", { name: "Ratings 4.0+" });

  fireEvent.click(filterBtn);
  const restraunt = screen.getAllByTestId("rescard");
  expect(restraunt.length).toBe(19);
});
