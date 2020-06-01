import React, {useEffect, useRef} from "react"
import {Link} from "gatsby";


const HamburgerMenu = ({ state }) => {


    let menu = useRef(null)
    useEffect(() => {
        if (state.clicked === false) {
            //    Close menu

            menu.style.display = 'none'
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            // OPEN menu
            menu.style.display = 'block'
        }
    })


    return (

        <div ref={el => (menu = el)} className="hamburger-menu">
            <div className="menu-secondary-background-color"></div>
            <div className="menu-layer">
                <div className="menu-city-background">

                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li><Link to={`/about`}>About</Link></li>
                                    <li><Link to={`/work`}>Work</Link></li>
                                    <li><Link to={`/contact`}>Contact</Link></li>
                                </ul>
                            </nav>
                            <div className="info">
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