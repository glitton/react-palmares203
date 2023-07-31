import React from "react";
import img1 from "../images/GLeslie.jpg";
import googleImg from "../images/palmares-map.png";
import Title from "./Title";

const BookApt = () => {
  return (
    <section className='section-center book' id='book'>
      <article className='your-hosts'>
        <Title className='your-hosts-title' title='your ' secondTitle='hosts' />
        <h3>Generosa Litton and Leslie Marder</h3>
        <div className='your-hosts-text'>
          <img
            src={img1}
            alt='Generosa Litton and Leslie Marder'
            className='your-hosts-img'
          />
          <p>
            Originally from San Francisco, California, Generosa Litton and
            Leslie Marder have been visiting Puerto Morelos since 2017. In 2021,
            we and our kitties, Django and Luna made Palmares 203 our first home
            in Puerto Morelos. We look forward to hosting you and sharing the
            wonders that this town has to offer.
          </p>
        </div>
      </article>
      <article className='location'>
        <h3>Location</h3>
        <div className='location-info'>
          <img src={googleImg} alt='palmares 203 google maps' />
          <p>
            Palmares 203 is located on Avenida Rafael Melgar on the port side
            (beach) of Puerto Morelos. It is on the same street as Layla
            Guesthouse and across from the Secondaria school. We recommend using{" "}
            <a
              href='https://www.usa-transfers.com/'
              target='_blank'
              rel='noreferrer'
            >
              USA Transfers
            </a>{" "}
            to get here from Cancun airport. Just provide "Layla Guesthouse" as
            the destination and inform the driver to drive about 300 feet more
            where you'll see a white building with a sign Palmares 8-02 to the
            right of the entrance.
          </p>
        </div>
      </article>
    </section>
  );
};

export default BookApt;
