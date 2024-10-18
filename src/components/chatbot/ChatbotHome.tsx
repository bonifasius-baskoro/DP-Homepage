"use client"
import { ENDPOINT_CHECK, URL } from '@/constant/url';
import React, { FC, useEffect, useState } from 'react'
import InputBox from './InputBox';

const ChatbotHome:FC = () => {
  const [chatAvailable, setChatAvailable] = useState<boolean>(false);

  useEffect(()=>{
    const checkServer = async()=>{
      try{
        const response = await fetch(URL+ENDPOINT_CHECK);
        console.log(response);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        else{
          setChatAvailable(true);
        }
      }catch(e){
        console.error(e)
      }
      
    }
    checkServer();
  },[])

  if(!chatAvailable){
    return <></>
  }
  return (
    <div className='h-screen pt-12'>
      <div className='text-yellow-p px-4 h-[80%] overflow-scroll p-4'>
        <p className='text-3xl '>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
        </p>
      </div>
      <div className="h-32 flex items-center">
        
          <InputBox/>
        
      </div>
    </div>
  )
}

export default ChatbotHome