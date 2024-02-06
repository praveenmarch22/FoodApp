import { render, act, screen, fireEvent } from "@testing-library/react";
import RestrauntMenu from "../RestrauntMenu";
import MOCK_DATA from "../mocks/restrauntMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load all the items in restrauntmenu", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestrauntMenu />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Peri Peri Chicken(5)");
  fireEvent.click(accordianHeader);
  const allItems = screen.getAllByTestId("item");
  expect(allItems.length).toBe(5);
});

it("should load all the items in restrauntmenu and check add button", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestrauntMenu />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Peri Peri Chicken(5)");
  fireEvent.click(accordianHeader);
  const allItems = screen.getAllByRole("button", { name: "Add" });
  expect(allItems.length).toBe(5);
});

it("should load all the items in restrauntmenu and check add button and click the add button and checks the items in cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Peri Peri Chicken(5)");
  fireEvent.click(accordianHeader);
  const allItems = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(allItems[0]);
  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();
  fireEvent.click(allItems[1]);
  expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();
});

it("should add items in the cart and count the items in the cart in the cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Peri Peri Chicken(5)");
  fireEvent.click(accordianHeader);
  const allItems = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(allItems[0]);

  fireEvent.click(allItems[1]);

  expect(screen.getAllByTestId("item").length).toBe(9);
});
