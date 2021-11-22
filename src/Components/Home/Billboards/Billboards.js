import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
export default function Billboards() {
  const theme = useTheme();

  return (
    <Grid sx={{ ml: 15, mr: 10, mt: 3, mb: 10 }} className="grid" >
      <Card  sx={{ display: "flex", width: 1100, height: 500 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ fontSize: 50, fontWeight: 900, color: "error" }}
            >
              Let their big ideas start here.
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Про автора вы можете посмотреть на офицальном сайте Apple 
             
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{mt:20, ml:5, fontSize: 19}}
            >
              <a href="https://www.apple.com/ru/education/">Apple store</a>
             
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 500, pl: 20 }}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-snowflake-3-202111?wid=405&hei=404&fmt=jpeg&qlt=95&.v=1635286447000"
          alt="Live from space album cover"
        />
      </Card>
      <Card sx={{ display: "flex", width: 1100, height: 500, mt: 5 }}>
        {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}> */}
        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image="https://images.samsung.com/is/image/samsung/ru-feature-track-your-every-move-with-ease-157894870?$FB_TYPE_A_JPG$"
          alt="Live from space album cover"
        />
        {/* </Box> */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ fontSize: 50, fontWeight: 900, color: "error" }}
            >
              Let their big ideas start here.
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Про автора вы можете посмотреть на офицальном сайте Samsung 
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{mt:20, ml:5, fontSize: 19}}
            >
              <a href="https://www.samsung.com/us/search/searchMain/?listType=g&searchTerm=Galaxy%20Z%20Flip3%205g">Samsung store</a>
             
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
