import Home from "./Home";
import { AppRouterTypes } from "../../routes/appRouter.types";

export const HomePathNames = {
  root: "/",
};

export const HomeRoutes: AppRouterTypes[] = [
  {
    path: HomePathNames.root,
    element: <Home />,
    exact: true,
  },
];
