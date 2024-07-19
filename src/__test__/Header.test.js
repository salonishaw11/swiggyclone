import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from "../utils/appStore";

it("should render header componet with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "login" });
  expect(loginButton).toBeInTheDocument();
});
