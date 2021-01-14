import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Cart from "../Modal/Cart";

class MegaMenuTwo extends Component {
  state = {
    display: false,
    searchForm: false,
    collapsed: true,
  };

  handleCart = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    let { products } = this.props;
    return (
      <React.Fragment>
        <div className="navbar-area bg-black">
          <div id="navbar" className="comero-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src={require("../../images/white-logo.png")}
                      alt="logo"
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item p-relative">
                      <Link href="/">
                        <a className="nav-link active">Home</a>
                      </Link>
                    </li>

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          FIREARMS <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">HANDGUNS</h6>

                                <ul className="megamenu-submenu">
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
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">RIFLES</h6>

                                <ul className="megamenu-submenu">
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

                                  <li>
                                    <Link href="/hunting-rifles">
                                      <a> Hunting</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/tactical-rifles">
                                      <a>Tactical</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title"> SHOTGUNS</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/self-defense-shotguns">
                                      <a>Self Defense
        </a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/sporting-shotguns">
                                      <a>Sporting
        </a>
                                    </Link>
                                  </li>

                          

                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          OPTICS <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                              <h6 className="submenu-title">Scopes</h6>

<ul className="megamenu-submenu">
  <li>
    <Link href="/rifle-scope">
      <a>Rifle Scopes</a>
    </Link>
  </li>

  <li>
    <Link href="/red-dot-scope">
      <a>Red Dot Optics</a>
    </Link>
  </li>

  <li>
    <Link href="/night-vision">
      <a>Night Vision / Thermal</a>
    </Link>
  </li>

  <li>
    <Link href="/binoculars">
      <a> Binoculars</a>
    </Link>
  </li>

  <li>
    <Link href="/range-finder">
      <a>Range Finders</a>
    </Link>
  </li>

  
 
</ul>
</div>

<div className="col">
<h6 className="submenu-title"> SIGHTS</h6>

<ul className="megamenu-submenu">
  <li>
    <Link href="/handgun-sight">
      <a>Handgun Sights</a>
    </Link>
  </li>

  

</ul>
</div>

<div className="col">
<h6 className="submenu-title">Accessories</h6>

<ul className="megamenu-submenu">
  <li>
    <Link href="/flash">
      <a>  FLASH 
</a>
    </Link>
  </li>

  <li>
    <Link href="/weapon-lights">
      <a> LIGHTS WEAPON 
</a>
    </Link>
  </li>

  

  
</ul>
</div>


</div>
</div>
</li>
</ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          AMMUNITION <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                

                                
                              <ul className="megamenu-submenu">
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

                                 

                                
                                </ul>
                              </div>
                              <div className="col">
                                <h6 className="submenu-title"> </h6>

                                <ul className="megamenu-submenu">
                                 

                                  
                                
                                </ul>
                              </div>
                              <div className="col">
                                <h6 className="submenu-title"> </h6>

                                <ul className="megamenu-submenu">
                                 

                                  
                                
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title"> </h6>

                                <ul className="megamenu-submenu">
                               

                                  
                                </ul>
                              </div>
                              

                              <div className="col">
                                <ul className="megamenu-submenu">
                                  <li>
                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/ammunition/rim/cci-74.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Top Trending</h4>
                                      </div>

                                      <a href="/product/235"></a>
                                    </div>

                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/ammunition/handgun/1410991550-90282-9mm-luger-147-gr-xtp.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Popular Products</h4>
                                      </div>

                                      <a href="/product/215"></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    
                    <li className="nav-item p-relative">
                      <Link href="/blog">
                        <a className="nav-link">
                          Blog
                        </a>
                      </Link>

                      
                    </li>
                  </ul>

                  <div className="others-option">
                    <div className="option-item">
                      <i
                        onClick={this.handleSearchForm}
                        className="search-btn fas fa-search"
                        style={{
                          display: this.state.searchForm ? "none" : "block",
                        }}
                      ></i>

                      <i
                        onClick={this.handleSearchForm}
                        className={`close-btn fas fa-times ${
                          this.state.searchForm ? "active" : ""
                        }`}
                      ></i>

                      <div
                        className="search-overlay search-popup"
                        style={{
                          display: this.state.searchForm ? "block" : "none",
                        }}
                      >
                        <div className="search-box">
                          <form className="search-form">
                            <input
                              className="search-input"
                              name="search"
                              placeholder="Search"
                              type="text"
                            />
                            <button className="search-button" type="submit">
                              <i className="fas fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="option-item">
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleCart();
                          }}
                        >
                          Cart({products.length}){" "}
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {this.state.display ? <Cart onClick={this.handleCart} /> : ""}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default connect(mapStateToProps)(MegaMenuTwo);
