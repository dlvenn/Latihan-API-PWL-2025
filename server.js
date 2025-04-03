const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let products = [
    { id: 1, name: "Kopi Tubruk", price: 10000 },
    { id: 2, name: "Teh Manis", price: 8000 }
];

app.get("/products", (req, res) => {
    res.json ({
        status: "success",
        data: products
    });
});
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});