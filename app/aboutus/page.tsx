import { MeteorsDemo } from '@/components/aboutus'
import React from 'react'

export const metadata = {
  title: "About | CSWD Hackathon",
  description: "Learn about CSWD, our vision, and how we empower tech enthusiasts through events and innovation.",
};

const page = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-900'>

      <MeteorsDemo />
    </div>
  )
}

export default page
