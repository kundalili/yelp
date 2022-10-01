import React from 'react'
import { useGlobalState } from '../state/states';
import SmallCard from './SmallCard'


function CardContainer() {
  const [sdata] = useGlobalState("sdata");
  console.log("from card container",sdata)


  return (
    <div>
      <div>
          {
              sdata.map((item, idx) => 

                <SmallCard item={item} key={item.id}/>
              )
             
          }
      
{/* map data, link to and index.js */}

      </div>
      <form>
        <h1 className="font-bold">filter</h1>
        <input 
        type = "radio" 
        value = "euro"/>
        <h2>Suggested</h2>
        <input 
        type = "radio" 
        value = "now opened"/>


  
      <div>CardContainer</div>
      </form>
    </div>
  )
}

export default CardContainer