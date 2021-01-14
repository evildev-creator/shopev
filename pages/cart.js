import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CartContent from '../components/cart/CartContent';
import Head from 'next/head'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
        <title>STRAPSESSIONS </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                <Navbar />
                <Breadcrumb title="Cart" />
                <CartContent />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
