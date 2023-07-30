import React from "react";

const Title = ({ title, secondTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{secondTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
