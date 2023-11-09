import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column mb-5 mt-5'>
      <div className='footer d-flex justify-content-evenly align-items-center w-100'>

        <div className="websites mt-5" style={{width:'400px'}}>
        <h4><i class="fa-solid fa-video fa-beat text-warning me-3 "></i>{''}Video Player</h4>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos repellat doloremque magnam optio aut corrupti voluptatibus animi, commodi dolore vel aliquid voluptate assumenda, voluptates reprehenderit facere iure autem modi.</h6>
        <h6>simiplweled, ewkghelew , gskwehgk?</h6>
        </div>

        <div className="links d-flex flex-column">
        <h4 className='mb-2'>links</h4>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}>LandingPage</Link>
        <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home</Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>WatchHistory</Link>
        </div>
    

        <div className="guides d-flex flex-column">
          <h4 className='mb-2'>Guides</h4>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>React</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>React Bootsrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
        </div>


        <div className="contacts">
          <h4 className='mb-2 mt-5'>Contact Us</h4>
          <div className="d-flex mb-3 mt-4">
            <input type="text" className='form-control' placeholder='enter your email id'/>
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-4 '>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright © 2023 media player. Built with React</p>
    </div>
  )
}

export default Footer