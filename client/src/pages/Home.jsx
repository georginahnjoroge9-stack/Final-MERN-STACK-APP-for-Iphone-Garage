//home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import PageWrapper from "../components/PageWrapper"

const Home = () => {
  const products = [
    { name: "iPhone 15 Pro Max", price: 165000, image: "/assets/iphone15.jpeg" },
    { name: "iPhone 14 Pro Max", price: 140000, image: "/assets/iphone14.jpeg" },
    { name: "iPhone 13 Pro Max", price: 120000, image: "/assets/iphone13.png" },
  ];

  return (
    <PageWrapper>
      <Navbar />

      <div className="container">
        <Hero />

        <h2>Available Phones</h2>

        <div className="products">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
