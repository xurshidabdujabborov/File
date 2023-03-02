import React from "react";
import { Container, Grid } from "@mui/material";
import fresh from "../../assets/fresh.png";
import "./Fresh.css";

function Fresh() {
  return (
    <div className="Fresh">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={6} sm={12} xs={12}>
            <div className="img">
            <img src={fresh} alt="" />
            </div>
          </Grid>
          <Grid items md={6} sm={12} xs={12}>
             <div className="text">
             <h2 className="title">
              Fresh Vegetables
              <br /> Every Day
            </h2>
            <p className="text">
              Healthy life as informed declared we enjoy the margaret. Joy
              horrible moreover man feelings own shy. Request norland neither
              mistake for yet. Between the for morning assured country believe.
            </p>
            <button className="BgGreen">Learn More</button>
             </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Fresh;
