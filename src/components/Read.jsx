import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Read() {
    const[apiData,setApiData] = useState([]);
    const getData = () =>{
        axios.get('https://63b5680958084a7af3933503.mockapi.io/crud')
        .then((response)=>{
           setApiData(response.data)
        })
    }
    const handleDelete = (id) => {
       axios.delete(`https://63b5680958084a7af3933503.mockapi.io/crud/${id}`)
       .then(()=>{
        getData();
       })
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div className='row'>
      <div className='col-md-12 mt-2'>
        <table className='table table-bordered table-striped table-hover'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
           {
            apiData.map((item)=>{
              return(
                <>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <td>
                    <button className='btn btn-primary'>
                     EDIT
                    </button>
                    </td>
                    <td>
                    <button className='btn btn-danger' onClick={()=>{if(window.confirm('Are you sure to delete?'))
                    {handleDelete(item.id)}
                    }}>
                     DELETE
                    </button>
                    </td> 
                </tr>
                </>
            )
            })
           }
            </tbody>
        </table>
        <div className='mt-2 mb-2'>
         <Link to='/create'>
          <button className='btn btn-primary'>
            Create Data
          </button>
         </Link>
        </div>
      </div>
    </div>
  )
}

export default Read;



