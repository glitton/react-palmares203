import React from "react";
import Title from "./Title";
import { gallery } from "../imageData";
import Image from "./Image";

const Gallery = () => {
  return (
    <section>
      <div className='section-title gallery-title'>
        <Title title='the' secondTitle='apartment' />
      </div>
      <div className='gallery-center'>
        {gallery.map((item) => {
          return <Image key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
