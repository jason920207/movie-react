import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
// import {
//   withScriptjs,
//   withGoogleMap
// } from 'react-google-maps'
import React from 'react'

// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   // <GoogleMap
//   //   defaultZoom={8}
//   //   defaultCenter={props.coordinates}
//   // >
//   //   <Marker
//   //     position={props.coordinates}
//   //   />
//   // </GoogleMap>
//   <h1>{props.coordinates}</h1>
// ))

function MapWithAMarker (props) {
  const coordinates = props.coordinates
  console.log(coordinates)
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      center={{ lat: coordinates.latitude, lng: coordinates.longitude }}
    >
      <Marker
        position={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      />
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(MapWithAMarker))
