import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function HomeFeed() {
  const cateogty=useSelector((state)=>state.category);
  console.log("from home category :",cateogty)
  return (

    <div>
      
    </div>
  )
}

export default HomeFeed
