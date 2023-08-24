import Logo from "../../assets/images/logo-color.webp";
import styles from "./navigationBar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const {
    logo,
    navLinks,
    nav,
    navHeader,
    menu,
    show,
    backDrop,
    showBackDrop,
    hot,
  } = styles;
  const [isOpen, setIsOpen] = useState(false);
  const showNavLinks = () => setIsOpen(!isOpen);
  return (
    <header className={navHeader}>
      <nav className={nav}>
        <Link to={"/"}>
          <div className={logo}>
            <img src={Logo} alt="reanmore Logo" />
          </div>
        </Link>
        <span className={menu} onClick={showNavLinks}>
          {isOpen === false ? (
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          )}
        </span>
        <ul
          onClick={showNavLinks}
          className={isOpen === false ? navLinks : navLinks + " " + show}
        >
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"hotPage"}>
            <li className={hot}>
              Hot <span>🔥</span>
            </li>
          </Link>
          <Link to={"coursePage"}>
            <li>Courses</li>
          </Link>
          {/* <Link to={"teachHerePage"}>
            <li>Teach Here</li>
          </Link> */}
          {/* <li>About</li> */}
        </ul>
      </nav>
      <div
        className={isOpen === false ? " " : backDrop + " " + showBackDrop}
      ></div>
    </header>
  );
};
export default NavigationBar;
