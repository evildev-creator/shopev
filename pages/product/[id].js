import React from 'react';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-one/Facility';
import Head from 'next/head'

const Product = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(router.query);
    const product= useSelector((state) => state.products.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.semiAuth.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.revolver.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.ak.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.tactical.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.leverAction.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.derringer.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.ars.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.aks.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.boltAction.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.hunting.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.rftactical.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.selfdefense.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.rim.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.topSellers.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.handAmmuni.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.rifleammuni.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.riflescope.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.redDotscope.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.nightvision.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.binoculars.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.rangefinder.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.handgunsight.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.flash.find(item => item.id === parseInt(id)))
    || useSelector((state) => state.weaponlights.find(item => item.id === parseInt(id)))

    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return (
        <React.Fragment>
            <Head>
        <title>{product.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Navbar />
            <Breadcrumb title={product.title} />

            <section className="products-details-area pt-60">
                <div className="container">
                    <div className="row">
                       
                    <ProductImage product={product} />
                        <ProductContent product={product} />
                        <DetailsTab product={product} />
                        
                    </div>
                </div>

                <RelatedProducts products={products} CompareProducts={addedItemsToCompare} />

                <Facility />
            </section>

            <Footer />
        </React.Fragment>
    );
}

export default Product