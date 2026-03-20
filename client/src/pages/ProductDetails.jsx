import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../api";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`${API}/api/products/${id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <Layout>
      <div className="container details">
        <img src={product.image} alt={product.name} />

        <div>
          <h1>{product.name}</h1>
          <p className="price">Ksh {product.price}</p>

          <p>Brand: {product.brand}</p>
          <p>Storage: {product.storage}</p>
          <p>Condition: {product.condition}</p>

          <p>
            Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
