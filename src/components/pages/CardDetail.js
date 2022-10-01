import React from 'react'
import { useGlobalState } from '../state/states';
import { useParams } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useNavigate } from 'react-router-dom'
// import { useState, useEffect } from "react";
import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Comments from './Comments';



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
  console.log("from card Details",sdata)
  console.log("from card Details",item)
  console.log("from card Details",id)
  return (
    <>
    <div>{item.city}</div>
    <div className="restaurant flex justify-around items-center flex-col">
    <h1 className='restaurantName bg-slate-100 opacity-75 text-2xl m-2 p-1'>Name of the restaurant</h1>
    <div className='flex flex-row justify-center items-center'>
      <h2 className='city bg-slate-100  opacity-75 text-xl m-2 p-2'>City</h2>
      <h2 className='tags bg-slate-100 opacity-75 text-xl m-2 p-2'>Tag</h2>
      <h2 className='rating flex flex-row bg-slate-100 opacity-75 text-l m-2 p-3'><BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStar />
      </h2>
    </div>
  </div>
  <button className="backBtn m-[10px]" onClick={goBack}>
      Back
  </button>
  <p className="comments bg-slate-200 h-[100px]">
    Read the comments
  </p>
  
  <Comments id={item.id}/>
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
</>
    
  )
}
