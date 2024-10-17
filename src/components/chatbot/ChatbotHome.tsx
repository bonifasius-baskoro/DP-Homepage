import React, { FC } from 'react'

const ChatbotHome:FC = () => {
  return (
    <div className='h-screen pt-12'>
      <div className='text-yellow-p px-4 h-[80%] overflow-scroll p-4'>
        <p className='text-3xl '>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
        </p>
      </div>
      <div className="min-h-[10%] border-yellow-50 border-2 flex">
        <div className='w-[80%] overflow-scroll border-r-2 border-r-red-500' >
          text box
        </div>
        <div>
          sent
        </div>
      </div>
    </div>
  )
}

export default ChatbotHome