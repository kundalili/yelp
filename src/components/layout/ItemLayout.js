import { Outlet } from "react-router-dom";
import Header from "../Header";
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'


export default function CategoriesLayout(props) {
  const navigate = useNavigate()
  const goBack = () =>{
    navigate(-1) 
  }

  // const [restaurant, setRestaurant] = useState('')

  // useEffect(() => {
  //   async function getData() {
  //     try {
      
  //       const result = await fetch(`https://cross-yelp-ali.herokuapp.com/api/restaurants`)
        
  //       const data = await result.json()
  //       console.log("🚀 ~ data", data[2])
  
  //       setRestaurant(data)
        
  //     } catch (error) {
  //       console.log('Error!')
        
  //     }
  //   }
  //   getData()
  // },[])

    return (
      <>
          <div className="restaurant flex justify-around items-center flex-col">
            <h1 className='restaurantName bg-slate-100 opacity-75 text-2xl m-2 p-1'>Name of the restaurant</h1>
            <div className='flex flex-row justify-center items-center'>
              <h2 className='city bg-slate-100 opacity-75 text-xl m-2 p-1'>Berlin</h2>
              <h2 className='rating flex flex-row bg-slate-100 opacity-75 text-xl m-2 p-1'><BsStarFill />
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
        </>
      );
}
