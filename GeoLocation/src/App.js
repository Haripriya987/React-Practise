import { useState } from "react";
import useLocation from "./useLocation";

function App() {
  const [countClick, setCountClick] = useState(0);

  function handleClick() {
    setCountClick((count) => count + 1);
    getPosition();
  }
  const {
    position: { lat, lng },
    error,
    isLoading,
    getPosition,
  } = useLocation();

  return (
    <div className="App">
      <button onClick={handleClick} disabled={isLoading}>
        Get my Position
      </button>

      {isLoading && <p> Loading Position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          {" "}
          your GPS Position{""}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat},{lng}
          </a>
        </p>
      )}

      <p>You requested position {countClick} times</p>
    </div>
  );
}

export default App;
