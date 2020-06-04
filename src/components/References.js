import React from "react"


import {useStaticQuery, graphql, Link} from "gatsby";
import Img from "gatsby-image";


import php from "../images/newyork.webp";
import js from "../images/newyork.webp";
import css from "../images/newyork.webp";
import wordpress from "../images/newyork.webp";
import sass from "../images/beijing.webp";
import bootstrap from "../images/beijing.webp";
import reactjs from "../images/beijing.webp";
import psp from "../images/beijing.webp";
// import {handleCity, handleCityReturn} from "./Animations";

const icons = [
    {name: "PHP", image: php},
    {name: "JavaScript", image: js},
    {name: "CSS", image: css},
    {name: "WordPress", image: wordpress},
    {name: "SASS/LESS", image: sass},
    {name: "Bootstrap", image: bootstrap},
    {name: "React", image: reactjs},
    {name: "GraphicDesign", image: psp},
];


const References = () => {
    return (
        <div className="references">
            <div className="references__wrapper">
                {icons.map(el => (
                    <div className="references__wrapper__item"
                         style={{
                             backgroundImage: `url(${el.image})`
                         }}
                    >
                        {/*{el.image}*/}
                        <span>{el.name}</span>


                    </div>
                ))}
            </div>
        </div>
    )
}


export default References;