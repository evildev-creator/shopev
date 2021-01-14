import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
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
                <Breadcrumb title="Contact Us" />
                <section className="faq-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Frequently Asked Questions</h2>
                        </div>

                        <div className="faq-accordion">
                            <ul className="accordion">
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What Shipping Methods are Available?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            USPS First Class,
USPS First Class International,
USPS Priority,
USPS MediaMail,
UPS Two-Day,
UPS Ground,
Fedex Overnight </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                
                                
                                
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What payment methods can I use? 
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <ul>
                                            <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                            <li>Cryptocurrency Fast Checkout option, allowing you to securely purchases a product.</li>
                                            <li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                             </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What are shipping times and costs? 
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            All products Ship Within 24hrs From Purchase and cost $6   </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                
                            </Accordion>
                            </ul>
                        </div>
                    </div>
                </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;