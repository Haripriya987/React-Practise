import { useState } from "react";

export default function useLocation() {
  const [error, setError] = useState("");
  const [position, setPosition] = useState({});
  const [isLoading, setLoading] = useState(false);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
}
