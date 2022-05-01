import { AppRouterTypes } from "routes/appRouter.types";
import { lazy } from "react";

const Home = lazy(() => import("./Home"));

export const HomePathNames = {
  root: "/",
};

export const HomeRoutes: AppRouterTypes[] = [
  {
    title: "Home",
    path: HomePathNames.root,
    element: <Home />,
    exact: true,
  },
];
