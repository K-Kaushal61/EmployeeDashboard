import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5'>
        <div className='shrink-0 h-full w-[300px] bg-yellow-400 rounded-2xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 px-3 py-1 rounded-md'>High</h3>
                <h4 className='text-sm'>12 Nov 2025</h4>
            </div>
            <h2 className='text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel repudiandae, commodi dignissimos placeat eius porro, voluptatem aliquam pariatur libero asperiores possimus, illo quam sequi omnis accusamus expedita? Rem, dicta.</p>
        </div>
    </div>
  )
}

export default TaskList