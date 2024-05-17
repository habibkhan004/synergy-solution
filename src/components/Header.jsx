import logo from "./logo.png";
import { onClickBar } from "./js/index.js";
import { onRemoveBar } from "./js/index.js";

let Header = ({ tab, onTabChange }) => {
  return (
    <>
      <header>
        <img className="NAV-IMG" src={logo} alt="" />
        <a href="/" class="logo">
          Software Synergy Solutions
        </a>

        <div id="menu" class="fas fa-bars" onClick={onClickBar}></div>
        <nav class="navbar">
          <ul>
            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("home");
              }}
            >
              <a
                className={`${tab === "home" && "active"}`}
                onClick={onRemoveBar}
                href="#home"
              >
                Home
              </a>
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("allservices");
              }}
            >
              <a
                onClick={onRemoveBar}
                className={`${tab === "allservices" && "active"}`}
                href=""
              >
                Services
              </a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("allprojects");
              }}
            >
              <a
                onClick={onRemoveBar}
                className={`${tab === "allprojects" && "active"}`}
                href=""
              >
                Projects
              </a>
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("team");
              }}
            >
              <a
                onClick={onRemoveBar}
                className={`${tab === "team" && "active"}`}
                href=""
              >
                Team
              </a>
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("gallery");
              }}
            >
              <a
                onClick={onRemoveBar}
                className={`${tab === "gallery" && "active"}`}
                href=""
              >
                Gallery
              </a>
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("about");
              }}
            >
              <a
                className={`${tab === "about" && "active"}`}
                onClick={onRemoveBar}
                href=""
              >
                About
              </a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("contact");
              }}
            >
              <a
                onClick={onRemoveBar}
                className={`${tab === "contact" && "active"}`}
                href=""
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
