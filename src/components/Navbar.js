import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='#home'>
            <img
              src='./images/palmares-203-resized.svg'
              className='nav-logo'
              alt='palmares 203 logo'
            />
          </a>
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>

        <ul className='nav-links' id='nav-links'>
          <li>
            <a href='#home' className='nav-link scroll-link'>
              home
            </a>
          </li>

          <li>
            <a href='#sleep' className='nav-link scroll-link'>
              sleep
            </a>
          </li>

          <li>
            <a href='#activities' className='nav-link scroll-link'>
              play
            </a>
          </li>

          <li>
            <a href='#eat' className='nav-link scroll-link'>
              eat
            </a>
          </li>
          <li>
            <a href='#book' className='nav-link scroll-link'>
              book
            </a>
          </li>
        </ul>

        <div className='nav-icons'>
          <a
            href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
            target='_blank'
            className='nav-icon'
          >
            <i className='fab fa-airbnb' className='nav-icon'></i>
            <span className='nav-tooltiptext'>Check availability</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
