import React, { Component } from 'react';
import Link from 'next/link';

const useTagFunc = () => {
    let useTag = '<use xlink:href="#star" />';
    return <svg className="star" dangerouslySetInnerHTML={{__html: useTag }} />;
}

class DetailsTab extends Component {
    

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="col-lg-12 col-md-12">
                <div className="tab products-details-tab">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul className="tabs">
                                <li 
                                    onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                                    className="current"
                                >
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Description
                                    </span>
                                </li>
                                
                               

                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab3')}}>
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Shipping
                                    </span>
                                </li>
                                
                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab4')}}>
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Why Buy From Us
                                    </span>
                                </li>

                                
                            </ul>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="products-details-tab-content">
        <p>{this.props.product.description}</p>

                                        
                                    </div>
                                </div>

                                

                                <div id="tab3" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Shipping</td>
                                                        <td>This item Ship to USA</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Delivery</td>
                                                        <td>
                                                            <br />
                                                            Will usually ship within 1 bussiness day.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab4" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <p>Here are 5 more great reasons to buy from us:</p>

                                        <ol>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                                            <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                                            <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                            <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        </ol>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsTab;
