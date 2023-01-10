import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {

   const[id,setId]  = useState(0);
   const[name,setName]  = useState(0);
   const[age,setAge]  = useState(0);
   const[email,setEmail]  = useState(0);
   const navigate = useNavigate();

   useEffect(()=>{
     setId(localStorage.getItem('id'));
     setName(localStorage.getItem('name'));
     setAge(localStorage.getItem('age'));
     setEmail(localStorage.getItem('email'));
   },[])

   const handleUpdate = (e) =>{
    e.preventDefault();
     axios.put(`https://63b5680958084a7af3933503.mockapi.io/crud/${id}`,{
        e_name:name,
        e_age:age,
        e_email:email,
     }).then(()=>{
        navigate('/')
     }).catch((err)=>{
        console.log(err)
     })
   }
  return (
    <>
    <div className='row'>
      <div className='col-md-4'>
      <div className='bg-primary p-2 text-center'>
          <h1>Update Data</h1>
      </div>
       <form onSubmit={handleUpdate}>
          <div className='form-group'>
              <label>Enter Name:</label>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control'/>
          </div>
          <div className='form-group'>
              <label>Enter Age:</label>
              <input type='number'value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className='form-control' />
          </div>
          <div className='form-group'>
              <label>Enter Email:</label>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control'/>
          </div>
          <br />
          <div className='d-grid'>
          <input type='submit' value='Update' className='btn btn-primary'/>
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

export default Edit;
