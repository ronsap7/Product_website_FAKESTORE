import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get stored user details from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
      // Set logged-in status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to the product page
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container min-w-screen min-h-screen flex items-center justify-center bg-slate-900">

      <div className="flex justify-evenly">
        <img src="public/6078454.jpg" alt="Store Image" className="object-contain h-full" />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <div className="text-4xl text-white mb-6 rounded-lg">FAKE STORE API</div>

        <div className="bg-slate-900 flex flex-col justify-start h-auto w-96 p-6">
          <input
            className="text-xl text-center mb-4 p-2 rounded"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-xl text-center bg-white p-2 rounded"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mt-4">
            <p className="text-white">Not a registered User?</p>
            <Link to ="/signup">
            <button>
              <p className="text-white hover:text-rose-500">SIGN UP</p>
            </button>
            </Link>
          </div>

        <button
          className="p-2 mt-4 w-24 rounded-lg bg-rose-500 hover:bg-slate-500"
          onClick={handleLogin}
        >
          <h1 className="text-center text-white">Login</h1>
        </button>
      </div>
    </div>
  );
}
