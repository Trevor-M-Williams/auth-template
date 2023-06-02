import PrivateRoute from "../components/PrivateRoute";
import Logout from "../components/Logout";

export default function HomePage() {
  return (
    <PrivateRoute>
      <div>
        <h1>Welcome to the home page!</h1>
        <Logout />
        {/* Other page content */}
      </div>
    </PrivateRoute>
  );
}
