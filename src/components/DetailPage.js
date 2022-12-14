import React from "react";
import MainDetails from "./DetailComponents/MainDetails";
import ProductDRequest from "./DetailComponents/ProductDRequest";
import RelatedProducts from "./DetailComponents/RelatedProducts";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

const DetailPage = () => {
  return (
    <div>
      <Nav overlay={false} />
      <MainDetails />
      <ProductDRequest />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default DetailPage;
