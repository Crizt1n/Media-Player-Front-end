import React, { useEffect, useState } from 'react'
import Video from './Video'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {
  const [allVideo,setAllVideo]=useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos =async()=>{
    const response = await getAllVideos()
    /* console.log(response); */
    const {data}=response
    /* console.log(data); */
    setAllVideo(data)
  }

  console.log(allVideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])

  

  return (
    <div>
      <Row>
      {  allVideo.length>0?
      allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
        <Video displayVideo ={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>))
        :
        <p>Nothing to Display</p>
        }
      </Row>
      
    </div>
  )
}

export default View