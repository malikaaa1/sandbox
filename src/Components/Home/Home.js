import React from "react";
import Content from "./Content";
import Accardion from "../Header/Accardion";
import { Grid } from "@mui/material";
import Billboards from "./Billboards/Billboards";
import Video from "./Video/Video";

const Home = () => {
  return (
    <>
      <Video />
      <Grid container spacing={3}>
        <Accardion />
        <Content />
      </Grid>
      <Billboards />
    </>
  );
};

export default Home;
