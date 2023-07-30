import React from "react";
import Title from "./Title";
import { cafeList, mexFoodList, intlFoodList, fishFoodList } from "../data";

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
                return (
                  <li className='food-link' key={cafe.id}>
                    <a href={cafe.href} target='_blank' rel='noreferrer' a>
                      {cafe.restaurant}
                    </a>
                  </li>
                );
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
                return (
                  <li className='food-link' key={food.id}>
                    <a href={food.href} target='_blank' rel='noreferrer' a>
                      {food.restaurant}
                    </a>
                  </li>
                );
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
                return (
                  <li className='food-link' key={food.id}>
                    <a href={food.href} target='_blank' rel='noreferrer' a>
                      {food.restaurant}
                    </a>
                  </li>
                );
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
                return (
                  <li className='food-link' key={fish.id}>
                    <a href={fish.href} target='_blank' rel='noreferrer' a>
                      {fish.restaurant}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Food;
