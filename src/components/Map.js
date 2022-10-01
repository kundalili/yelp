import React, { useState } from 'react'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import { Icon } from "leaflet";
import { useGlobalState } from './state/states';

export default function Map() {

  const [sdata, setSdata] = useGlobalState("sdata");
  
  const [coords, setCoords] = useState([[52.51411,13.39008], [52.51522, 13.3905]]);
  

  const iconimg = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon-2x.png",
    iconSize: [25, 25]
  });

  console.log("sdata value", sdata)
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
      {
        
        sdata.map((item, idx)=>
            
            <Marker key={idx} position={coords[idx]} icon= {iconimg} >
                <Popup >
                    {item.name} <br /> {item.city} - {item.rating}
                </Popup>
            </Marker>
            
            
        )
      }

  </MapContainer>
  
  )      
 
}
