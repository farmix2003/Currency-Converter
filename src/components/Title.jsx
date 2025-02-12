import PropTypes from "prop-types";

const CustomTitle = ({ classes, title }) => {
  return <p className={classes}>{title}</p>;
};

CustomTitle.propTypes = {
  classes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomTitle;
