import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const menuOpenSvg = useRef(null);
  const menuCloseSvg = useRef(null);
  const ul = useRef(null);

  function menuClicked() {
    menuOpenSvg.current.classList.toggle("hidden");
    menuCloseSvg.current.classList.toggle("hidden");
    ul.current.classList.toggle("active");
  }
  
  return (
    <nav>
      <svg ref={menuOpenSvg} onClick={menuClicked} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
      <svg ref={menuCloseSvg} onClick={menuClicked} className="hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
      </svg>
      <ul ref={ul} >
        <li data-glitch="Home"><Link to="/" onClick={menuClicked}>Home</Link></li>
        <li data-glitch="Skills"><Link to="/skills" onClick={menuClicked}>Skills</Link></li>
        <li data-glitch="Projects"><Link to="/projects" onClick={menuClicked}>Projects</Link></li>
        <li data-glitch="Contact"><Link to="/contact" onClick={menuClicked}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
