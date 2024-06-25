import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapController = ({ cordonnées }) => {
  const map = useMap();
  const flyToDuration = 1.5;
  const destination = [cordonnées.lat, cordonnées.lot];

  const flyTo = (location) => {
    map.flyTo(location, 15, {
      animate: true,
      duration: flyToDuration,
    });
  };

  useEffect(() => {
    if (destination[0]) flyTo(destination);
  }, [destination]);

  return null;
};

export default MapController;
