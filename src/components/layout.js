import React, {useState} from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import HamburgerMenu from "../components/hamburgmenu";



const Layout = props => {
  const { title, children } = props;
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
    setTimeout(() =>{
      setDisabled(false)
    },1200)
  }




  return (


    <div className="site-wrapper">
    {/*<div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>*/}
      <header className="custom-site-head">
        <div className="container">
          <div className="wrapper">
            <div className="inner-header">
              <div className="logo">
                <Link to="/">WebExpress</Link>
              </div>

              <div className="menu">


                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                      <label>
                        <input
                            type="checkbox"
                            onChange={e =>
                                toggleTheme(e.target.checked ? "dark" : "light")
                            }
                            checked={theme === "dark"}
                        />{" "}
                        Dark mode
                      </label>
                  )}
                </ThemeToggler>
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


      {/*<header className="site-head">*/}
      {/*  <div id="menu" className="site-head-container">*/}
      {/*    <a*/}
      {/*      className="nav-burger"*/}
      {/*      href={`#menu`}*/}
      {/*      onClick={() => setToggleNav(!toggleNav)}*/}
      {/*    >*/}
      {/*      <div*/}
      {/*        className="hamburger hamburger--collapse"*/}
      {/*        aria-label="Menu"*/}
      {/*        role="button"*/}
      {/*        aria-controls="navigation"*/}
      {/*      >*/}
      {/*        <div className="hamburger-box">*/}
      {/*          <div className="hamburger-inner" />*/}
      {/*        </div>{" "}*/}
      {/*        <div className="hamburger-text-menu-text hidden">Menu</div>*/}
      {/*      </div>*/}
      {/*    </a>*/}
      {/*    <nav id="swup" className="site-head-left">*/}
      {/*      <ul className="nav" role="menu">*/}
      {/*        /!* <li className="nav-home nav-current" role="menuitem">*/}
      {/*          <Link to={`/`}>Home</Link>*/}
      {/*        </li> *!/*/}

      {/*        <li className="nav-about" role="menuitem">*/}
      {/*          <Link to={`/about`}>About</Link>*/}
      {/*        </li>*/}
      {/*        <li className="nav-about" role="menuitem">*/}
      {/*          <Link to={`/work`}>Work</Link>*/}
      {/*        </li>*/}

      {/*        <li className="nav-tags" role="menuitem">*/}
      {/*          <Link to={`/tags`}>Tags</Link>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </nav>*/}
      {/*    <div className="site-head-center">*/}
      {/*      <Link className="site-head-logo" to={`/`}>*/}
      {/*        {title}*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*    <div className="site-head-right">*/}

      {/*      <div className="social-links">*/}
      {/*        <a*/}
      {/*          href="https://www.facebook.com"*/}
      {/*          title="Facebook"*/}
      {/*          target="_blank"*/}
      {/*          rel="noopener noreferrer"*/}
      {/*        >*/}
      {/*          Facebook*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}
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
