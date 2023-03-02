import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from "../../assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={3} sm={12} xs={12}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Grid>
          <Grid items md={5} sm={12} xs={12}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </Grid>
          <Grid items md={4} sm={12} xs={12}>
            <div className="right">
              <SearchIcon />
              <ShoppingCartIcon />
              <button>Order Now</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </nav>
  )
}

export default Navbar