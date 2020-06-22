import React, {useState} from "react";
import {Link} from "gatsby";
// import {ThemeToggler} from "gatsby-plugin-dark-mode";
import HamburgerMenu from "../components/hamburgmenu";


const Layout = props => {
    const {title, children} = props;
    // const [toggleNav, setToggleNav] = React.useState(false);

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });
    const [disabled, setDisabled] = useState(false);
    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });

        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });

        }
    }


    //Determine if our menu btn should be disabled

    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    }


    return (


        <div className="site-wrapper">
            <header className="custom-site-head">
                <div className="container">
                    <div className="wrapper">
                        <div className="inner-header">
                            <div className="logo">
                                <Link to="/">WebExpress</Link>
                            </div>

                            <div className="menu">


                                {/*<ThemeToggler>*/}
                                {/*    {({theme, toggleTheme}) => (*/}
                                {/*        <label>*/}
                                {/*            <input*/}
                                {/*                type="checkbox"*/}
                                {/*                onChange={e =>*/}
                                {/*                    toggleTheme(e.target.checked ? "dark" : "light")*/}
                                {/*                }*/}
                                {/*                checked={theme === "dark"}*/}
                                {/*            />{" "}*/}
                                {/*            Dark mode*/}
                                {/*        </label>*/}
                                {/*    )}*/}
                                {/*</ThemeToggler>*/}
                                <button disabled={disabled}
                                        onClick={handleMenu}
                                        className="menu__button">
                                    {state.menuName}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <HamburgerMenu state={state}/>
            </header>

            <main id="site-main" className="site-main">
                <div id="swup" className="transition-fade">
                    {children}
                </div>
            </main>
            <footer className="site-foot">
                &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
                Built with{" "}
                <a href="/">
                    Love
                </a>
            </footer>
        </div>
    );
};

export default Layout;
