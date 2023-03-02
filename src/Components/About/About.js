import React from 'react'
import { Container , Grid } from '@mui/material'
import card3 from "../../assets/card 3.png"
import card4 from "../../assets/card 4.png"
import card5 from "../../assets/card 5.png"
import "./About.css"

function About() {
  return (
    <div className='About'>
        <Container maxWidth="xl">
            <Grid container alignItems={"center"}>
                <Grid items md={6} sm={12} xs={12}>
                    <div className="left">
                        <h2 className="title">About US</h2>
                        <p className="text">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>
                        <button className='BgGreen'>Learn More</button>
                    </div>
                </Grid>
                <Grid items md={6} sm={12} xs={12}>
                    <div className="img">
                        <div className="colomun">
                            <img src={card3} alt="" />
                            <img src={card4} alt="" />
                        </div>
                        <img src={card5} alt="" />
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default About