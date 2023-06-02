import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
const provider = new GoogleAuthProvider();

function getFriendlyErrorMessage(error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already in use by another account.";
    case "auth/invalid-email":
      return "Please enter a valid email.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/user-not-found":
      return "There is no user corresponding to this email.";
    case "auth/wrong-password":
      return "Wrong password.";
    case "auth/too-many-requests":
      return "Too many unsuccessful login attempts. Please try again later.";
    default:
      return error.message;
  }
}

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const auth = getAuth();

  const signUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      const friendlyErrorMessage = getFriendlyErrorMessage(error);
      setError(friendlyErrorMessage);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className="mt-8 space-y-5" onSubmit={signUp}>
          <input type="hidden" name="remember" value="true" />
          <div className="flex flex-col gap-y-5 rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-blue-500 text-sm font-medium rounded-md text-black bg-transparent hover:bg-gray-100"
            >
              Sign in with Google
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account? Sign In
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
