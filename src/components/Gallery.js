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
              <img src={item.src} alt={item.alt} className='gallery-img' />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
