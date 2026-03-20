import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Contact Us</h1>

        <p>📍 Pioneer Kimathi House, Nairobi</p>
        <p>📞 0729885571</p>
        <p>📧 iphonegarage@gmail.com</p>

        <div className="socials">
          <a href="https://instagram.com/iphone.garage_" target="_blank">
            Instagram
          </a>
          <a href="https://tiktok.com/@iphone.garage_" target="_blank">
            TikTok
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
