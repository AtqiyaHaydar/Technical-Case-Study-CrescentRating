import React from 'react'

// Image Import
import Image from 'next/image'
import ProfilePhoto from '@/public/pasfoto.jpeg'

const AboutMe = () => {
  return (
    <div className='flex flex-col items-start gap-y-12'>
      <h3 className='text-black/50 text-xl'>A B O U T  M E</h3>
      <div className='flex items-center justify-between gap-x-12'>
        <Image 
          src={ProfilePhoto}
          alt="Profile Image"
          className="rounded-full border-orange-500 border-2"
          width={250}
          height={250}
        />
        <p className='text-2xl font-medium text-black/80 leading-[38px]'>
          Hi, my name is Atqiya, a dedicated software engineer with a strong focus on UI/UX design and web development. I have extensive experience in building scalable, user-friendly applications using technologies like React, Next.js, and Node.js. My passion lies in creating seamless digital experiences through both front-end and back-end development.
        </p>
      </div>
    </div>
  )
}

export default AboutMe