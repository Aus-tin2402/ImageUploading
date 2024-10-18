import axios from 'axios';
import React, { useState } from 'react'
import './remove.css'
const Remove = () => {
  const [data,setData]=useState('')
  const [ID,setID]=useState('');

  const HandleSubmit=async(e)=>{
    e.preventDefault();
    try {
      let response=await axios.delete(`http://localhost:8080/image/removeAccount/${Number(ID)}`)
      setData(response.data.message);
    } catch (error) {
      console.log(error);  
    }
  }

  return (
    <>
      <div className="container">
        <div className="sub-container">
          {
            data==='' && 
            <form onSubmit={(e)=>HandleSubmit(e)}>
              <article className="input-group-feild">
                <label htmlFor="id">Enter Your User ID:</label>
                <input
                  id='id'
                  name='id'
                  type={`text`}
                  placeholder='Enter Your User ID:'
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </article>
              <article className="button">
                <button>Remove Image</button>
              </article>
            </form>
          }{
            data!=='' && 
            <p>Message :{data} </p>
          }
        </div>
      </div>
    </>
  )
}

export default Remove