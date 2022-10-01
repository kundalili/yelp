import React from 'react'
import { useGlobalState } from '../state/states';
import { useParams } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import { Icon } from "leaflet";
import L from 'leaflet'


export default function CardDetail() {
  const navigate = useNavigate()
  const goBack = () =>{
    navigate(-1) 
  }

  const [sdata] = useGlobalState("sdata");
  let { id } = useParams()
  
  const item = sdata.find(object => {
    return object.id === id
  })
  const [coords, setCoords] = useState([[52.51411,13.39008], [52.51522, 13.3905]]);
  const iconimg = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon-2x.png",
    iconSize: [25, 25]
  });

  return (
    <>
    <div className="restaurant flex justify-around items-center flex-col">
        <div>
          <img src={item.imgUrl} className="h-[250px] w-full mt-[30px]" alt='restaurantImg'></img>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <h1 className='restaurantName bg-slate-200 opacity-75 text-2xl m-2 p-1'>{item.name}</h1>
          <h2 className='city bg-slate-200  opacity-75 text-xl m-2 p-2'>{item.city}</h2>
          <h2 className='tags bg-slate-200 opacity-75 text-xl m-2 p-2'>{item.tag}</h2>
          <h2 className='rating flex flex-row bg-slate-200 opacity-75 text-l m-2 p-3'><BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </h2>
        </div>
  </div>
  <div>
    <p className="comments mt-[100px] mb-[20px] bg-slate-200 h-[100px]">
    Read the comments
    </p>
  </div>
  <button className="backBtn mb-[10px]" onClick={goBack}>
      BACK
  </button>
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
</>
    
  )
}
