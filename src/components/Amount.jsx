import PropTypes from "prop-types";
import CustomTitle from "./Title";

const Amount = ({ amount, setAmount }) => {
  return (
    <div className="flex items-center pl-4 justify-start gap-x-2">
      <CustomTitle classes={"text-2xl"} title={"Amount:"} />
      <input
        type="number"
        className="border-1 pl-1 border-amber-200 rounded outline-none"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

Amount.propTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default Amount;
