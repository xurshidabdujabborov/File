import React from 'react'
import { Container , Grid } from '@mui/material'
import "./Contact.css"

function Contact() {
  return (
    <div className='Center'>
        <Container maxWidth="xl">
            <div className="card">
                <h2 className="title">Subscribe to the Newsletter</h2>
                <p className="text">Enter your email below to get our daily offers and news</p>
                <form action="#">
                    <input type="text" placeholder='Enter your email.' />
                    <button className='BgGreen'>Get Started</button>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Contact