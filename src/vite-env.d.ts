/// <reference types="vite/client" />

declare module "tempo-routes" {
  import { RouteObject } from "react-router-dom";
  const routes: RouteObject[];
  export default routes;
}