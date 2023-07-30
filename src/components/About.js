import React from "react";

const About = () => {
  return (
    <section className='section' id='about-pm'>
      <div className='section-title'>
        <h2>
          about <span>Puerto Morelos</span>
        </h2>
      </div>

      <div className='section-center about-center'>
        <article className='about-img'>
          <img
            src='./images/about-pm.jpeg'
            alt='puerto morelos'
            className='about-photo'
          />
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
          >
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
