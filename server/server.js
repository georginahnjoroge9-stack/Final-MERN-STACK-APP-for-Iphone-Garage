// Force Node.js to use reliable public DNS servers (Cloudflare + Google)
const dns = require('node:dns/promises');
dns.setServers(['1.1.1.1', '1.0.0.1', '8.8.8.8']);





//entry point for the express server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const authRoutes =require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


console.log("Checking URI:", process.env.MONGO_URI);

//connection to mongodb
mongoose.connect(process.env.MONGO_URI,)
.then(() =>{ 
    console.log('Connected to MongoDB');
})
.catch((err) => {
     console.error("MongoDB Connection Error:",err);
});

//Routes for the API
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});







