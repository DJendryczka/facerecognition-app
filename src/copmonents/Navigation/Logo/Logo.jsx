import React from 'react'
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <Tilt>
    <div className=' h-[100px] w-[100px] bg-blue-500 rounded-lg mx-8  flex justify-center items-center'>
        <h1 className=''> 👀</h1>
    </div>
    </Tilt>
  )
}

export default Logo