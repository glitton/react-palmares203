import React from "react";

const Activity = ({ image, source, icon, title, text, href, name, price }) => {
  return (
    <article className='activity-card'>
      <div className='activity-img-container'>
        <img src={image} alt='diver with turtle' className='activity-img' />
        <p className='activity-caption'>source: {source}</p>
      </div>
      <div className='activity-info'>
        <div className='activity-title'>
          <span className='activity-icon'>
            <i className={icon}></i>
          </span>
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className='activity-footer'>
          <p>
            Learn More:{" "}
            <a
              href={href}
              alt='OmDelfin Dive Shop'
              target='_blank'
              rel='noreferrer'
            >
              {name}
            </a>
          </p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default Activity;
