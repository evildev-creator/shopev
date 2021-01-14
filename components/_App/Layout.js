import React from 'react';
import Head from 'next/head';
import GoTop from '../Shared/GoTop';
import { ToastContainer, Slide } from 'react-toastify';
import ReactTooltip from 'react-tooltip'
import Twarkto from '../Twarkto';
import Analytics from '../googleanalytics';

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <ReactTooltip  />
            <Head>
                <title>Strapsessions: The #1 Dealer in FireArms</title>
                <meta name="description" content=" The largest online gun stores with the selection of handguns, rifles, shotguns, ammo, optics & firearm accessories." />
                <meta name="og:title" property="og:title" content="Biggest Online gun deals"></meta>
                <meta name="twitter:card" content="Strapsessions - Biggest Online gun deals"></meta>
                <link rel="canonical" href="https://strapsessions.com"></link>
                <meta property="og:image" content="https://pixabay.com/get/54e4d747485bae14f1dc8460da29317e1038dfe4565975_640.jpg" />
            </Head>
            <Analytics/>
            { children }
            <Twarkto/>
            <ToastContainer transition={Slide} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}
export default Layout;