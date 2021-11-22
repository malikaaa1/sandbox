import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  Paper,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { productsContext } from "../../context/ProductContext";
import history from "../../helpers/history";
import "./Navbar.css";

const Sidebar = () => {
  const { getProducts } = useContext(productsContext);
  const [brand, setBrand] = useState(getBrand());

  function getBrand() {
    const search = new URLSearchParams(history.location.search);
    return search.get("brand");
  }
  function handleChangeBrand(e) {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("brand")}`);
      getProducts();
      return;
    }

    const search = new URLSearchParams(history.location.search);
    search.set("brand", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(search.toString());
    setBrand(e.target.value);
  }

  return (
    <Grid item md={0}>
      <Paper className="filterMain">
        <FormControl component="fieldset">
          {/* <FormLabel component="legend" className="label">Выбрать модель телефона</FormLabel> */}
          <RadioGroup
            value={brand}
            onChange={handleChangeBrand}
            aria-label="brand"
            name="brand"
            className="filterDown"
          >
            <FormControlLabel value="Apple" control={<Radio />} label="Apple" />
            <FormControlLabel
              value="Samsung"
              control={<Radio />}
              label="Samsung"
            />
            <FormControlLabel
              value="Xiaomi"
              control={<Radio />}
              label="Xiaomi"
            />
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All Brands"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
