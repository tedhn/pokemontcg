import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { ContextProvider } from "./ContextProvider";
test("renders learn react link", () => {
  render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
  const Title = screen.getByText("TCG Marketplace");
  expect(Title).toBeInTheDocument();
});
