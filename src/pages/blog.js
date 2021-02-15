import React from 'react'
import Layout from '../components/layout' // (../) means go up one directory
import { Link, graphql, useStaticQuery} from 'gatsby'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

function BlogPage(){
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
          sort: {
            fields: publishedDate,
            order: DESC
            }
        ){
          edges{
            node{
              title
              slug
              publishedDate (formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)
    return(
        <div>
            <Layout>
            <Head title="Blog"/>
              <div className={blogStyles.container}>
                <div className={blogStyles.blogTitle}>
                  <h1>Tutorials Blog</h1>
                </div>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => { // array of objects mapped to JSX. function (edge) called on time for each object
                        return( // this is hte jsx returns
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>

                </div>
            </Layout>
        </div>
    )
}

export default BlogPage