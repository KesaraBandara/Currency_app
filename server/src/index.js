const express = require(`express`);
const cors = require(`cors`);
const axios = require(`axios`);

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies", async (req, res) => {
  const namesURl = `https://openexchangerates.org/api/currencies.json?app_id=c7b988acb392475bb82f1182d2113334`;

  try {
    const nameResponse = await axios.get(namesURl);
    const nameData = nameResponse.data;

    return res.json(nameData);
  } catch (err) {
    console.log(err);
  }
});

app.get("/convert",async (req, res) => {
  const { date, sourceCurrency, targetCurrency, amountInSourceCurrency } =
    req.query;
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
