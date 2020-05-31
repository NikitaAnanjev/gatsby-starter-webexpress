import React from "react";
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImgOne: file(relativePath: { eq: "imageone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bannerImgTwo: file(relativePath: { eq: "imagetwo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bannerImgThree: file(relativePath: { eq: "photoresume2s.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Creative web</div>
          <div className="main-image">
            <Img fluid={data.bannerImgThree.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>
      <div className="fixed-misc"> Something to think</div>
    </div>
  );
};

export default Banner;
