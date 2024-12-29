import { UseCurrentLocation } from "./useCurrentLocation";

export function HookLocation() {
  const { location, locationErro, locationLoading, onLocationFinding } =
    UseCurrentLocation();

  return (
    <div>
      <button onClick={onLocationFinding}>Retrive location</button>
      {location && (
        <p>
          Longitude:
          <span style={{ color: " blue" }}> {location.longitude}</span>{" "}
          Latitude:
          <span style={{ color: " blue" }}> {location.latitude}</span>
        </p>
      )}
    </div>
  );
}
