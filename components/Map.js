import React from 'react';
import GoogleMapReact from 'google-map-react';


const Map = () => {

  const location = {
    address: 'Florianópolis - SC, 88010-400',
    lat: -27.596208,
    lng: -48.556310,
  }

  const zoomLevel = 13;

  const LocationPin = ({ text }) => (
    <div className="pin">
      <p className="pin-text">{text}</p>
    </div>
  )

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
          //text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map;