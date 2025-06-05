import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MainPage() {
  const [date, setDate] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, sourceCurrency, targetCurrency, amountInSourceCurrency);
      };


    useEffect (() => {
      const getCurrencyNames = async () => {
        try{
          const responce = await axios.get(
          "http://localhost:5000/getAllCurrencies"
          );
          setCurrencyNames(responce.data);
        }catch(err){
          console.log(err);
        }
      };
      getCurrencyNames();
    }, []);
    
  return (
    <div>
      <h1 className="lg:mx-32  text-5xl font-black flex items-center justify-normal text-green-500">
        Convert Your Currencies Today
      </h1>
      <p className="lg:mx-32 font-sm opacity-40 py-6">
        Welcome to "Convert Your Currencies Today"! This application allows you
        to easily convert currencies based on the latest exchange rates. Whether
        you're planning a trip, managing your finances, or simply curious about
        the value of your money in different currencies, this tool is here to
        help.
      </p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={date}
              >
                Date
              </label>
              <input
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                onChange={(e) => setDate(e.target.value)}
                type="Date"
                name={date}
                id={date}
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={sourceCurrency}
              >
                Source Curency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                type="text"
                name={sourceCurrency}
                id={sourceCurrency}
                value={sourceCurrency}
              >
                <option value=""> select source currency</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={targetCurrency}
              >
                Target Curency
              </label>
              <select
                onChange = {(e) => setTargetCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                type="text"
                name={targetCurrency}
                id={targetCurrency}
                value={targetCurrency}
              >
                <option value=""> select Target currency</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={amountInSourceCurrency}
              >
                Amount in Source Curency
              </label>
              <input
              onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                type="text"
                name={amountInSourceCurrency}
                id={amountInSourceCurrency}
                placeholder="Enter amount"
              />
            </div>

            <button
              className=" bg-green-600 hover:bg-green-700
            text-white font-bold py-2 px-4 rounded"
            >
              {" "}
              Get the Target Curency
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
