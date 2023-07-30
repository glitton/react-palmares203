import React from "react";

const Gallery = () => {
  return (
    <section>
      <div className='section-title gallery-title'>
        <h2>
          the <span>apartment</span>
        </h2>
      </div>

      <div className='gallery-center'>
        <article className='gallery-img-container'>
          <img src='./images/pool.jpeg' alt='pool' className='gallery-img' />
        </article>

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
