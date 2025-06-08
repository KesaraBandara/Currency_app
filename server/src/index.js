const express = require(`express`);
const cors = require(`cors`);
const axios = require(`axios`);

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies", async (req, res) => {
  const namesURl = `https://openexchangerates.org/api/currencies.json?app_id=`;

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

    try {
      const dataURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=`
      const dataResponse = await axios.get(dataURL);
      const rates = dataResponse.data.rates;

      const sourceRate = rates[sourceCurrency];
      const targetRate = rates[targetCurrency];

      const targetAmount =  (targetRate / sourceRate) * amountInSourceCurrency;
      return res.json(targetAmount.toFixed(2));
      
    } catch (error) {
      console.log(error);
    }
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
