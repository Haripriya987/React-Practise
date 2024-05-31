import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

function CountryItem({ country }) {
  // console.log(cities);
  // const { country, emoji } = cities;

  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired, // Ensure city.name is a required string
    emoji: PropTypes.string.isRequired,
    // date: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
