import React from 'react'
import { Container , Grid } from '@mui/material'
import card from "../../assets/card.png"
import card1 from "../../assets/card 1.png"
import card2 from "../../assets/card 2.png"
import "./Choose.css"

function Choose() {
  return (
    <div className='Choose'>
        <Container maxWidth="xl">
            <h2 className="title">Why Choose US?</h2>
            <p className="text">Organic food is grown without the use of synthetic chemicals</p>
            <Grid container alignItems={"center"} justifyContent={"center"}>
                <Grid items md={4} sm={12} xs={12}>
                    <div className="box">
                        <img src={card} alt="" />
                        <h4>Easy to order</h4>
                        <p>foods include fresh produce, <br /> meats as well as processed</p>
                    </div>
                </Grid>
                <Grid items md={4} sm={12} xs={12}>
                    <div className="box">
                        <img src={card1} alt="" />
                        <h4>Live Order</h4>
                        <p>foods include fresh produce, <br /> meats as well as processed</p>
                    </div>
                </Grid>
                <Grid items md={4} sm={12} xs={12}>
                    <div className="box">
                        <img src={card2} alt="" />
                        <h4>100% Organic</h4>
                        <p>foods include fresh produce, <br /> meats as well as processed</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Choose