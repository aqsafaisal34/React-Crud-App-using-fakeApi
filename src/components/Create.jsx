import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function Create() {
   const [name,setName] = useState('');
   const [age,setAge] = useState('');
   const [email,setEmail] = useState('');

   const navigate = useNavigate();

   const submitHandler = (e) =>{
    e.preventDefault();
    axios.post('https://63b5680958084a7af3933503.mockapi.io/crud',{
        e_name: name,
        e_age: age,
        e_email: email
    }).then(()=>{
      navigate('/')
    })
   }
   
  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
        <div className='bg-primary p-2 text-center'>
            <h1>Create Data</h1>
        </div>
         <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label>Enter Name:</label>
                <input type='text' placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Enter Age:</label>
                <input type='number' placeholder='Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Enter Email:</label>
                <input type='email' placeholder='Email' className='form-control'onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <br />
            <div className='d-grid'>
            <input type='submit' value='Submit' className='btn btn-primary'/>
            </div>
         </form>
         <div className='mt-2 mb-2'>
         <Link to='/'>
          <button className='btn btn-primary'>
            Read Data
          </button>
         </Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Create;
