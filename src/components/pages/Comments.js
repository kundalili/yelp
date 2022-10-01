import React from 'react'
import { useGlobalState } from '../state/states';
import Comment from './Comment';

function Comments({id}) {


    console.log("comments rendering id", id)

    const comments = useGlobalState("comments")
    console.log("comments rendering commentlist", comments)
    
    const myarr = comments[0].filter(obj=>obj.restaurant_id===id)
    console.log("comments rendering result", myarr)

    return (
    <div>
       {
        myarr.map((item,idx)=><Comment item={item}/>)
       }
    </div>
  )
}

export default Comments