import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
    const { productId } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => console.error("Error fetching product:", error));
    }, [productId]);

    if (!product) return <p>Loading...</p>; 

    return (
        <div className="container mx-auto p-4 flex gap-8  ">

        <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <img src={product.image} alt={product.title} className="max-w-md" />
        </div>
        
        <div className="flex flex-col items-start">
            <p className="text-4xl font-bold ">Description</p>
            <p className="mt-4 text-4xl mb-16 ">{product.description}</p>

            <div className="flex-col justify-between  mt-4">
                <h2 className="text-4xl font-bold p-4">${product.price}</h2>
            <div className="flex  text-right">
                <h2 className="text-2xl font-bold mr-4 p-4">Rating: {product.rating.rate} / 5</h2>
                <h2 className="text-2xl font-bold p-4">Reviewers: {product.rating.count}</h2>
            </div>
        </div>
        </div>

        </div>
    );
}
