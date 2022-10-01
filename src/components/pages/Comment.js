import React from 'react'

function Comment({item}) {
    console.log(item)
  return (
    <div>
        {item.comment}
        {item.author}
        {item.date}
    </div>
  )
}

export default Comment