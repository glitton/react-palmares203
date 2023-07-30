import React from "react";
import Title from "../components/Title";
import aboutPM from "../images/about-pm.jpeg";

const About = () => {
  return (
    <section className='section' id='about-pm'>
      <Title title='about' secondTitle='puerto morelos' />

      <div className='section-center about-center'>
        <article className='about-img'>
          <img src={aboutPM} alt='puerto morelos' className='about-photo' />
        </article>

        <article className='about-info'>
          <h3>explore puerto morelos</h3>
          <p>
            Puerto Morelos is a Mexican port town on the Caribbean coast of the
            Yucatán Peninsula. It is between the Riviera Maya resorts of Cancun
            and Playa del Carmen, but retains some of its original fishing
            village character. To get here, simply fly into Cancun and take a 20
            minute car ride to Puerto Morelos.
          </p>
          <p>
            The Puerto Morelos Reef National Park has many offshore dive and
            snorkeling sites. Along the Ruta de los Cenotes are freshwater
            sinkholes known as cenotes, including our favorites: Siete Bocas,
            Zapote, Maravilla, Verde Lucero, La Noria and Popul Vuh.
          </p>
          <a
            className='btn'
            href='https://en.wikipedia.org/wiki/Puerto_Morelos'
            target='_blank'
            rel='noreferrer'
          >
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
