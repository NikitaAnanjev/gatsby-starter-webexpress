import React, {useEffect, useRef} from "react"
import {Link} from "gatsby";
import gsap from "gsap";
import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    handleCityReturn,
    handleCity,
    staggerRevealClose
} from "./Animations";

import dallas from "../images/imageone.jpg";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";


const cities = [
    {name: "Aalborg", image: dallas, link: "/tags/color"},
    {name: "Copenhagen", image: austin, link: "/tags/green"},
    {name: "Aarhus", image: newyork, link: "/tags/pink"},
    {name: "Prague", image: sanfrancisco, link: "/tags/retrowave"},
    {name: "Riga", image: beijing, link: "/tags/vaporwave"}
];


const HamburgerMenu = ({state}) => {

// vARS FOR Animated DOM NODES
    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let cityBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let info = useRef(null)


    useEffect(() => {
        if (state.clicked === false) {
            //    Close menu
            // staggerRevealClose(revealMenu, revealMenuBackground);
            gsap.to([revealMenu, revealMenuBackground],
                {
                    duration: 0.8,
                    height: 0,
                    ease: "power3.inOut",
                    stagger: {
                        amount: 0.07
                    }
                });
            gsap.to(menu, {duration: 1, css: {display: "none"}})
            // menu.style.display = 'none'
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            // OPEN menu
            gsap.to(menu, {duration: 0, css: {display: "block"}})
            gsap.to([revealMenuBackground, revealMenu], {duration: 0, opacity: 1, height: '100%'})

            staggerReveal(revealMenuBackground, revealMenu);
            fadeInUp(info);
            staggerText(line1.current, line2.current, line3.current);
        }
    }, [state]);


    return (

        <div ref={el => (menu = el)} className="hamburger-menu">
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div ref={el => (cityBackground = el)} className="menu-city-background">

                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li><Link ref={line1} to={`/about`}>About</Link></li>
                                    <li><Link ref={line2} to={`/work`}>Work</Link></li>
                                    <li><Link ref={line3} to={`/contact`}>Contact</Link></li>

                                    {/*<li  ><Link to={`/about`}> <span ref={el => (line1 = el)} >About</span></Link></li>*/}
                                    {/*<li  ><Link to={`/work`}> <span ref={el => (line2 = el)} >Work</span></Link></li>*/}
                                    {/*<li  ><Link to={`/contact`}> <span ref={el => (line3 = el)} >Contact</span></Link></li>*/}


                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className="info">
                                <h3>Our Promiss</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium beatae, dolorem dolorum in inventore nisi!
                                    Autem commodi eligendi error eum,
                                    maxime nesciunt quae reprehenderit rerum voluptatum.
                                </p>
                            </div>
                            <div className='locations'>




                                {/* Returning the list of cities */}
                                {cities.map(el => (
                                    <span
                                        key={el.name}

                                        onMouseEnter={() => handleCity(el.image, cityBackground)}
                                        onMouseOut={() => handleCityReturn(cityBackground)}>
                                        <Link to={el.link}>
                                         {el.name}
                                        </Link>
                                     </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default HamburgerMenu