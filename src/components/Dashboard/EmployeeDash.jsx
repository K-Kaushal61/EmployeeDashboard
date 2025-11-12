import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Auth/TaskList/TaskList'

const EmployeeDash = () => {
  return (
    <div className='p-8 bg-[#1c1c1c] h-screen w-full overflow-x-hidden'>
        <Header />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDash