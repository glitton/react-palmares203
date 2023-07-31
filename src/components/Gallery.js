import React from "react";
import Title from "./Title";
import { gallery } from "../imageData";

const Gallery = () => {
  return (
    <section>
      <div className='section-title gallery-title'>
        <Title title='the' secondTitle='apartment' />
      </div>

      <div className='gallery-center'>
        {gallery.map((item) => {
          return (
            <article className='gallery-img-container' key={item.id}>
              <img src={item.src} alt='pool' className='gallery-img' />
            </article>
          );
        })}

        <article className='gallery-img-container'>
          <img
            src='./images/palmares-building.jpeg'
            alt='pool'
            className='gallery-img'
          />
        </article>

        <article className='gallery-img-container'>
          <img
            src='./images/palmares-hallway.jpeg'
            alt='pool'
            className='gallery-img'
          />
        </article>

        <article className='gallery-img-container'>
          <img
            src='./images/802-enter.jpeg'
            alt='pool'
            className='gallery-img'
          />
        </article>

        <article className='gallery-img-container'>
          <img src='./images/tv-area.jpeg' alt='pool' className='gallery-img' />
        </article>

        <article className='gallery-img-container'>
          <img
            src='./images/workspace.jpeg'
            alt='pool'
            className='gallery-img'
          />
        </article>

        <article className='gallery-img-container'>
          <img src='./images/bedroom.jpeg' alt='pool' className='gallery-img' />
        </article>
        <article className='gallery-img-container'>
          <img
            src='./images/bedroom2.jpeg'
            alt='pool'
            className='gallery-img'
          />
        </article>

        <article className='gallery-img-container'>
          <img src='./images/kitchen.jpeg' alt='pool' className='gallery-img' />
        </article>

        <article className='gallery-img-container'>
          <img
            src='./images/bathroom.jpeg'
            alt='pool'
            className='gallery-img'
          />
        </article>

        <article className='gallery-img-container'>
          <img src='./images/shower.jpeg' alt='pool' className='gallery-img' />
        </article>

        <article className='gallery-img-container'>
          <img src='./images/laundry.jpeg' alt='pool' className='gallery-img' />
        </article>
      </div>
    </section>
  );
};

export default Gallery;
