import styles from "./City.module.css";

// import { useParams, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";

import BackButton from "./BackButton";
import Spinner from "../Components/Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  // console.log(x);
  const { getCity, currentCity, isLoading } = useCities();

  // const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams;
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  // return (
  //   <>
  //     <h1>City</h1>
  //     <p>
  //       Position : {lat},{lng}
  //     </p>
  //   </>
  // );

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  // console.log(currentCity);
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>
      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>
      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}
      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
