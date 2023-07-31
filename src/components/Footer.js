import React from "react";
import { pageLinks } from "../data";

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className='footer-link scroll-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        <li>
          <a
            href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-airbnb'></i>
          </a>
        </li>
      </ul>
      <p className='copyright'>
        copyright &copy; palmares 203 puerto morelos{" "}
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
