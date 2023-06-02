import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const { currentUser } = useContext(AuthContext);
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return currentUser ? (
    <button
      onClick={handleLogout}
      className="px-4 py-1 border border-blue-500 rounded-md hover:bg-gray-100"
    >
      Logout
    </button>
  ) : null;
};

export default Logout;
