import * as React from "react";
import { useAuth } from "../contexts/AuthContexts";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

function Routes() {
  const { isSigned } = useAuth();
  return isSigned ? <AppRoutes /> : <AuthRoutes />;
}

export { Routes };
