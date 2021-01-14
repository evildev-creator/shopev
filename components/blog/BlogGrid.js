import React, { Component } from 'react';
import Link from 'next/link';
import moment from "moment";

export class BlogGrid extends Component {
    render() {
        let { posts } = this.props;
        return (
            <section className="news-area ptb-60">
                <div className="container">
               
                    <div className="row"> 
                    {posts?.map(({ fields }) => (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href={`/blog/${fields.slug}`}>
                                        <a><img src={fields.coverImage.fields.file.url} alt="image" /></a>
                                    </Link>

                                    
                                </div>

                                <div className="blog-post-content">
                                    <span className="date"> {moment(fields.date).format("MMMM Do YYYY")}</span>
                                    <h3>
                                        <Link href={`/blog/${fields.slug}`}>
                                            <a>{fields.title}</a>
                                        </Link>
                                    </h3>
                                    <p>{fields.subTitle}</p>

                                    <Link href={`/blog/${fields.slug}`}> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogGrid;
