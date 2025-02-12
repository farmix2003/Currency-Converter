import PropTypes from "prop-types";
const CurrencyItems = ({ currencies }) => {
  return (
    <>
      {currencies.map((currency) => (
        <option key={currency} value={currency} lang="5" className="text-black">
          {currency}
        </option>
      ))}
    </>
  );
};

CurrencyItems.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CurrencyItems;
