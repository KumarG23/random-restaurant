import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MyMap() {
  const mapStyles = {
    height: "200px",
    width: "50%",
    margin: "auto",
    marginTop: "25px"
  };

  const defaultCenter = {
    lat: 38.041980, 
    lng: -84.492670, 
  };

  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div className="mt-3">
      <span className="text-dark" id="address">348 E Main St, Lexington, KY</span>
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default MyMap;








// import React from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   useJsApiLoader,
// } from "@react-google-maps/api";

// function Footer() {
//   const mapStyles = {
//     height: "200px",
//     width: "50%",
//     margin: "auto",
//     marginTop: "25px",
//     zIndex: "-1",
//   };

//   const defaultCenter = {
//     lat: 38.046127,
//     lng: -84.495883,
//   };

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(defaultCenter);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: import.meta.env.VITE_API_KEY,
//   });
//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return (
//     <>
//       {" "}
//       <p className="text-light vh-100">348 E Main St, Lexington, KY</p>
//       {/* <LoadScript id="map"
//       googleMapsApiKey={API_KEY}> */}
//       {isLoaded ? (
//         <GoogleMap
//           id="map"
//           mapContainerStyle={mapStyles}
//           zoom={15}
//           center={defaultCenter}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//           clickableIcons={true}
//           clickable={true}
//           // options={{ gestureHandling: "greedy" }}
//         >
//           {/* <Marker position={defaultCenter} /> */}
//         </GoogleMap>
//       ) : (
//         <></>
//       )}
//       {/* </LoadScript> */}
//     </>
//   );
// }

// export default Footer;
