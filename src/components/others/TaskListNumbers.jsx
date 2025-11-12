import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-full'>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-red-400'>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-400'>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-green-400'>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-400'>
            <h1 className='text-2xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        
    </div>
  )
}

export default TaskListNumbers