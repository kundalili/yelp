import './App.css';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Search from './components/Search';
import CardContainer from "./components/pages/CardContainer"
import CardDetail from "./components/pages/CardDetail"
import Map from "./components/Map"
import {setGlobalState, useGlobalState} from "./components/state/states"


export default function App() {

  console.log ("log1, app started")
  setGlobalState("sdata", [])

 // const sdata = useGlobalState("sdata")


  async function getData() {
    let response;
    try {
      console.log ("Log 2, after render")
      response = await fetch("https://cross-yelp-ali.herokuapp.com/api/restaurants")

      console.log ("Log3, response:",response)
      const data2 = await response.json()

      console.log("log 4 data from API", data2)
      setGlobalState("data",data2)

      response = await fetch('http://ip-api.com/json')
      const location = await response.json()
      
      console.log("location found:", location, location.city)
      setGlobalState("location",location)

      response = await fetch('https://cross-yelp-ali.herokuapp.com/api/comments')
      const commentlist = await response.json()
      
      console.log("location found:", commentlist)
      setGlobalState("comments",commentlist)

    } 
    catch (error) {
      console.log('ERROR:', error.message) 
      alert('error getting data')
    }
  } 

  useEffect(() => {
    
    getData()
  
  }, [])

  return (
    <div className='flex'>
      <Search />
      <div> 
        <CardContainer/> 

      </div>    
    </div>
  );
}

