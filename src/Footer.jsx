import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Footer() {
  const mapStyles = {
    height: '200px',
    width: '50%',
    margin: 'auto',
    marginTop: '25px',
    zIndex: '-1'
  };

  const defaultCenter = {
    lat: 38.046127,
    lng: -84.495883
  };


  return (
    <LoadScript id="map"
    googleMapsApiKey="AIzaSyA-jAZg1fwytjvDPG9uaOkarPdRqzxhj_4">
      <GoogleMap
      id="map"
      mapContainerStyle={mapStyles}
      zoom={15}
      center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Footer