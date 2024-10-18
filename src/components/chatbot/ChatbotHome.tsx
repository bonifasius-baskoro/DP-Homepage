"use client"
import { ENDPOINT_CHECK, URL } from '@/constant/url';
import React, { FC, useEffect, useState } from 'react'
import InputBox from './InputBox';
import { usePostAnswer } from '@/hooks/usePostAnswer';

import { AnimatePresence, motion } from 'framer-motion';

const ChatbotHome:FC = () => {
  const [chatAvailable, setChatAvailable] = useState<boolean>(false);
  
  const{data,isLoading, isError} = usePostAnswer();
  


  // useEffect(() => {
  //   console.log('Current data:', data);
  //   console.log('Loading:', isLoading);
  //   console.log('Error:', error);
  // }, [data, isLoading, error]);

  useEffect(()=>{
    const checkServer = async()=>{
      try{
        const response = await fetch(URL+ENDPOINT_CHECK);
        
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

  const displayText = isLoading? "loading..." : isError? "sorry": data? data.answer:"";

  

  return (
    <div className='h-screen pt-12'>
      <div className='text-yellow-p px-4 h-[80%] overflow-scroll p-4'>
        <p className='text-3xl pl-4 '>
        <AnimatePresence mode="wait">
          <motion.p
            key={displayText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='text-3xl'
          >
            {displayText}
          </motion.p>
        </AnimatePresence>
        </p>
      </div>
      <div className="h-32 flex items-center">
        
          <InputBox/>
        
      </div>
    </div>
  )
}

export default ChatbotHome