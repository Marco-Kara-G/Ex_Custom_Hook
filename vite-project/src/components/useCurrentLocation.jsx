import { useState } from "react";

export function UseCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loadiong, setLoading] = useState(true);

  const retriveLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setLoading(false);
      setError("Impossibile trovare la tua posizione");
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      setLoading(false);
    });
  };

  return {
    location: location,
    locationError: error,
    locationLoading: loadiong,
    onLocationFinding: retriveLocation,
  };
}
