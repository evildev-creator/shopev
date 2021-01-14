import React, { Component } from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import Facility from '../components/Common/Facility';
import LeftSidebar from '../components/Sidebar/LeftSidebar';
import ProductsFilterOptions from '../components/Common/ProductsFilterOptions';
import ProductsCard from '../components/products/ProductsCard';
import OfferArea from '../components/shop-style-one/OfferArea';
import Head from 'next/head'

const hookClass = (props) => {
    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return <Index {...props} products={products} CompareProducts={addedItemsToCompare} />
}

class Index extends Component {

    state = {
        gridClass: ''
    }

    handleGrid = (e) => {
        this.setState({
            gridClass: e
        });
    }

    render() {
        let { gridClass } = this.state;
        let { products, CompareProducts } = this.props;
        return (
            <React.Fragment>
                <Head>
        <title>STRAPSESSIONS </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                <Navbar />
                <Breadcrumb title="SHOP" />

                <OfferArea />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Featured Products</h2>
                        </div>

                        <div className="row">
                           

                            <div className="col-lg-8 col-md-12">
                                <ProductsFilterOptions onClick={this.handleGrid} />

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <ProductsCard products={products} CompareProducts={CompareProducts} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Facility />

                <Footer />
            </React.Fragment>
        );
    }
}

export default hookClass;
