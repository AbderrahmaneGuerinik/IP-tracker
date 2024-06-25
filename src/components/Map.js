import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import MapController from "./MapController";

function Map({ location, locationName }) {
  const position = [location.lat, location.lot];
  return (
    <MapContainer
      center={position.lat ? location : [37, 3]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ zIndex: "0" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController cordonnées={location} />
      {location.lat && (
        <Marker position={position}>
          <Popup>{locationName}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

let defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize: [20, 30],
});
L.Marker.prototype.options.icon = defaultIcon;

export default Map;
