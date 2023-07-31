import React from "react";
import Title from "../components/Title";
import Activity from "./Activity";
import { activities } from "../data";

const Activities = () => {
  return (
    <section className='section' id='play'>
      <Title title='featured' secondTitle='activities' />
      <div className='section-center featured-center'>
        {activities.map((activity) => {
          return <Activity key={activity.id} {...activity} />;
        })}
      </div>
    </section>
  );
};

export default Activities;
