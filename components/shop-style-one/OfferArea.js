import React, { Component } from 'react';
import Link from 'next/link';

class OfferArea extends Component {
    render() {
        return (
            <section className="offer-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/offer-women.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Firearms</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Firearms</h3>

                                    <ul>
                                    <li>
                                    <Link href="/semi-automatic">
                                      <a> Semi-Automatic </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/revolver">
                                      <a> Revolver </a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/ar-ak-pistols">
                                      <a>AR/AK Pistols Tactical</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/lever-action-handguns">
                                      <a>Lever Action</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/derringer">
                                      <a> Derringer</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/ars">
                                      <a> ARs</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/aks">
                                      <a> AKs</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/bolt-action-rifles">
                                      <a> Bolt Action</a>
                                    </Link>
                                  </li>

                                  
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/offer.png")} alt="image" />

                                <div className="category">
                                    <h4>Ammunition</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Ammunition</h3>

                                    <ul>
                                    <li>
                                    <Link href="/rim">
                                      <a>RIM</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/handgun-ammunition">
                                      <a>Fire Handgun</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/rifle-ammunition">
                                      <a>Rifle</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>shotgun</a>
                                    </Link>
                                  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="offer-box">
                                <img src={require("../../images/offer-men.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Optics</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Optics</h3>

                                    <ul>
                                    <li>
                                    <Link href="/rifle-scopes">
                                      <a>Rifle Scopes</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/red-dot-optics">
                                      <a>Red Dot Optics</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/night-vision-thermal">
                                      <a>Night Vision / Thermal</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/binoculars">
                                      <a> Binoculars</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/range-finders">
                                      <a>Range Finders</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/handgun-sights">
                                      <a>Handgun Sights</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/flash">
                                      <a>  FLASH 
   </a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/lights-weapon">
                                      <a> Lights Weapon
   </a>
                                    </Link>
                                  </li>

                                 

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferArea;
