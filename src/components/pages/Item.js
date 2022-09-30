
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'


function Item() {

  const navigate = useNavigate()
  let { item } = useParams()

  console.log("mytext:",item)

  return (
    <div>
      
      Hello from Item

    </div>
  );
}

export default Item;
