import React from 'react'

const CreateTask = () => {
  return (
    <div>
            <form className='flex w-full justify-between items-start bg-[#1c1c1c] mt-10 rounded'>
                <div className='w-1/2 flex flex-col gap-5 p-4'>
                    <div>
                        <h3 className='font-semibold'>Task Title</h3>
                        <input className=' bg-transparent border border-white rounded-md w-full px-2 py-2' type="text" placeholder='Make a Ui' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Date</h3>
                        <input className=' bg-transparent border border-white rounded-md w-full px-2 py-2' type="Date" />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Assign To</h3>
                        <input className=' bg-transparent border border-white rounded-md w-full px-2 py-2' type="text" />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Category</h3>
                        <input className=' bg-transparent border border-white rounded-md w-full px-2 py-2' type="text" />
                    </div>
                 </div>
                <div className='w-1/2 flex flex-col gap-1 p-4'>
                    <h3 className='font-semibold'>Description</h3>
                    <textarea className='bg-transparent border border-white rounded-md h-58' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-400 rounded py-3 mt-2  hover:bg-emerald-600 font-semibold'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask