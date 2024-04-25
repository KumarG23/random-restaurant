import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";



function Footer() {
  const mapStyles = {
    height: "200px",
    width: "50%",
    margin: "auto",
    marginTop: "25px",
    zIndex: "-1",
  };

  const defaultCenter = {
    lat: 38.046127,
    lng: -84.495883,
  };

  const API_KEY = import.meta.env.VITE_API_KEY;
  // const API_KEY = process.env.REACT_APP_API_KEY
  console.log(import.meta.env.VITE_API_KEY);
  // console.log(process.env)

  return (
    <div> <p className="text-light">348 E Main St, Lexington, KY</p>
    <LoadScript id="map"
      googleMapsApiKey={API_KEY}>
      <GoogleMap
      id="map"
      mapContainerStyle={mapStyles}
      zoom={15}
      center={defaultCenter}
      clickableIcons={true}
      options={{ gestureHandling: "greedy" }}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default Footer;
