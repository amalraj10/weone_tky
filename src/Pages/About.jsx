import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <div>
<Container>
<center><h1 style={{fontSize:"60px",color:"#ffb700",fontFamily: "'Protest Guerrilla', sans-serif",}}>About <span style={{color:"#dcdce4"}}>Us</span></h1></center>
<Row><Col md={6}>
<center><h6 style={{textAlign:"justify",color:"#dcdce4",fontFamily:"'PT Sans', sans-serif",fontSize:"20px"}} className='mt-5'>Welcome to <b style={{color:"#ffb700"}}> WEONE Arts & Sports Club, Thillenkery</b> . Your vibrant local hub for a decade of artistic and sporting endeavors! Situated in the heart of Kannur , Thillenkery . WEONE has been fostering a spirit of unity and creativity since its inception 10 years ago.

<br />
<br />
At WEONE , we believe in the power of collective passion , and our motto <span style={{color:"#ffb700"}}>"WE ONE , WE ARE ONE"</span> reflects our commitment to creating a close-knit community that transcends individual interests.As a registered club with the number KNR/CA/36/2023 , we take pride in providing a platform for individuals to explore and express their talents in both arts and sports.
<br />
<br />
Whether you're an art enthusiast looking to showcase your creativity or a sports lover eager to engage in friendly competitions , WEONE Arts & Sports Club is the place where your interests come to life . Join us on this exciting journey of self-discovery,camaraderie , and shared experiences.

<br /><br />
Together , let's continue to build a community where passion knows no bounds—because at WEONE , we truly believe that when we come together , we are one.


</h6></center>
    
    
    </Col>
    
    <Col className='mt-5 '  md={6}>
    <img className='ms-5' style={{width:"80%"}} src="https://pngimg.com/uploads/football_player/football_player_PNG110.png" alt="" />
    
    
    </Col>
    
    </Row>




</Container>


    </div>
  )
}

export default About