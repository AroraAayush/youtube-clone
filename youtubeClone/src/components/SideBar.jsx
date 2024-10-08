import React, { useState } from 'react'
import { sideBarItems } from '../utils/constants'
import { FaCode } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineSportsCricket } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import { PiCoatHanger } from "react-icons/pi";
import { AiTwotoneSmile } from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch,useSelector } from 'react-redux';
import { changeCategoryStore } from '../store/youtubeSlice';
const giveIcon=(category)=>
{
  if(category=="code")
  return <FaCode/>
  else if(category=="music")
    return <IoIosMusicalNotes/>
  else if(category=="sports")
    return <MdOutlineSportsCricket/>
  else if(category=="money")
    return <MdAttachMoney/>
  else if(category=="stream")
    return <CiStreamOn/>
  else if(category=="fashion")
    return <PiCoatHanger/>
  else if(category=="beauty")
    return <AiTwotoneSmile/>
  else if(category=="movies")
    return <MdOutlineLocalMovies/>
  else if(category=="home")
  return <FaHome/>
  else
  return <BsFillBookmarkFill/>
}


function SideBar() {
  const dispatch=useDispatch();
  const storeCategory=useSelector((state)=>state.category);
  const [selectedCategory,setSelectedCategory]=useState(storeCategory);
  const changeCategory=(category)=>{
    setSelectedCategory(category);
    //console.log("changin cateogty in store")
    dispatch(changeCategoryStore(category));
  }
  return (
    <div className='shrink-0 md:overflow-y-scroll overflow-x-scroll scrollbar-none md:h-full w-full flex md:flex-col flex-row justify-start  items-center md:w-44 md:gap-y-4 gap-x-4 bg-black border-r-2 border-white/25 rounded-r-lg rounded-t-lg p-2 pt-4'>
      {sideBarItems && sideBarItems.map((item)=>(
        <div key={item.name} onClick={()=>changeCategory(item)} className={`w-32 shrink-0 cursor-pointer md:w-full flex flex-row md:justify-start justify-center items-center gap-x-2 ${selectedCategory.name==item.name?"bg-red-600":""} hover:bg-red-600 rounded-xl px-3 md:py-2 py-3`}>
          {giveIcon(item.category)}
          <div className='text-white capitalize text-base font-semibold '>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default SideBar
