import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Content from '../components/compare/Content';
import { useSelector } from 'react-redux'
import Head from 'next/head'

const Compare = () => {
    const products = useSelector((state) => state.addedItemsToCompare)
    return (
        <React.Fragment>
            <Head>
        <title>STRAPSESSIONS </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Navbar />
            <Breadcrumb title="Compare" />
            <Content compare_products={products} />

            <Facility />
            <Footer />
        </React.Fragment>
    );
}

export default Compare;