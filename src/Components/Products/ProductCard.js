import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { white } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./productCard.css";
import { fontSize } from "@mui/system";
import { Bolt } from "@mui/icons-material";
import { productsContext } from "../../context/ProductContext";
import { checkProductInCart } from "../../helpers/cartFunctions";

const ProductCard = ({ item }) => {
  const { addProductToCart } = useContext(productsContext);

  return (
    <Grid item xs={4}>
      <Card className="card cardCont" sx={{ ml: 1 }}>
        <div className="dws-wrapper">
          <div>
            <CardMedia
              className="card"
              component="img"
              height="auto"
              image={item.image}
              alt={item.title}
            />
          </div>
          <Link to={`/product/${item.id}`} style={{ color: "inherit" }}>
            <div class="dws-text">
              <h3>Learn more</h3>
            </div>
          </Link>
        </div>
        <CardContent className="card">
          <p className="cardTitle">{item.title}</p>
        </CardContent>
        {item.salePrice !== "" ? (
          <CardContent className="card">
            <Typography sx={{ fontSize: 22 }} className="card" variant="body2">
              ${item.salePrice}
            </Typography>
          </CardContent>
        ) : (
          <CardContent className="card">
            <Typography sx={{ fontSize: 22 }} className="card" variant="body2">
              ${item.price}
            </Typography>
          </CardContent>
        )}
        <CardActions
          className="card"
          disableSpacing
          sx={{ justifyContent: "space-around" }}
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="error" />
          </IconButton>
          <IconButton
            onClick={() => addProductToCart(item)}
            color={checkProductInCart(item.id) ? "secondary" : "primary"}
            aria-label="share"
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Button variant="contained">
            <Link to={`/product/${item.id}`} style={{ color: "inherit" }}>
              Learn more
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
