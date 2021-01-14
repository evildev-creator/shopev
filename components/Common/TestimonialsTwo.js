import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ]
}

class TestimonialsTwo extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="testimonials-area ptb-60 bg2">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?crop=entropy&cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fit=crop&fm=jpg&h=426&w=640" alt="image" />
                            </div>

                            <p>One of the great things about Strapsessions is that they not only have a huge selection of firearms, they also have tons of gun parts for those who want to customize their guns</p>

                            <div className="client-info">
                                <h4>Jason Black</h4>
                                <span>jason231@gmail.com</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../images/client2.jpg")} alt="image" />
                            </div>

                            <p>I have been dealing with Strapsessions since 2014 and I must say this is the best online company to deal with, I have tried others just to compare and no one compares to Strapsessions, fast shipping, great inventory and the best customer service. I had order a rifle and a week later I was sent a email saying it was out if stock, when I complained to Strapsessions about taking my money for a gun not in stock they explained due to many orders inventory was hard to keep up they rushed my refund and gave me $25 credit. This is the only online company i will deal with most others suck.</p>

                            <div className="client-info">
                                <h4>Michael G</h4>
                                <span>wanglucki@gmail.com</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../images/client3.jpg")} alt="image" />
                            </div>

                            <p>Strapsessions Gun Shop is the best shop around . Great selection , Range , and Knowledgeable Staff . Ashley, Amber are two ladies who know their guns both super helpful and such pleasant nice girls. Dan is just A pleasure to deal with very knowledgeable and a super guy . No reason to shop anywhere else . Oh also prices best as well Thanks Strapsessions</p>

                            <div className="client-info">
                                <h4> Shabbir</h4>
                                <span></span>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default TestimonialsTwo;
