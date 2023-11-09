import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ViewHistory, deleteHistory } from '../services/allAPI';



function WatchHistory() {
  const [allHistory,setAllHistory]=useState([])
  const [deletewatchHistory , setdeletewatchHistory]= useState(false)

    const getAllWatchedVideos =async()=>{
    const response = await ViewHistory()

    const {data} = response
    setAllHistory(data)
  } 
  console.log(allHistory);

  useEffect(()=>{
    getAllWatchedVideos()
    setdeletewatchHistory(false)
  },[deletewatchHistory])

  const removeHistory =async(id)=>{
    const response = await deleteHistory(id)
    setdeletewatchHistory(true)
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between mt-4'>
        <h4 >WatchHistory</h4>
      <Link to ={'/home'}>
        {<h5 style={{textDecoration:'none'}}><i className="fa-solid fa-arrow-left fa-sm fa-beat-fade"></i> Back to home</h5>}
        </Link>
      </div>
      <table class="table mx-auto container mt-4">
  <thead>
 
    <tr>
      <th scope="col">#</th>
      <th scope="col">Caption</th>
      <th scope="col">URL</th>
      <th scope="col">Time Stamp</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
  {allHistory.length>0?
    allHistory.map((history) =>(
    <tr>
      <td>{history.id}</td>
      <td>{history.caption}</td>
      <td><a href={history.embedLink} target='blank'>{history.embedLink} </a></td>
      <td>{history.timeStamp} </td>
      <td><button onClick={()=> removeHistory(history?.id)} className='btn'><i class="fa-solid fa-trash-can" ></i></button></td>

    </tr>))
    :
    <tr colspan='4'>NO DATA</tr>
  }
  
    
  </tbody>
</table>
   </div>
  )
}

export default WatchHistory