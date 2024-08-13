import React from 'react'

// Image Import
import Image from 'next/image'
import SoftwareEngineer from '@/public/SoftwareEngineer.svg'
import SoftwareDesigner from '@/public/SoftwareDesigner.svg'

const Hero = () => {
  return (
    <div className='w-full rounded-[24px] bg-primary-dark flex flex-col items-center justify-center py-16 px-8 gap-y-6'>
      <h1 className='text-3xl md:text-5xl text-white font-bold text-center'>Software Engineer & Software Designer</h1>
      <p className='text-white/75 text-center max-w-[850px]'>A software engineer and UI/UX designer with 2+ years of experience in both fields. Known for the ability to develop excellent websites with captivating designs. Adaptable and collaborative.</p>
      <button className='rounded-full py-3 px-6 bg-orange-500 hover:bg-orange-400 text-white font-medium'>
        Contact Me
      </button>
      <div className='w-full flex flex-col md:flex-row gap-12 mt-12'>
        <div className='w-full h-[250px] md:h-[300px] rounded-[24px]'>
          <Image 
            src={SoftwareEngineer}
            alt='Software Engineer'
            className='w-full object-cover h-full rounded-[24px]'
          />
        </div>
        <div className='w-full h-[250px] md:h-[300px] rounded-[24px]'>
          <Image 
            src={SoftwareDesigner}
            alt='Software Designer'
            className='w-full object-cover h-full rounded-[24px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero