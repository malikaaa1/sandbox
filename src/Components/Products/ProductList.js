import React, { useEffect, useContext, useState } from "react";
import "./Pagination.css";
import { productsContext } from "../../context/ProductContext";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item) => (
      <ProductCard key={item.id} item={item} style={{ margin: "20px" }} />
    ));

  return (
    <>
      <Grid container spacing={2}>
        {displayProducts}
      </Grid>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default ProductsList;
