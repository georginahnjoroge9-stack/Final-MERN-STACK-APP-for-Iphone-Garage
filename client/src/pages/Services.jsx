import Layout from "../components/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Repair Services</h1>

        <div className="products">
          <div className="product-card">Screen Replacement</div>
          <div className="product-card">Battery Replacement</div>
          <div className="product-card">Charging Port Repair</div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
