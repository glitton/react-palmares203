import React from "react";
import { pageLinks } from "../data";
import logo from "../images/palmares-203-resized.svg";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='#home'>
            <img src={logo} className='nav-logo' alt='palmares 203 logo' />
          </a>
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className='nav-link scroll-link'>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
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
