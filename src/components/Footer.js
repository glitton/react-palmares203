import React from "react";

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        <li>
          <a href='#home' className='footer-link scroll-link'>
            home
          </a>
        </li>

        <li>
          <a href='#sleep' className='footer-link scroll-link'>
            sleep
          </a>
        </li>

        <li>
          <a href='#activities' className='footer-link scroll-link'>
            play
          </a>
        </li>

        <li>
          <a href='#eat' className='footer-link scroll-link'>
            eat
          </a>
        </li>

        <li>
          <a href='#book' className='footer-link scroll-link'>
            book
          </a>
        </li>
      </ul>

      <ul className='footer-icons'>
        <li>
          <a
            href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
            target='_blank'
          >
            <i className='fab fa-airbnb'></i>
          </a>
        </li>
      </ul>

      <p className='copyright'>
        copyright &copy; palmares 203 puerto morelos <span id='date'></span>.
        all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
