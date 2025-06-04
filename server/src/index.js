const express = require(`express`);
const cors = require(`cors`);
const axios = require(`axios`);

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});