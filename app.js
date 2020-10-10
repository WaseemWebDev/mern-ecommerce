let express = require("express");
let bodyParser = require("body-parser");
let cors = require('cors')
const productsRouter = require("./routes/products");
const db = require("./db");
let app = express();
const port = 5000;

db();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(productsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
