import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
    
    // Get the username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    
    navigate('/login');
  };

  return (
    <header className="bg-green-600 shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300">
          <Link to="/">Fake Store API</Link>
        </div>

        <ul className="flex space-x-6 text-white">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors duration-300 text-2xl font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gray-300 transition-colors duration-300 text-2xl font-bold"
            >
              Products
            </Link>
          </li>
          
          
          {isLoggedIn &&  (
            <>
              
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-gray-300 transition-colors duration-300 text-2xl font-bold"
                >
                  ({username}) Logout
                </button>
              </li>
              
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
