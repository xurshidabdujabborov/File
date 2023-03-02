import React from 'react'
import { Container , Grid } from '@mui/material'
import logo from "../../assets/logo.png"
import "./Footer.css"

function Footer() {
  return (
    <footer>
        <Container maxWidth="xl">
            <Grid container alignItems={"center"}>
                <Grid items md={3} sm={6} xs={12}>
                    <div className="left">
                        <img src={logo} alt="" />
                        <p>
                        On formed merits hunted unable <br /> merely by mr whence or.
                        </p>
                    </div>
                </Grid>
                <Grid items md={3} sm={6} xs={12}>
                    <ul>
                        <h4>Home</h4>
                        <li>
                            <a href="#">Company</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Team</a>
                        </li>
                    </ul>
                </Grid>
                <Grid items md={3} sm={6} xs={12}>
                    <ul>
                        <h4>About</h4>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </Grid>
                <Grid items md={3} sm={6} xs={12}>
                    <ul>
                        <h4>Partner</h4>
                        <li>
                            <a href="#">Business</a>
                        </li>
                        <li>
                            <a href="#">Plan</a>
                        </li>
                        <li>
                            <a href="#">Marketing</a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
            <div className="green">
                    <span>© Copyright 2020 by ui.desk. All right reserved.</span>
            </div>
    </footer>
  )
}

export default Footer