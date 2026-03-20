import Layout from "../components/Layout";

function Cart() {
  return (
    <Layout>
      <div className="container">
        <h1>Your Cart</h1>

        <p>No items yet</p>

        <button>Checkout</button>
      </div>
    </Layout>
  );
}

export default Cart;
