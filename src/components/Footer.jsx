export default function Footer(){
    return(
        <>
<footer className="bg-gray-800 text-white p-4 ">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 flex ">
    {/* Company Info Section */}
    <div className="flex flex-col items-start">
      <h2 className="text-2xl font-bold mb-4">Fake Store</h2>
      <p className="text-gray-400 mb-4">
        Our product is designed to help you in your everyday tasks. With top-notch quality and exceptional service, we aim to exceed your expectations.
      </p>
      <p className="text-gray-400">420 Powder Gali, Nagpur, INDIA</p>
    </div>

    {/* Links Section */}
    <div className="flex flex-col items-end">
      <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-gray-300 transition">About Us</a></li>
        <li><a href="/products" className="hover:text-gray-300 transition">Products</a></li>
        <li><a href="/" className="hover:text-gray-300 transition">Careers</a></li>
        <li><a href="/" className="hover:text-gray-300 transition">Contact Us</a></li>
      </ul>
    </div>

    {/* Social Media Section */}
    <div className="flex flex-col items-end">
      <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
      <div className="flex space-x-6">
        <a href="https://facebook.com" className="text-blue-600 hover:text-blue-400 transition">
          <i className="fab fa-facebook-f text-3xl"></i>
        </a>
        <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300 transition">
          <i className="fab fa-twitter text-3xl"></i>
        </a>
        <a href="https://instagram.com" className="text-pink-600 hover:text-pink-500 transition">
          <i className="fab fa-instagram text-3xl"></i>
        </a>
        <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-600 transition">
          <i className="fab fa-linkedin-in text-3xl"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-3 border-t border-gray-700 pt-3 text-center">
    <p className="text-gray-400">&copy; 2024 Fake STORE. All rights reserved.</p>
  </div>
</footer>

        </>
    )
}