import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom';
import View from '../components/View';
import Category from '../components/Category';
import { useState } from 'react';


function Home() {
  //create state to do state-lifting
  const[uploadVideoStatus, setUploadVideoStatus]= useState({})

  return (
    <div className='container'>
      <div className='d-flex justify-content-between mt-4'>
        <Add setUploadVideoStatus ={setUploadVideoStatus}/>
      <Link to ={'/watch-history'}>
{      <h4 className='text-decoration-none' >Watch History</h4>
}     </Link>
      </div>
      <h4 style={{ marginTop:'15px'}}>All Videos</h4>
      <div className="d-flex justify-content-between">
        
        <div style={{width:"1000px"}}><View uploadVideoStatus={uploadVideoStatus}/></div>
        <Category/>
      </div>
    </div>
  )
}

export default Home