import React from 'react'
import {Link} from 'react-router-dom'

export default function SmallCard({item}) {
    console.log("smallcard", item)
  return (
    <Link to={item.id}> 
    <div>SmallCard
        {item.name}
    </div></Link>
  )
}
