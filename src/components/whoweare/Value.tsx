import React, { FC } from 'react'

interface valueProps   {
    header:string;
    paragraph:string;
    pictureLink?:string;   
}


const Value:FC<valueProps> = ({header, paragraph}) => {
  return (
    <div className='flex flex-col md:flex-row md:gap-8 px-6'>
        <div className='md: min-w-[40%] md:flex md:justify-center md:items-center'>
            <h1 className='text-4xl font-medium text-yellow-p'>
                {header}
            </h1>
        </div>
        <div className='mt-4'>
            <p className='text-xl font-light text-yellow-p'>
            {paragraph}  
            </p>
        </div>
    </div>
  )
}

export default Value