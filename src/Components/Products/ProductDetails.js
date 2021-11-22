import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../context/ProductContext";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MemoryIcon from "@mui/icons-material/Memory";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Paper from "@mui/material/Paper";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditProducts from "./EditProducts";
import "./Product.css";
import { authContext } from "../../context/AuthContext";
import { checkProductInCart } from "../../helpers/cartFunctions";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let params = useParams().id;
  const { getProductDetails, productDetails, clickDelete, addProductToCart } =
    useContext(productsContext);
 
    const {user}=useContext(  authContext)



  useEffect(() => {
    getProductDetails(params);
  }, []);

  // const {
  //   handleLogout,
  //   user: { email },
  // } = useAuth();
  // console.log({ email });

  const [openmodal, setOpenmodal] = useState(false);

  return (
    <section className="product__block-details">
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 10 }} item xs={6}>
            {
              <img
                src={productDetails.image}
                alt={productDetails.title}
                style={{ width: "85%" }}
              />
            }
          </Grid>

          <Grid item xs={6}>
            {productDetails.memory ? (
              <Typography
                variant="h6"
                gutterBottom
                component="h3"
                sx={{
                  fontWeight: 300,
                  letterSpacing: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKInmxPDWs2iws5MMc8PZmNUiYCPyZdslv-fsNTkr8y-au62yyhmRX54yz-Vvx_7bv9PY&usqp=CAU"
                  alt="memoryIcon"
                  style={{
                    width: "30px",
                    marginRight: "10px",
                  }}
                />
                {productDetails.memory} GB
              </Typography>
            ) : null}
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              sx={{ fontWeight: 700, letterSpacing: 2 }}
            >
              {productDetails.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {productDetails.description}
            </Typography>
            {productDetails.discountInPercent ? (
              <Alert
                icon={<LoyaltyRoundedIcon fontSize="inherit" />}
                severity="success"
                sx={{ fontWeight: 700, mt: "20px" }}
              >
                Скидка : {productDetails.discountInPercent} %
              </Alert>
            ) : null}
            <Box
              component="div"
              sx={{
                p: 2,
                border: "1px dashed grey",
                display: "flex",
                alignItems: "center",
                mt: "20px",
              }}
            >
              {productDetails.salePrice ? (
                <>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 300,
                      letterSpacing: 2,
                      textDecoration: "line-through",
                      marginRight: "20px",
                    }}
                  >
                    {productDetails.price} с.
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 700, letterSpacing: 2 }}
                  >
                    {productDetails.salePrice} с.
                  </Typography>
                </>
              ) : (
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 2,
                    marginRight: "20px",
                  }}
                >
                  {productDetails.price} с.
                </Typography>
              )}
            </Box>
            <Button
              variant="contained"
              color={
                checkProductInCart(productDetails.id) ? "secondary" : "success"
              }
              startIcon={<AddShoppingCartIcon />}
              fullWidth={true}
              sx={{ mt: "20px", height: "50px" }}
              onClick={() => addProductToCart(productDetails)}
            >
              Add cart
            </Button>
            <Alert
              severity="info"
              variant="outlined"
              sx={{ fontWeight: 700, mt: "20px" }}
            >
              Phone number: {productDetails.phone}
            </Alert>
            {user.email ? (
              <Link to="/buy">
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<AddShoppingCartIcon />}
                  fullWidth={true}
                  sx={{ mt: "20px", height: "50px" }}
                >
                  Заказать
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button
                  variant="contained"
                  color="error"
                  fullWidth={true}
                  sx={{ mt: "20px", height: "50px" }}
                >
                  You are not logged in
                </Button>
              </Link>
            )}
            {user.email === "mirdin@mail.ru" ? (
              <>
                <Grid style={{ display: "flex" }}>
                  <Grid item xs={6}>
                    <Link to="/">
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteForeverIcon />}
                        fullWidth={true}
                        sx={{ mt: "20px", height: "50px" }}
                        onClick={() => clickDelete(params)}
                      >
                        Удалить
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<DeleteForeverIcon />}
                      fullWidth={true}
                      sx={{ mt: "20px", height: "50px" }}
                      onClick={() => setOpenmodal(!openmodal)}
                    >
                      Редактировать
                    </Button>
                  </Grid>
                </Grid>
                {openmodal && <EditProducts id={productDetails.id} />}
              </>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetails;
