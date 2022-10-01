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
      

      </div>
    </div>
  )
}

export default CardContainer