import React from 'react'
import './Box.css'
const App = () => {
  let date= new Date()
  return (
    <div>
      <div className='a'>
       
      <h2>Todo App</h2>
     <div style={{display:'flex',gap:'20px'}}>
      <input type="text" className='c'style={{height:'20-px',width:'100px'}}

      placeholder='Enter Todo Here'></input>

      <input type='date'className='c'style={{height:'20-px',width:'100px'}}></input>
      <button className='aa'style={{height:'20px',width:'60px'}}>Add</button><br></br></div>
      

      <div style={{display:"flex",alignItem:"center",gap:"65px",marginTop:"20px"}}>
      <span>BuyMilk</span>
      <span>{date.toLocaleDateString()}</span>
      <button className='bb'>Delete</button><br></br></div>

      <div style={{display:"flex",alignItem:"center",gap:"48px",marginTop:"20px"}}>
      <span>Go To College</span>
      <span>{date.toLocaleDateString()}</span>
      <button className='dd'>Delete</button></div>
      </div>
      </div>
  )
}

export default App

      