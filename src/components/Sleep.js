import React from "react";
import Title from "./Title";
import { sleepItems } from "../data";

const Sleep = () => {
  return (
    <section className='section services' id='sleep'>
      <div className='section-title'>
        <Title title="where you'll" secondTitle='stay' />
      </div>
      <div className='section-center services-center'>
        {sleepItems.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>

                <p className='service-text'>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Sleep;
