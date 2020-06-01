import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const Contact = ({ data }, location) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout title={siteTitle}>
            <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

            <article className="post-content page-template no-image">
                <div className="post-content-body">
                    <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
                        I have more then 4 years of experience in webdesign and development.
                        Always look for new features.
                    </h2>
                    <figure className="kg-card kg-image-card kg-width-full">
                        <Img
                            fluid={data.workPageImage.childImageSharp.fluid}
                            className="kg-image"
                        />
                        <figcaption>Indexed workplace</figcaption>
                    </figure>
                    <h3 id="dynamic-styles">Dynamic styles</h3>
                    <p>
                        London comes with photo-centric main layout best suited to
                        photography, graphics portfolios and other image-heavy uses.
                    </p>
                    <p>
                        Both post and page templates are light and minimal, with all the
                        focus on the content while the design of the theme gets out of the
                        way. Beneath the hood, London enjoys the full power of the{" "}
                        <a href="https://docs.ghost.org/api/handlebars-themes/">
                            Ghost Handlebars Theme API
                        </a>{" "}
                        to provide limitless customisation options and dynamic styles.
                    </p>
                    <p>
                        Don't forget to check out the{" "}
                        <a href="https://docs.ghost.org/integrations/">
                            Ghost Integrations Directory
                        </a>{" "}
                        for more ways to integrate Ghost with your favourite services.
                    </p>
                </div>
            </article>
        </Layout>
    );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    workPageImage: file(relativePath: { eq: "imagetwo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
    <StaticQuery
        query={indexQuery}
        render={data => (
            <Contact location={props.location} data={data} {...props} />
        )}
    />
);
