import React from 'react'

const Username = ({params}) => {
  return (<>
    <div className='cover w-full relative'>
      <img className='object-cover w-full h-[350]' src='/reR1AAK.png' alt=''/>
      <div className='absolute -bottom-20 right-[45%] border-white border-4 rounded-full'>
        <img className='rounded-full' width={165} height={165} src='/images.jpeg' alt=''/>
      </div>
    </div>
    <div className='info flex flex-col justify-center items-center mt-24 gap-2'>
      <div className='text-white font-bold text-lg'>
        @{params.username}
      </div>
      <div className='text-slate-400'>
        Creating Animated art for VTTs
      </div>
      <div className='text-slate-400'>
        18,769 members . 99 posts . $18,530/release
      </div>
      </div>
      <div className='payment text-white flex flex-row justify-center gap-3 container w-[80%] mx-auto my-10'>
        <div className='suppoters w-1/2 bg-slate-900 rounded-lg p-10'>
          <h2 className='text-2xl font-bold my-5'>Supporters</h2>
          <ul className='mx-5 text-lg'>
            <li className='my-3 flex gap-2 items-center'>
              <img width={33} src='/avatar.gif' alt='user avatar'/>
              <span>
                Anudeep donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of &hearts;"
              </span>
            </li>
            <li className='my-3 flex gap-2 items-center'>
              <img width={33} src='/avatar.gif' alt='user avatar'/>
              <span>
                Anudeep donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of &hearts;"
              </span>
            </li>
            <li className='my-3 flex gap-2 items-center'>
              <img width={33} src='/avatar.gif' alt='user avatar'/>
              <span>
                Anudeep donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of &hearts;"
              </span>
            </li>
            <li className='my-3 flex gap-2 items-center'>
              <img width={33} src='/avatar.gif' alt='user avatar'/>
              <span>
                Anudeep donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of &hearts;"
              </span>
            </li>
            
          </ul>
        </div>
        <div className='makepayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
          <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
          <div className='flex gap-2 flex-col'>
            <input type='text' className='w-full p-3 m-1 rounded-lg bg-slate-800' placeholder='Enter Name'/>
            <input type='text' className='w-full p-3 m-1 rounded-lg bg-slate-800' placeholder='Enter Message'/>
            <input type='text' className='w-full p-3 m-1 rounded-lg bg-slate-800' placeholder='Enter Amount'/>
            <button type="button" className="text-white ml-1 mt-1 bg-gradient-to-br from-purple-600 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Pay</button>
  
          </div>
          <div className='flex gap-2 mt-2'>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username