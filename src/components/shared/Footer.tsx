import Link from 'next/link';
import { FC } from 'react';

const Footer:FC = () => {
  return (
    <footer className='bg-black-p text-yellow-p py-6 px-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <Link href="/" className='text-xl font-bold'>
              deepee
            </Link>
          </div>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 items-center'>
            <Link href="/" className='hover:underline'>
              Home
            </Link>
            <Link href="/WhatWeDo" className='hover:underline'>
              What We Do
            </Link>
            <Link href="/WhatWeChase" className='hover:underline'>
              What We Chase
            </Link>
            <Link href="/whoweare" className='hover:underline'>
              Who We Are
            </Link>
          </div>
        </div>
        <div className='mt-6 text-center'>
          <p>&copy; {new Date().getFullYear()} deepee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;