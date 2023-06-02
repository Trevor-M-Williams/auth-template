import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser]);

  return currentUser && children;
};

export default PrivateRoute;
