import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import BlogGrid from '../components/blog/BlogGrid';
import { getAllPosts } from "../lib/index";
import dynamic from "next/dynamic";
import Head from 'next/head'

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}



export default function blog({posts}) {
    return (
       
             <React.Fragment>
               <Head>
        <title>STRAPSESSIONS </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                <Navbar />
                <Breadcrumb title="Blog" />
                <BlogGrid posts={posts}/>
                <Facility />
                <Footer />
            </React.Fragment>
        
    )
}
