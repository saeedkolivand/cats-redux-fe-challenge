import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "app/store";
import Container from "./Container";
import { initLoadingPortal } from "../loading/loading.test";
import { initErrorModalPortal } from "../error/error.test";

describe("Container test cases", () => {
  beforeAll(() => {
    initLoadingPortal();
    initErrorModalPortal();
  });
  afterAll(cleanup);

  const queryClient = new QueryClient();

  it("should render children", () => {
    const MockContainer = (props: { text: string }) => {
      const { text } = props;
      return (
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Container>
              <p aria-label="container">{text}</p>
            </Container>
          </QueryClientProvider>
        </Provider>
      );
    };

    render(<MockContainer text="text" />);
    const searchBoxElement = screen.getByText("text");
    expect(searchBoxElement).toBeTruthy();
  });

  it("should render loading on screen", () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Container loading />
        </QueryClientProvider>
      </Provider>
    );

    const loadingElement = screen.getByLabelText("loading-wrapper");
    expect(loadingElement.classList.contains("show-loading")).toBeTruthy();
  });
});
