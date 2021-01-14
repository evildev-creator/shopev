
import Link from 'next/link';
import React from 'react'

export default function DetailsContent( description, image, title,body) {
    return (
        <section className="blog-details-area ptb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 offset-lg-2 offset-md-0">
    <h1>{title}</h1>
                    <div className="blog-details">
                        <div className="article-img">
                            <img src={image} alt={description} />
                        </div>

                        <div className="article-content">
                            
                              {body}
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
    )
}


