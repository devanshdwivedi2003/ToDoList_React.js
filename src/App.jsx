import React from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form'

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
 const submitHandler = (e)=> {
  e.preventDefault()
  setMainTask([...MainTask,{title,desc}]);
  settitle("")
  setdesc("")
 };
  const deleteHandler= (i)=> {
    let copytask=[...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
 }
let renderTask= <h2>NO TASK AVAILABLE</h2>
   if(MainTask.length>0){
    renderTask= MainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
       <div className='flex items-center justify-between  w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h5 className='text-xl font-semibold'>{t.desc}</h5>
      </div>
      <button  
      onClick={()=>{
        deleteHandler(i)
      }}
       className=' bg-red-400 text-white px-2 py-1 m-3 text-2xl font-semibold rounded'>Delete</button>
     </li>
      );
     
    }) 
   }


  return (
    <>
    <h1 className='bg-black text-white p-5 text-xl font-bold text-center'> TodoList</h1>
    <form  onSubmit={submitHandler}>
      <input type="text"
      className='text-2xl border-zinc-800 border-4 px-4 py-2 m-8'
      placeholder='Enter Your Title'
      value={title} 
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

       <input type="text"
      className='text-2xl border-zinc-800 border-4 px-4 py-2 m-8'
      placeholder='Enter Your Description' 
      value={desc} 
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className=' bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-300'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default App
