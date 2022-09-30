import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'


export default function Map() {
  return (
   
        <MapContainer 
            center={[52.515, 13.39]} 
            zoom={13} 
            scrollWheelZoom={false} 
            className='w-[450px] h-[450px]'
            
        >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    {/* <Marker position={[52.516, 13.39]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      {/* </Popup>
    </Marker> */} 
  </MapContainer>
  
  )      
 
}
