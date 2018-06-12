import React from 'react';
import Link from 'gatsby-link';

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <div>
            <Link to="/blog">Retour</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posté par {post.frontmatter.author} le {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>   
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} }) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`