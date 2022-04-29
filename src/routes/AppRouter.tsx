import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouterTypes } from "./appRouter.types";
import { HomeRoutes } from "../pages/home/home.route";
import AppContainer from "../ui-components/appContainer/AppContainer";

export const appRoutes: AppRouterTypes[] = [...HomeRoutes];

const AppRouter: React.FC = () => (
  <AppContainer>
    <Suspense fallback={<span />}>
      <BrowserRouter>
        <Routes>
          {appRoutes.map((item, index) => (
            <Route
              path={`${item.path || ""}/${item.exact && "*"}`}
              element={item.element}
              key={`route-${index}`}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  </AppContainer>
);

export default AppRouter;
