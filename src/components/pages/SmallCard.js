import React from 'react'
import {Link} from 'react-router-dom'

export default function SmallCard({item}) {
    console.log("smallcard", item)
  return (
    <Link to={item.id}> 
    <div>
    <div className='w-3/4 h-[250px] rounded border-black-200 bg-slate-50 m-5 drop-shadow-md flex flex-row'>
        <div>
            <img className='h-[225px] w-auto p-3 drop-shadow-md' src={item.imgUrl} alt=""/>
        </div>
        <div className='p-3'>
            <p className='font-bold text-lg '>{item.name}</p>
            <p>
             
 
             {item.rating}
             </p>
            <p>reviwes</p>
            <p>{item.tags}</p>
        </div>
 
       
    </div>


    </div></Link>
  )
}
