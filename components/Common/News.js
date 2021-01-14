import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
}

class News extends Component {
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        let { posts } = this.props;
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> Strapsession Blogs</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="news-slides owl-carousel owl-theme"
                        {...options}
                    >
                       
            {posts?.map(({ fields }) => (
              
                
               
               
           
                        <div className="single-news-post">
                            <div className="news-image">
                                <Link href={`/blog/${fields.slug}`}>
                                    <a>
                                        <img src={fields.coverImage.fields.file.url} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="news-content">
                                <h3>
                                    <Link href={`/blog/${fields.slug}`}>
                                        <a>{fields.title}</a>
                                    </Link>
                                </h3>
                                <span className="author">By <a href="#">{fields.author.fields.name}</a></span>
                                <p>{fields.subTitle}</p>
                                <Link href={`/blog/${fields.slug}`}>
                                    <a className="btn btn-light">Read More</a>
                                </Link>
                            </div>
                        </div> 
                        ))}
          

                       
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default News;
