import "../src/index.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Map from "./components/Map";
import InfoContainer from "./components/InfoContainer";
import { useEffect, useRef, useState } from "react";
import Info from "./components/Info";

const KEY = "03b114f83cce43e0ad43a56a35b281b9";

function App() {
  const [query, setQuery] = useState("");
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cordonnées, setCordonnées] = useState({ lat: "", lot: "" });

  const inputEl = useRef(null);

  function handleChangeQuery(e) {
    setQuery(e.target.value);
    setError(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      setQuery("");
      const res = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${KEY}&ip=${query}`
      );
      const data = await res.json();
      setIp(data.ip);
      setLocation(data.state_prov + ", " + data.country_name);
      setTimeZone(data.time_zone.current_time);
      setIsp(data.isp);
      setCordonnées({ lat: data.latitude, lot: data.longitude });
    } catch {
      setError(
        "Please enter a correct ip or domain or verifiy your connection"
      );
      setLocation("");
      setTimeZone("");
      setIp("");
      setIsp("");
      setCordonnées({ lat: "", lot: "" });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Search
          query={query}
          onChangeQuery={handleChangeQuery}
          onSubmit={handleSubmit}
          error={error}
          input={inputEl}
        />
        <InfoContainer
          ip={ip}
          location={location}
          timeZone={timeZone}
          isp={isp}
          isLoading={isLoading}
        >
          <Info
            title="ip address"
            data={ip ? ip : "Empty"}
            isLoading={isLoading}
          />
          <Info
            title="location"
            data={
              !location.includes("undefined") && location ? location : "Empty"
            }
            isLoading={isLoading}
          />
          <Info
            title="time zone"
            data={timeZone ? timeZone : "Empty"}
            isLoading={isLoading}
          />
          <Info
            title="isp"
            data={isp ? isp : "Empty"}
            isLast={true}
            isLoading={isLoading}
          />
        </InfoContainer>
      </div>
      <Map location={cordonnées} locationName={location} />
    </>
  );
}

export default App;
