import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

import DetailsContent from '../components/blog/DetailsContent';
import Head from 'next/head'

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
        <title>STRAPSESSIONS  Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                <Navbar />
                <Breadcrumb title="Styling White Jeans after Labor Day" />
                <DetailsContent />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetails;