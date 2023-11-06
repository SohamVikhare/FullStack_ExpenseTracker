import React from 'react'
import Navbar from '../component/Navbar'

export default function About() {
  return (
    <div>
        <div><Navbar/></div>
        <div style={{"text-align":"center","margin":"10%"}}>
            
            <h5> This Project is creacted by</h5>
            <p>Soham Vikhare <space/>
            <a href="https://www.linkedin.com/in/soham-vikhare-809a2a250/" target="_blank">Linkdin</a></p>
            <p>Tanvi Sivraj <space/>
            <a href="https://www.linkedin.com/in/tanvi-sivaraj-18a792239/" target="_blank">Linkdin</a></p>

        </div>
    </div>
  )
}
