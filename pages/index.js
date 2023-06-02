import PrivateRoute from "../components/PrivateRoute";
import Logout from "../components/Logout";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <PrivateRoute>
      <div className="h-screen flex flex-col space-y-4 items-center justify-center">
        <h1>Welcome to the home page!</h1>
        <p>You are logged in as {currentUser?.email}</p>
        <Logout />
        {/* Other page content */}
      </div>
    </PrivateRoute>
  );
}
