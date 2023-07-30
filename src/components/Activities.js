import React from "react";
import Title from "../components/Title";

const Activities = () => {
  return (
    <section className='section' id='play'>
      <Title title='featured' secondTitle='activities' />

      <div className='section-center featured-center'>
        <article className='activity-card'>
          <div className='activity-img-container'>
            <img
              src='./images/diver-turtle.jpeg'
              alt='diver with turtle'
              className='activity-img'
            />
            <p className='activity-caption'>source: omdelfin</p>
          </div>
          <div className='activity-info'>
            <div className='activity-title'>
              <span className='activity-icon'>
                <i className='fa-solid fa-fish'></i>
              </span>
              <h4>scuba diving tours</h4>
            </div>
            <p>
              Puerto Morelos is home to the best preserved section of the
              Mesoamerican Barrier Reef. This part of the second largest barrier
              reef in the world is also closer to land in Puerto Morelos than
              anywhere else in Mexico. You can't miss diving and snorkeling in
              Puerto Morelos! Courses, dive and snorkeling tour packages
              available at OmDelfin.
            </p>
            <div className='activity-footer'>
              <p>
                Learn More:
                <a
                  href='https://omdelfin.com/'
                  alt='OmDelfin Dive Shop'
                  target='_blank'
                >
                  Dive Shop OmDelfin
                </a>
              </p>
              <p>from $90</p>
            </div>
          </div>
        </article>

        <article className='activity-card'>
          <div className='activity-img-container'>
            <img
              src='./images/cenote-tour.jpeg'
              alt='cenote'
              className='activity-img'
            />
            <p className='activity-caption'>source: layla guesthouse</p>
          </div>
          <div className='activity-info'>
            <div className='activity-title'>
              <span className='activity-icon'>
                <i className='fa-solid fa-binoculars'></i>
              </span>
              <h4>jungle and cenote tours</h4>
            </div>
            <p>
              The explorer in you can't miss enyoying the various cenotes, which
              are fresh water sinkholes found in the middle of the jungle. Along
              the Ruta de los Cenotes you can find a variety of cenotes that are
              both completely open, semi-open or in a cavern. Join the Layla
              Guesthouse Mayan Experience Cenote tour for a once in a lifetime
              jungle and cenote experience.
            </p>
            <div className='activity-footer'>
              <p>
                Learn more:
                <a
                  href='https://laylaguesthouse.com/cenote-tour/'
                  alt='Layla gueshouse cenote tour'
                  target='_blank'
                >
                  Layla Guesthouse
                </a>
              </p>
              <p>from $120</p>
            </div>
          </div>
        </article>
        <article className='activity-card'>
          <div className='activity-img-container'>
            <img
              src='./images/koox-ich-cool.jpeg'
              alt='activity image'
              className='activity-img'
            />
            <p className='activity-caption'>source: kookichcool</p>
          </div>
          <div className='activity-info'>
            <div className='activity-title'>
              <span className='activity-icon'>
                <i className='fa-solid fa-utensils'></i>
              </span>
              <h4>organic mexican food</h4>
            </div>
            <p>
              Koox Ich Kool is an organic experience along the Ruta de los
              Cenotes. Hosted by chef Karla Romo on her organic farm, she
              prepares a 6-course buffet meal using the finest local and organic
              ingredients along with a selection of mezcal and wine from Valle
              de Guadalupe. You'll also tour the orchard, the jungle and enjoy
              the water of the cenote pool.
            </p>
            <div className='activity-footer'>
              <p>
                Learn More:
                <a
                  href='https://www.facebook.com/kooxichkool'
                  alt='koox ich cool'
                  target='_blank'
                >
                  Koox Ich Kool
                </a>
              </p>
              <p>Contact for info</p>
            </div>
          </div>
        </article>
        <article className='activity-card'>
          <div className='activity-img-container'>
            <img
              src='./images/beach.jpeg'
              alt='activity image'
              className='activity-img'
            />
            <p className='activity-caption'>source: Pexels</p>
          </div>
          <div className='activity-info'>
            <div className='activity-title'>
              <span className='activity-icon'>
                <i className='fa-solid fa-umbrella-beach'></i>
              </span>
              <h4>Beach Clubs</h4>
            </div>
            <p>
              Puerto Morelos has numerous beach clubs and the cost to rent a
              chair is very affordable. Although you can just bring your towel
              and lounge around for free, having a drink, food and a relaxing
              chair is worth it. Among our favorites include Hotel Ojo de Agua
              beach club, My Paradise, Don Ernesto's and the Diving Lodge.
            </p>
            <div className='activity-footer'>
              <p>
                learn more:
                <a
                  href='https://www.google.com/'
                  alt='beach clubs'
                  target='_blank'
                >
                  search google
                </a>
              </p>
              <p>from $10</p>
            </div>
          </div>
        </article>
        <article className='activity-card'>
          <div className='activity-img-container'>
            <img
              src='./images/los-colibres.jpeg'
              alt='activity image'
              className='activity-img'
            />
            <p className='activity-caption'>source: Los Colibries</p>
          </div>

          <div className='activity-info'>
            <div className='activity-title'>
              <span className='activity-icon'>
                <i className='fa-solid fa-spa'></i>
              </span>
              <h4>Mayan Jungle Spa</h4>
            </div>
            <p>
              Los Colibries is a unique Mayan jungle spa along the Ruta de los
              Cenotes. The spa offers an exotic environment, surrounded by
              hundreds of trees, tropical plants, and birds. Their expert
              massage therapists provide traditional mayan massages, an outdoor
              bath all with natural oils. You'll have the most relaxing
              experience, guaranteed!
            </p>
            <div className='activity-footer'>
              <p>
                learn more:
                <a
                  href='https://loscolibries.mx/'
                  alt='jungle spa'
                  target='_blank'
                >
                  Los Colibres
                </a>
              </p>
              <p>from $50</p>
            </div>
          </div>
        </article>

        <article className='activity-card'>
          <div className='activity-img-container'>
            <img
              src='./images/live-music.jpg'
              alt='activity image'
              className='activity-img'
            />
            <p className='activity-caption'>source: Pexels</p>
          </div>

          <div className='activity-info'>
            <div className='activity-title'>
              <span className='activity-icon'>
                <i className='fa-solid fa-guitar'></i>
              </span>
              <h4>live music</h4>
            </div>
            <p>
              You'll find numerous street musicians and live bands performing in
              and out of the various restaurants along Puerto Morelos' beach
              side. From traditional mariachi to rock and roll and even karaoke,
              you'll surely find very entertaining music. Just do a Google
              search of live music in Puerto Morelos to get the latest
              information.
            </p>
            <div className='activity-footer'>
              <p>
                learn more:
                <a
                  href='https://www.google.com/search?q=best+live+music+in+puerto+morelos&source=lmns&bih=969&biw=1920&hl=en&sa=X&ved=2ahUKEwiVyfbl__D9AhVeL94AHU9UDMoQ_AUoAHoECAEQAA'
                  alt='google search'
                  target='_blank'
                >
                  search google
                </a>
              </p>
              <p>inquire at venue</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Activities;
