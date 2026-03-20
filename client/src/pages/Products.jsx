import { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";
import ProductCard from "../components/ProductCard";
import PageWrapper from "../components/PageWrapper";
import Layout from "../components/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${API}/api/products?keyword=${search}`,
        );
        setProducts(data);
      } catch (error) {
        console.error("❌ ERROR FETCHING PRODUCTS:", error);
      }
    };

    fetchProducts();
  }, [search]);

  const filteredProducts = brand
    ? products.filter((p) => p.brand === brand)
    : products;

  return (
    <PageWrapper>
      <Layout>
        <div className="container">
          <h1 className="page-title">All Products</h1>

          <input
            className="search-input"
            placeholder="Search iPhones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="filter-select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
          </select>

          <div className="products">
            {filteredProducts.length === 0 ? (
              <h2>No products found</h2>
            ) : (
              filteredProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))
            )}
          </div>
        </div>
      </Layout>
    </PageWrapper>
  );
};

export default Products;
