// import React from 'react'

import { useEffect, useState } from "react"
import { useThrottle } from "./useThrottle"
import { useDispatch } from "react-redux"
import { getTransactions } from "../Redux/action"

// eslint-disable-next-line react/prop-types
const SearchBar = ({month}) => {
    const dispatch = useDispatch()
    const [query,setQuery] =useState("")
    // const [suggestions,setSuggestions]= useState([])
    
    const throttledText= useThrottle(query,500)

    useEffect(()=>{
        let m
        if (month == "Jan") {
            m = 1;
          } else if (month == "Feb") {
            m = 2;
          } else if (month == "Mar") {
            m = 3;
          } else if (month == "Apr") {
            m = 4;
          } else if (month == "May") {
            m = 5;
          } else if (month == "Jun") {
            m = 6;
          } else if (month == "Jul") {
            m = 7;
          } else if (month == "Aug") {
            m = 8;
          } else if (month == "Sep") {
            m = 9;
          } else if (month == "Oct") {
            m = 10;
          } else if (month == "Nov") {
            m = 11;
          } else if (month == "Dec") {
            m = 12;
          } 

        if(throttledText==""){
             dispatch(getTransactions(m,"",1))
            }else{
            dispatch(getTransactions(m,throttledText,1))
           
        }
    },[throttledText,query])


  return (
    <div className="mt-[3rem]">
        <input type="text" className="rounded-full w-[20rem] p-[0.5rem] bg-red-100 text-black"
        onChange={(e)=>{setQuery(e.target.value.toLowerCase())}} value={query} placeholder='search' />
    </div>
  )
}

export default SearchBar