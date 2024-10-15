import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import Footer from './components/Footer';
import ProductInfo from './Pages/ProductInfo';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

function AppContent() {
  const location = useLocation();

  // Determine if the current route is for login or signup
  const hideNavbarAndFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductInfo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* Conditionally render the Footer */}
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
