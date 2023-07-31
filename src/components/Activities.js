import React from "react";
import Title from "../components/Title";
import SingleActivity from "./SingleActivity";

const Activities = () => {
  return (
    <section className='section' id='play'>
      <Title title='featured' secondTitle='activities' />
      <div className='section-center featured-center'>
        <SingleActivity />
      </div>
    </section>
  );
};

export default Activities;
