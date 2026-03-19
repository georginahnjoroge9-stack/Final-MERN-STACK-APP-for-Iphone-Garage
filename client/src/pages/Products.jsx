import { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import PageWrapper from "../components/PageWrapper";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${API}/api/products?keyword=${search}`);
      setProducts(data);
    };

    fetchProducts();
  }, [search]);

  // FILTER BY BRAND
  const filteredProducts = brand
    ? products.filter((p) => p.brand === brand)
    : products;

  return (
    <PageWrapper>
      <Navbar />

      <div className="container">
        <h1 className="page-title">All Products</h1>

        {/* 🔍 SEARCH */}
        <input
          className="search-input"
          placeholder="Search iPhones..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🏷 FILTER */}
        <select
          className="filter-select"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
        </select>

        {/* 📦 PRODUCTS GRID */}
        <div className="products">
          {filteredProducts.length === 0 ? (
            <h2>No products found</h2>
          ) : (
            filteredProducts.map((p) => <ProductCard key={p._id} product={p} />)
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Products;
