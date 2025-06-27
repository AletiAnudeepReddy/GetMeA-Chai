import React from 'react'

const Username = ({params}) => {
  return (<>
    <div className='cover w-full relative'>
      <img className='object-cover w-full h-[350]' src='/main.gif' alt=''/>
      <div className='absolute -bottom-20 right-[45%] border-yellow-400 border-4 rounded-full'>
        <img className='rounded-full' width={165} height={165} src='/images.jpeg' alt=''/>
      </div>
    </div>
    <div className='info flex flex-col justify-center items-center my-24 gap-2'>
      <div className='text-white font-bold text-lg'>
        @{params.username}
      </div>
      <div className='text-slate-400'>
        Creating Animated art for VTT's
      </div>
      <div className='text-slate-400'>
        18,769 members . 99 posts . $18,530/release
      </div>
    </div>
    </>
  )
}

export default Username