import React from 'react'
import { Container, Grid } from '@mui/material'
import header from "../../assets/header.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid md={6} ms={12} xs={12}>
                        <div className="left">
                            <h1>Just Eat healthy food to live a healthier life</h1>
                            <p className="text">Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future</p>
                            <button className='BgGreen'>Order Now</button>
                        </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={header} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header