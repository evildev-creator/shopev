import React from "react";
import { useSelector } from "react-redux";
import NavbarTwo from "../components/Layout/NavbarTwo";
import BannerSlider from "../components/shop-style-five/BannerSlider";

import CategoryTypes from "../components/shop-style-five/CategoryTypes";
import ProductsOffer from "../components/shop-style-five/ProductsOffer";
import Partner from "../components/Common/Partner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layout/Footer";
import Products from "../components/shop-style-five/Products";
import { getAllPosts } from "../lib/index";
import dynamic from "next/dynamic";
import News from "../components/Common/News";
import TestimonialsTwo from "../components/Common/TestimonialsTwo";
import SpecialOffer from "../components/shop-style-nine/SpecialOffer";
import Head from 'next/head'

import Facility from "../components/Common/Facility";
export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
};

const Index = ({ posts }) => {
  const products = useSelector((state) => state.products);
  const topSellers = useSelector((state) => state.topSellers);
  const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare);
  return (
    <React.Fragment>
      <Head>
        <title>STRAPSESSIONS </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarTwo />
      <BannerSlider />

      <CategoryTypes />

      <Products products={topSellers} CompareProducts={addedItemsToCompare} />
      <Facility />
      <SpecialOffer products={products} CompareProducts={addedItemsToCompare} />
      <ProductsOffer />
      <News posts={posts} />
      <TestimonialsTwo />
      <Partner />
      <Subscribe />

      <Footer />
    </React.Fragment>
  );
};

export default Index;
