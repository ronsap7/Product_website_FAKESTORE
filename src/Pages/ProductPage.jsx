import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [cartItem, setCartItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue.toLowerCase());
    console.log(searchValue);
  };

  const filteredData = products.filter((product) => {
    return product.title.toLowerCase().includes(searchInput);
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((products) => products.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    setCartItem(product);
    setShowModal(true); 
    console.log(product);
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <>
      <div className="container mx-auto p-4 bg-gray-200">
        <h1 className="text-4xl font-bold mb-4 text-center text-zinc-950">Products</h1>
        <div className="text-center text-2xl my-2 text-gray-500">——— ★ ★ ★ ———</div>

        {/* Search Bar */}
        <div className="p-4 flex justify-center align-center gap-1">
          <i className="fa-solid fa-magnifying-glass text-xl p-2"></i>
          <input
            type="search"
            placeholder="Search for products..."
            className="p-2 rounded-lg"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 ">
          {filteredData.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md p-4 rounded-xl shadow-lg flex flex-col hover:bg-green-100 h-full"
            >
              <Link key={product.id} to={`/products/${product.id}`} className="flex flex-col h-full">
                <div className="flex-grow">
                  <img
                    src={product.image}
                    alt="img"
                    className="w-full h-48 mb-4 p-2 object-contain bg-transparent"
                  />
                  <h1 className="font-bold text-lg">{product.title}</h1>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div className="flex justify-between items-center mt-auto pt-4">
                <h3 className="text-rose-500 font-bold text-lg">${product.price}</h3>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-yellow-200 text-indigo-500 font-bold px-4 py-2 rounded-lg hover:bg-yellow-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal} 
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className="text-2xl font-bold mb-4 text-center">Item Added to Cart</h2>
              {cartItem && (
                <>
                  <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="w-32 h-32 object-contain mb-4 "
                  />
                  <h3 className="text-lg font-bold">{cartItem.title}</h3>
                  <p className="text-gray-600">${cartItem.price}</p>
                  
                </>
              )}
            </div>
          </div>
        )}

        
      </div>
    </>
  );
}
