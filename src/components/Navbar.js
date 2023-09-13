import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { pageLinks } from "../data";
import logo from "../images/palmares-203-resized.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navLinksContainerRef = useRef(null);
  const navLinksRef = useRef(null);
  const navLinkStyles = {
    height: showLinks ? "320px" : "0px",
  };

  const toggleNavLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='#home'>
            <img src={logo} className='nav-logo' alt='palmares 203 logo' />
          </a>
          <button type='button' className='nav-toggle' onClick={toggleNavLinks}>
            {showLinks ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className='nav-links-container'
          ref={navLinksContainerRef}
          style={navLinkStyles}
        >
          <ul className='nav-links' ref={navLinksRef}>
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className='nav-link'>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='nav-icons'>
          <a
            href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
            target='_blank'
            rel='noreferrer'
            className='nav-icon'
          >
            <i className='fab fa-airbnb nav-icon'></i>
            <span className='nav-tooltiptext'>Check availability</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
