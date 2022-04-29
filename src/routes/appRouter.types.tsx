import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";

export interface AppRouterTypes extends RouteObject {
  path?: string;
  element?: ReactNode;
  exact?: boolean;
}
