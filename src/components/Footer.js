import React from 'react'
import { Container } from 'react-bootstrap'
import "./Footer.css";



export default function Footer() {
  return (
    <div className="container-fluid footer center"  >
        
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        
        <a class="media" href="https://www.linkedin.com/in/patrice-zoundi/" target="_blank">LinkedIn</a>
        <a class="media" href="https://github.com/PSzoundi" target="_blank">Github</a>
       </div>
  
    </div>
    
  )
}




