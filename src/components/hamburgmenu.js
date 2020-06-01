import React, {useEffect, useRef} from "react"
import {Link} from "gatsby";
import gsap from "gsap";

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

            gsap.to([revealMenu,revealMenuBackground],
                {
                    duration:0.8,
                    height: 0,
                    ease: "power3.inOut",
                    stagger:{
                        amount: 0.07
                    }
                });

            // menu.style.display = 'none'
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            // OPEN menu
            // menu.style.display = 'block'
        }
    })


    return (

        <div ref={el => (menu = el)} className="hamburger-menu">
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div className="menu-city-background">

                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li><Link ref={el => (line1 = el)} to={`/about`}>About</Link></li>
                                    <li><Link ref={el => (line2 = el)} to={`/work`}>Work</Link></li>
                                    <li><Link ref={el => (line3 = el)} to={`/contact`}>Contact</Link></li>
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
                            <div className="locations">

                                <span>Aalborg</span>
                                <span>Copenhagen</span>
                                <span>Aarhus</span>
                                <span>Prague</span>
                                <span>Riga</span>
                                <span>Daugavpils</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default HamburgerMenu