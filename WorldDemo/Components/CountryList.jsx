import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
// import PropTypes from "prop-types";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

// eslint-disable-next-line react/prop-types
export default function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }
  if (!Array.isArray(cities) || !cities.length) {
    return <Message message="Add your First City" />;
  }

  // console.log(cities);
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
      {/* <CityItem city="City" key={1} /> */}
    </ul>
  );
}

// CountryList.propTypes = {
//   cities: PropTypes.array.isRequired, // Ensure cities is an array
//   isLoading: PropTypes.bool.isRequired,
// };
