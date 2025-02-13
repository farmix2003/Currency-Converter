import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CustomTitle from "./components/Title";
import CurrenciesBox from "./components/CurrenciesBox";
import Amount from "./components/Amount";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(
    localStorage.getItem("fromCurrency") || "UZS"
  );
  const [toCurrency, setToCurrency] = useState(
    localStorage.getItem("toCurrency") || "USD"
  );
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    const getCurrentCurrency = async () => {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      setCurrencies(Object.keys(response.data.rates));
      setExchangeRate(response.data.rates[toCurrency] * amount);
    };
    getCurrentCurrency();
  }, [fromCurrency, toCurrency, amount]);

  useEffect(() => {
    localStorage.setItem("fromCurrency", fromCurrency);
    localStorage.setItem("toCurrency", toCurrency);
  }, [fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleFromCurrencyChange = (e) => {
    const newFrom = e.target.value;
    setFromCurrency(newFrom);
    if (newFrom === toCurrency) {
      setToCurrency(fromCurrency);
    }
  };
  const handleToCurrencyChange = (e) => {
    const newTo = e.target.value;
    setToCurrency(newTo);
    if (newTo === fromCurrency) {
      setFromCurrency(toCurrency);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-slate-950 text-white">
      <div className="flex flex-col items-start justify-center bg-slate-900 p-4 rounded-lg">
        <CustomTitle
          classes={"text-4xl font-semibold mb-5 mx-2 md:mx-5 text-emerald-600"}
          title={"Currency Converter"}
        />
        <CurrenciesBox
          currencies={currencies}
          handleSwap={handleSwap}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          handleFromCurrencyChange={handleFromCurrencyChange}
          handleToCurrencyChange={handleToCurrencyChange}
        />
        <Amount amount={amount} setAmount={setAmount} />
        <CustomTitle
          classes={"text-2xl font-semibold mt-2 pl-4 text-white"}
          title={`${amount} ${fromCurrency} = ${exchangeRate} ${toCurrency}`}
        />
      </div>
    </div>
  );
};

export default App;
