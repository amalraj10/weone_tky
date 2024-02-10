import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../Images/logo PSD.png'

function Home() {
  return (
    <div>
<Container>
<Row>
<Col md={6}>
<h1 style={{marginTop:"35%",fontSize:"100px",color:"#ffb700",fontFamily: "'Protest Guerrilla', sans-serif",marginLeft:"17%",fontWeight:"300",}} >WE  <span style={{color:"#dcdce4"}}>ONE</span></h1>
<h1 style={{marginLeft:"-1%",fontSize:"34px",color:"#ffb700",fontFamily:"'Rowdies', sans-serif"}}> <b>ARTS & SPORTS CLUB , <span style={{color:"#dcdce4"}}>THILLENKERY</span></b></h1>
<h1 style={{marginLeft:"18%",fontSize:"44px",color:"#ffb700",fontFamily:"'Bangers', system-ui"}} className='mt-4'> " WE ONE <span style={{color:"#dcdce4"}}> WE ARE ONE "</span> </h1>
</Col>
<Col md={6}>
<img style={{width:"70%",marginTop:"10%",marginLeft:"20%",boxShadow: ' 2px 4px 10px 8px  black'}} src={logo} alt="" />

</Col>



</Row>


</Container>

    </div>
  )
}

export default Home