import React from "react";
import Title from "./Title";
import { cafeList, mexFoodList, intlFoodList, fishFoodList } from "../data";
import SingleFood from "./SingleFood";

const Food = () => {
  return (
    <section className='section food' id='eat'>
      <Title title='nearby' secondTitle='eats' />
      <div className='section-center food-center'>
        <article className='food'>
          <span className='food-icon'>
            <i className='fa-solid fa-coffee fa-fw'></i>
          </span>
          <div className='food-info'>
            <h3 className='service-title'>cafes</h3>
            <ul className='food-list'>
              {cafeList.map((cafe) => {
                return <SingleFood key={cafe.id} {...cafe} />;
              })}
            </ul>
          </div>
        </article>

        <article className='food'>
          <span className='food-icon'>
            <i className='fa-solid fa-pepper-hot fa-fw'></i>
          </span>
          <div className='food-info'>
            <h3 className='service-title'>tacos</h3>
            <ul className='food-list'>
              {mexFoodList.map((food) => {
                return <SingleFood key={food.id} {...food} />;
              })}
            </ul>
          </div>
        </article>
        <article className='food'>
          <span className='food-icon'>
            <i className='fa-solid fa-bowl-food'></i>
          </span>
          <div className='food-info'>
            <h3 className='service-title'>international</h3>
            <ul className='food-list food-international'>
              {intlFoodList.map((food) => {
                return <SingleFood key={food.id} {...food} />;
              })}
            </ul>
          </div>
        </article>
        <article className='food'>
          <span className='food-icon'>
            <i className='fa-solid fa-fish-fins'></i>
          </span>
          <div className='food-info'>
            <h3 className='service-title'>seafood</h3>
            <ul className='food-list food-international'>
              {fishFoodList.map((fish) => {
                return <SingleFood key={fish.id} {...fish} />;
              })}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Food;
