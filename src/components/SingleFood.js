import React from "react";

const SingleFood = ({ href, restaurant }) => {
  return (
    <li className='food-link'>
      <a href={href} target='_blank' rel='noreferrer'>
        {restaurant}
      </a>
    </li>
  );
};

export default SingleFood;
