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

  return currentUser ? <button onClick={handleLogout}>Logout</button> : null;
};

export default Logout;
