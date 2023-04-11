import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../Constants/constants";

export const UnauthorizedRoute = ({ children }: React.PropsWithChildren) => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      return <Navigate to={"/profile"} replace />;
    }
  
    return <>{children}</>;
  };