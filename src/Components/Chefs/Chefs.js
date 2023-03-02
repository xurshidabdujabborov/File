import React from 'react'
import { Container , Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import chef from "../../assets/chefs.png"
import "./Chefs.css"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Chefs() {
  return (
    <div className='Chefs'>
        <Container maxWidth="xl">
            <Grid container alignItems={"center"}>
                <Grid items md={6} sm={12} xs={12}>
                    <div className="left">
                        <h2 className="title">Cooked by theBest Chefs</h2>
                        <p className="text">
                        Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye.
                        </p>
                        <div className="flex">
                        <p className='text'> <Checkbox {...label} defaultChecked /> A guaranteed delicious meal</p>
                        <p className='text'> <Checkbox {...label} defaultChecked /> A guaranteed delicious meal   </p>
                        <p className='text'> <Checkbox {...label} defaultChecked /> A guaranteed delicious meal   </p>
                        </div>
                    </div>
                </Grid>
                <Grid items md={6} sm={12} xs={12}>
                    <div className="img">
                        <img src={chef  } alt="" />
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Chefs