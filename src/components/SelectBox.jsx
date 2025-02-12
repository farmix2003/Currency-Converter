import PropTypes from "prop-types";
import CurrencyItems from "./Options";
import "./style.css";
const SelectBox = ({ currencies, currency, handleCurrencyChange }) => {
  return (
    <select
      className="border-1 border-amber-200 rounded custom-select"
      value={currency}
      onChange={handleCurrencyChange}
    >
      <CurrencyItems currencies={currencies} />
    </select>
  );
};
SelectBox.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  handleCurrencyChange: PropTypes.func.isRequired,
};

export default SelectBox;
