import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Save the details to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="container min-w-screen min-h-screen flex items-center justify-center bg-slate-900">

      <div className="flex justify-evenly">
        <img src="public/6078454.jpg" alt="Store Image" className="object-contain h-full" />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <div className="text-4xl text-white mb-6 rounded-lg">SIGN UP</div>

        <div className="bg-slate-900 flex flex-col justify-start h-auto w-96 p-6">
          <input
            className="text-xl text-center mb-4 p-2 rounded"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-xl text-center mb-4 p-2 rounded"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-xl text-center bg-white p-2 rounded"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="p-2 mt-4 w-24 rounded-lg bg-rose-500 hover:bg-slate-500"
          onClick={handleSignup}
        >
          <h1 className="text-center text-white">Sign Up</h1>
        </button>
      </div>
    </div>
  );
}
