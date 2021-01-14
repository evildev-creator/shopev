import React, { Component } from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import ProductsFilterOptions from '../components/category-without-sidebar/ProductsFilterOptions';
import ProductsCard from '../components/products/ProductsCardTwo';
import Head from 'next/head'

const hookClass = (props) => {
    const products = useSelector((state) => state.aks)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return <Index {...props} products={products} CompareProducts={addedItemsToCompare} />
}

class Index extends Component {

    state = {
        gridClass: 'products-col-four'
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
        <title>STRAPSESSIONS ARS Riffles</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                <Navbar />
                
                
                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>STRAPSESSIONS</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ProductsFilterOptions onClick={this.handleGrid} />

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <ProductsCard products={products} CompareProducts={CompareProducts} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default hookClass;
