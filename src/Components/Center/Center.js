import React from 'react'
import { Container , Grid } from '@mui/material'
import card6 from "../../assets/card 6.png"
import car7 from "../../assets/card 7.png"
import car8 from "../../assets/card 8.png"
import "./Center.css"

function Center() {
  return (
    <div className='Center'>
        <Container maxWidth="xl">
            <div className="text">
            <h2 className="title">Special Dishes for you</h2>
            <p className="text">Made with premium & 100% Organic ingredients</p>
            </div>
            <Grid container alignItems={"center"}>
                <Grid items md={4} sm={12} xs={12}>
                    <div className="box">
                        <img src={card6} alt="" />
                        <h4>Green Salad</h4>
                        <p>A salad combined witha deliciouscut of bacon and mixed with tastyand fresh sesome oil.</p>
                    </div>
                </Grid>
                <Grid items md={4} sm={12} xs={12}>
                    <div className="box">
                        <img src={car7} alt="" />
                        <h4>Green Salad</h4>
                        <p>A salad combined witha deliciouscut of bacon and mixed with tastyand fresh sesome oil.</p>
                    </div>
                </Grid>
                <Grid items md={4} sm={12} xs={12}>
                    <div className="box">
                        <img src={car8} alt="" />
                        <h4>Green Salad</h4>
                        <p>A salad combined witha deliciouscut of bacon and mixed with tastyand fresh sesome oil.</p>
                    </div>
                </Grid>
                <div className="push">
                    <button className='BgGreen'>View All</button>
                </div>
            </Grid>
        </Container>
    </div>
  )
}

export default Center