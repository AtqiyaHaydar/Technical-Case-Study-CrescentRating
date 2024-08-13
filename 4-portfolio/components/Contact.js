import React from 'react'
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className='space-y-12'>
      <h3 className='text-black/50 text-xl'>C O N T A C T</h3>
      <ul className='flex flex-col md:flex-row gap-4'>
        <li className='flex flex-col items-center gap-x-4 w-full h-[100px] justify-center rounded-lg bg-orange-300 text-black/75 font-medium'>
          <Phone /> + 62 815 7377 9675
        </li>
        <li className='flex flex-col items-center gap-x-4 w-full h-[100px] justify-center rounded-lg bg-orange-300 text-black/75 font-medium'>
          <Github /> AtqiyaHaydar
        </li>
        <li className='flex flex-col items-center gap-x-4 w-full h-[100px] justify-center rounded-lg bg-orange-300 text-black/75 font-medium'>
          <Linkedin /> Atqiya Haydar
        </li>
        <li className='flex flex-col items-center gap-x-4 w-full h-[100px] justify-center rounded-lg bg-orange-300 text-black/75 font-medium'>
          <Instagram /> AtqiyaHaydar
        </li>
      </ul>
      <div className='mt-[125px]' />
    </div>
  )
}

export default Contact