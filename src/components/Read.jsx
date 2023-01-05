import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Read() {
     const[apiData,setApiData] = useState([]);
    const getData = () =>{
        axios.get('https://63b5680958084a7af3933503.mockapi.io/crud')
        .then((response)=>{
           setApiData(response.data)
        })
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered table-striped table-dark table-hover'>
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
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
                </>
            )
            })
           }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Read;
