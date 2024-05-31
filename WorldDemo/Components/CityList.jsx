import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
// import PropTypes from "prop-types";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }
  if (!Array.isArray(cities) || !cities.length) {
    return <Message message="Add your First City" />;
  }

  console.log(cities);
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
      {/* <CityItem city="City" key={1} /> */}
    </ul>
  );
}

// CityList.propTypes = {
//   cities: PropTypes.array.isRequired, // Ensure cities is an array
//   isLoading: PropTypes.bool.isRequired,
// };
