"use client"
import { CHATCOUNTKEY, ENDPOINT_CHECK, URL } from '@/constant/url';
import React, { FC, useEffect, useState } from 'react'
import InputBox from './InputBox';
import { usePostAnswer } from '@/hooks/usePostAnswer';

import { AnimatePresence, motion } from 'framer-motion';
import { count } from 'console';

const ChatbotHome:FC = () => {
  const [chatAvailable, setChatAvailable] = useState<boolean>(false);
  const [countChat, setCountChat] = useState<number>(0);
  const{data,isLoading, isError} = usePostAnswer();
  


  useEffect(() => {
    const localCount = localStorage.getItem(CHATCOUNTKEY);
    if(!localCount){
      localStorage.setItem(CHATCOUNTKEY,countChat.toString())
    }
    else{
      setCountChat(parseInt(localCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CHATCOUNTKEY,countChat.toString())
  }, [countChat]);

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
    <div className='h-screen md:h-auto pt-12'>
      <div className='text-yellow-p overflow-y-auto h-[60vh] md:h-[40vh] p-4'>
        <div className='text-3xl pl-4 h-full lg:px-12'>
        <AnimatePresence mode="wait">
        {countChat>10? ("You seem so curious with us feel free to contact us here "): (
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
          )}
         
        </AnimatePresence>
        </div>
      </div>
      <div className="h-32 flex items-center">
        
          <InputBox chatCount={countChat} setChatCount={setCountChat}/>
        
      </div>
    </div>
  )
}

export default ChatbotHome