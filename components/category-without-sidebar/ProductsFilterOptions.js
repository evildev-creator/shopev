import React, { Component } from 'react';
import Link from 'next/link';
import LeftFilter from '../Modal/LeftFilter';

class ProductsFilterOptions extends Component {

    state = {
        display: false
    };

    handleGrid = (evt, e) => {
        this.props.onClick(e);
        let i, aLinks;

        aLinks = document.getElementsByTagName("a");
        for (i = 0; i < aLinks.length; i++) {
            aLinks[i].className = aLinks[i].className.replace("active", "");
        }

        evt.currentTarget.className += " active";
    }

    handleLeftFilter = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="products-filter-options">
                    <div className="row align-items-center">
                        <div className="col d-flex">
                            <span>
                                <Link href="#">
                                    <a 
                                        onClick={e => {
                                            e.preventDefault();
                                            this.handleLeftFilter()
                                        }}
                                    >
                                        <i className="fas fa-filter"></i> Filter
                                    </a>
                                </Link>
                            </span>

                            <span>View:</span>

                            <div className="view-list-row">
                                <div className="view-column">
                                    <Link href="#">
                                        <a 
                                            className="icon-view-two"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-col-two")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="icon-view-three"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-col-three")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="icon-view-four active"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-col-four")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="view-grid-switch"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-row-view")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>
                {this.state.display ? <LeftFilter onClick={this.handleLeftFilter} /> : ''}
            </React.Fragment>
        );
    }
}

export default ProductsFilterOptions;
