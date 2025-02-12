import SelectBox from "./SelectBox";
import CustomTitle from "./Title";
import PropTypes from "prop-types";
const CurrenciesBox = ({
  currencies,
  fromCurrency,
  toCurrency,
  handleSwap,
  handleFromCurrencyChange,
  handleToCurrencyChange,
}) => {
  return (
    <div className="flex items-center justify-start gap-x-2 m-2 pl-2">
      <CustomTitle classes={"text-2xl"} title={"From:"} />
      <SelectBox
        currency={fromCurrency}
        handleCurrencyChange={handleFromCurrencyChange}
        currencies={currencies}
      />
      <button className="text-2xl cursor-pointer" onClick={handleSwap}>
        🔄
      </button>
      <CustomTitle classes={"text-2xl"} title={"To:"} />
      <SelectBox
        currencies={currencies}
        currency={toCurrency}
        handleCurrencyChange={handleToCurrencyChange}
      />
    </div>
  );
};
CurrenciesBox.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  handleSwap: PropTypes.func.isRequired,
  handleFromCurrencyChange: PropTypes.func.isRequired,
  handleToCurrencyChange: PropTypes.func.isRequired,
};

export default CurrenciesBox;
