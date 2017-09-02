const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const product = require('./modules/product')

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.get('/products', product.getProducts);
app.get('/products/:productId', product.getProductById);

app.listen(PORT, () => console.log(`Server listening on ${ PORT }`));