// import { Grid, Paper } from '@mui/material';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProductList from '../Products/ProductList';

// const Content = () => {
//     return (
//         <Grid item md={9}>
//             <Paper>
// <ProductList />
//             </Paper>
//         </Grid>
//     );
// };

// export default Content;

import React from "react";
import ProductsList from "../Products/ProductList";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, Pagination } from "@mui/material";
import "./Home.css";

const Content = () => {
  return (
    <Grid item md={9} mt={6}>
      <section className="product__block">
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            color="GrayText"
          >
            Products
          </Typography>
          <ProductsList />
        </Container>
      </section>
    </Grid>
  );
};

export default Content;
