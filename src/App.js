function App() {
  return (
    <>
      <header id='home'>
        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <a href='#home'>
                <img
                  src='./images/palmares-203-resized.svg'
                  className='nav-logo'
                  alt='palmares 203 logo'
                />
              </a>
              <button type='button' className='nav-toggle' id='nav-toggle'>
                <i className='fa-solid fa-bars'></i>
              </button>
            </div>

            <ul className='nav-links' id='nav-links'>
              <li>
                <a href='#home' className='nav-link scroll-link'>
                  home
                </a>
              </li>

              <li>
                <a href='#sleep' className='nav-link scroll-link'>
                  sleep
                </a>
              </li>

              <li>
                <a href='#activities' className='nav-link scroll-link'>
                  play
                </a>
              </li>

              <li>
                <a href='#eat' className='nav-link scroll-link'>
                  eat
                </a>
              </li>
              <li>
                <a href='#book' className='nav-link scroll-link'>
                  book
                </a>
              </li>
            </ul>

            <div className='nav-icons'>
              <a
                href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
                target='_blank'
                className='nav-icon'
              >
                <i className='fab fa-airbnb' className='nav-icon'></i>
                <span className='nav-tooltiptext'>Check availability</span>
              </a>
            </div>
          </div>
        </nav>
        <div className='hero'>
          <div className='hero-banner'>
            <h1>vacation in puerto morelos</h1>
            <p>
              Live by the beach and explore one of the jewels of the Riviera
              Maya where you'll discover the many wonders of the Mayan world.
            </p>
            <a href='#about-pm' className='btn hero-btn scroll-link'>
              learn more
            </a>
          </div>
        </div>
      </header>

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
              Puerto Morelos is a Mexican port town on the Caribbean coast of
              the Yucatán Peninsula. It is between the Riviera Maya resorts of
              Cancun and Playa del Carmen, but retains some of its original
              fishing village character. To get here, simply fly into Cancun and
              take a 20 minute car ride to Puerto Morelos.
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
      <section className='section services' id='sleep'>
        <div className='section-title'>
          <h2>
            where you'll <span>stay</span>
          </h2>
        </div>

        <div className='section-center services-center'>
          <article className='service'>
            <span className='service-icon'>
              <i className='fa-solid fa-umbrella-beach fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>beachfront</h4>
              <p className='service-text'>
                Located across from the beach and two blocks from the town
                center, this one-bedroom, one bath apartment is perfect for two
                guests.
              </p>
            </div>
          </article>

          <article className='service'>
            <span className='service-icon'>
              <i className='fa-solid fa-unlock fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>self check-in</h4>
              <p className='service-text'>
                Secure lockbox with keys allows guests to check-in and out on
                their own. Combination and additional details will be provided
                upon booking.
              </p>
            </div>
          </article>

          <article className='service'>
            <span className='service-icon'>
              <i className='fa-solid fa-wifi fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>dedicated workspace</h4>
              <p className='service-text'>
                Collapsible work desk with blazing fast fiber-optic wifi (up to
                500Mbps) allows reliable internet access, streaming and video
                conferencing.
              </p>
            </div>
          </article>

          <article className='service'>
            <span className='service-icon'>
              <i className='fa-solid fa-swimmer fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>outdoor pool</h4>
              <p className='service-text'>
                Cool off and relax before a night out in the town in the shared
                rooftop outdoor pool that is overlooking the sea. Available
                year-round.
              </p>
            </div>
          </article>
        </div>
      </section>

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
            <img
              src='./images/tv-area.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>

          <article className='gallery-img-container'>
            <img
              src='./images/workspace.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>

          <article className='gallery-img-container'>
            <img
              src='./images/bedroom.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>
          <article className='gallery-img-container'>
            <img
              src='./images/bedroom2.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>

          <article className='gallery-img-container'>
            <img
              src='./images/kitchen.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>

          <article className='gallery-img-container'>
            <img
              src='./images/bathroom.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>

          <article className='gallery-img-container'>
            <img
              src='./images/shower.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>

          <article className='gallery-img-container'>
            <img
              src='./images/laundry.jpeg'
              alt='pool'
              className='gallery-img'
            />
          </article>
        </div>
      </section>
      <section className='section' id='activities'>
        <div className='section-title'>
          <h2>
            featured <span>activities</span>
          </h2>
        </div>
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
                Mesoamerican Barrier Reef. This part of the second largest
                barrier reef in the world is also closer to land in Puerto
                Morelos than anywhere else in Mexico. You can't miss diving and
                snorkeling in Puerto Morelos! Courses, dive and snorkeling tour
                packages available at OmDelfin.
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
                The explorer in you can't miss enyoying the various cenotes,
                which are fresh water sinkholes found in the middle of the
                jungle. Along the Ruta de los Cenotes you can find a variety of
                cenotes that are both completely open, semi-open or in a cavern.
                Join the Layla Guesthouse Mayan Experience Cenote tour for a
                once in a lifetime jungle and cenote experience.
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
                prepares a 6-course buffet meal using the finest local and
                organic ingredients along with a selection of mezcal and wine
                from Valle de Guadalupe. You'll also tour the orchard, the
                jungle and enjoy the water of the cenote pool.
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
                massage therapists provide traditional mayan massages, an
                outdoor bath all with natural oils. You'll have the most
                relaxing experience, guaranteed!
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
                You'll find numerous street musicians and live bands performing
                in and out of the various restaurants along Puerto Morelos'
                beach side. From traditional mariachi to rock and roll and even
                karaoke, you'll surely find very entertaining music. Just do a
                Google search of live music in Puerto Morelos to get the latest
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

      <section className='section food' id='eat'>
        <div className='section-title'>
          <h2>
            nearby <span>eats</span>
          </h2>
        </div>

        <div className='section-center food-center'>
          <article className='food'>
            <span className='food-icon'>
              <i className='fa-solid fa-coffee fa-fw'></i>
            </span>
            <div className='food-info'>
              <h3 className='service-title'>cafes</h3>
              <ul className='food-list'>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/groups/463890004516990/posts/702000470705941/'
                    target='_blank'
                    a
                  >
                    Belleville Panaderia
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.google.com/search?q=cafe+amancia+puerto+morelos&tbm=lcl&sxsrf=AJOqlzWrrNmeXq2MqZazSHA984nfDEsAiA%3A1679425494389&ei=1v8ZZIWqF-7HkPIPy6S_qA8&oq=cafe+amancia&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMYADIKCAAQgAQQFBCHAjIFCAAQgAQyBggAEBYQHjICCCY6BAgjECc6BAgAEEM6BQgAEJECUABY-w1gnxhoAHAAeAKAAfsDiAHMGJIBCzAuMi41LjIuMS4xmAEAoAEBwAEB&sclient=gws-wiz-local'
                    target='_blank'
                    a
                  >
                    Cafe Amancia
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://laylaguesthouse.com/es/cafe-layla-menu/'
                    target='_blank'
                    a
                  >
                    Cafe Layla
                  </a>
                </li>
                <li className='food-link'></li>
                <li className='food-link'>
                  <a
                    href='https://www.tripadvisor.com/Restaurant_Review-g240327-d23727568-Reviews-Cecilia_Bakes_Coffee_Shop-Puerto_Morelos_Yucatan_Peninsula.html'
                    target='_blank'
                    a
                  >
                    Cecilia Bakes
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://pm.eliniciorestaurante.com/'
                    target='_blank'
                    a
                  >
                    El Inicio
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.google.com/search?q=oneida%20cafe%20puerto%20morelos&oq=oneida+cafe+puerto+&aqs=chrome.1.69i57j33i160l2.7684j0j4&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AJOqlzVj4mMUDrbRNVXH9IExd6_X0ilrUg:1679427415137&rflfq=1&num=10&rldimm=17498560580722829126&lqi=ChpvbmVpZGEgY2FmZSBwdWVydG8gbW9yZWxvc0i45JPZg6-AgAhaJhAAEAEYASIab25laWRhIGNhZmUgcHVlcnRvIG1vcmVsb3MyAmVzkgEEY2FmZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ09IVmZjMEYzRUFFqgE_CgkvbS8wMjBmYjIQASoPIgtvbmVpZGEgY2FmZSgOMh8QASIbgoV4PA3WGqQdX-bucgOUhzTOif14eeiDLw-I&phdesc=4hPtMr2WH8M&ved=2ahUKEwj1j4XU4u39AhUxLkQIHaqiBMQQvS56BAgYEAE&sa=X&rlst=f#rlfi=hd:;si:17498560580722829126,l,ChpvbmVpZGEgY2FmZSBwdWVydG8gbW9yZWxvc0i45JPZg6-AgAhaJhAAEAEYASIab25laWRhIGNhZmUgcHVlcnRvIG1vcmVsb3MyAmVzkgEEY2FmZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ09IVmZjMEYzRUFFqgE_CgkvbS8wMjBmYjIQASoPIgtvbmVpZGEgY2FmZSgOMh8QASIbgoV4PA3WGqQdX-bucgOUhzTOif14eeiDLw-I,y,4hPtMr2WH8M;mv:[[20.8748708,-86.87257199999999],[20.831762599999998,-86.9025786]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!2m4!1e17!4m2!17m1!1e2!3sIAE,lf:1,lf_ui:9'
                    target='_blank'
                    a
                  >
                    Eneida Cafe
                  </a>
                </li>
                <li className='food-link'>
                  <a href='https://www.estacion69.com/' target='_blank' a>
                    Estacion 69
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://localcofffeshop.wordpress.com/'
                    target='_blank'
                    a
                  >
                    Local Coffee Shop
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/lolaymoya/?locale=es_LA'
                    target='_blank'
                    a
                  >
                    Lola Y Moya
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/mangatapuertomorelos'
                    target='_blank'
                    a
                  >
                    Mangata
                  </a>
                </li>
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
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/ElNichoPM/'
                    target='_blank'
                    a
                  >
                    El Nicho
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/profile.php?id=100063548470071'
                    target='_blank'
                    a
                  >
                    La Cabaña
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/lachozadelpuerto/'
                    target='_blank'
                    a
                  >
                    La Choza
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.tripadvisor.com/Restaurant_Review-g240327-d12396192-Reviews-Las_Koras-Puerto_Morelos_Yucatan_Peninsula.html'
                    target='_blank'
                    a
                  >
                    Las Koras
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/pecaofondademar/'
                    target='_blank'
                    a
                  >
                    Pecao
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/SocioNaizPuertoMorelos/'
                    target='_blank'
                    a
                  >
                    Socio Naiz
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/profile.php?id=100063965113592'
                    target='_blank'
                    a
                  >
                    taco.com
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/people/Taquer%C3%ADa-El-Mariachi/100063789630051/?paipv=0&eav=Afaeu87_REEGhYUlNEP5RqHoJ103i2t7_j4vS2qpJHM_Mj88n0uPce6pGdPnfih0FFA&_rdr'
                    target='_blank'
                    a
                  >
                    Taqueria El Mariachi
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.tripadvisor.com/Restaurant_Review-g240327-d16738846-Reviews-Taqueria_Neza-Puerto_Morelos_Yucatan_Peninsula.html'
                    target='_blank'
                    a
                  >
                    Taqueria Neza
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/VeggieVeggieStreetFood'
                    target='_blank'
                    a
                  >
                    Veggie Veggie Street Food
                  </a>
                </li>
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
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/Daipuertomorelos/?locale=es_LA'
                    target='_blank'
                    a
                  >
                    Dai Smokehouse and Sake
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/doragonrestaurantejapones'
                    target='_blank'
                    a
                  >
                    Doragon Sushi
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/groups/463890004516990/posts/702000470705941/'
                    target='_blank'
                    a
                  >
                    El Campanario
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.tripadvisor.com.mx/Restaurant_Review-g240327-d1051278-Reviews-El_Pirata-Puerto_Morelos_Yucatan_Peninsula.html'
                    target='_blank'
                    a
                  >
                    El Pirata
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/ruta40puertomorelos/'
                    target='_blank'
                    a
                  >
                    Empanadas Ruta 40
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/iwannapizza/'
                    target='_blank'
                    a
                  >
                    I Wanna Pizza
                  </a>
                </li>

                <li className='food-link'>
                  <a href='https://www.memalmare.com/' target='_blank' a>
                    Mem Al Mare
                  </a>
                </li>
                <li className='food-link'>
                  <a href='https://www.osteriabarocca.com/' target='_blank' a>
                    Osteria Barocca
                  </a>
                </li>
                <li className='food-link'>
                  <a href='https://taninosrestaurant.com/' target='_blank' a>
                    Tanino's
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://restaurantesenpuertomorelos.com/establecimiento/yum-yum-wok/'
                    target='_blank'
                    a
                  >
                    Yum Yum Wok
                  </a>
                </li>
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
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/BLUE.MORELOS/?locale=es_LA'
                    target='_blank'
                    a
                  >
                    Blue
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/BoquinetePuerto/'
                    target='_blank'
                    a
                  >
                    Boquinete Seafood & Grill
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://www.facebook.com/elpesqueropuertomorelos/reviews'
                    target='_blank'
                    a
                  >
                    El Pesquero
                  </a>
                </li>
                <li className='food-link'>
                  <a href='https://lasirenapm.com/' target='_blank' a>
                    La Sirena
                  </a>
                </li>
                <li className='food-link'>
                  <a href='http://muelleonce.com/' target='_blank' a>
                    Muelle Once
                  </a>
                </li>
                <li className='food-link'>
                  <a href='https://playajaguar.com/inicio/' target='_blank' a>
                    Playa Jaguar
                  </a>
                </li>
                <li className='food-link'>
                  <a
                    href='https://bullandtank.com/punta-corcho'
                    target='_blank'
                    a
                  >
                    Punta Corcho
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className='section-center book' id='book'>
        <article className='your-hosts'>
          <h3>
            Your Hosts: <br />
            <h4 className='your-hosts-title'>
              <span>Generosa Litton and Leslie Marder</span>
            </h4>
          </h3>
          <div className='your-hosts-text'>
            <img
              src='./images/GLeslie.jpg'
              alt='Generosa Litton and Leslie Marder'
              className='your-hosts-img'
            />
            <p>
              Originally from San Francisco, California, Generosa Litton and
              Leslie Marder have been visiting Puerto Morelos since 2017. In
              2021, we and our kitties, Django and Luna made Palmares 203 our
              first home in Puerto Morelos. We look forward to hosting you and
              sharing the wonders that this town has to offer.
            </p>
          </div>
        </article>
        <article className='location'>
          <h3>Location</h3>
          <div className='location-info'>
            <img
              src='./images/palmares-map.png'
              alt='palmares 203 google maps'
            />
            <p>
              Palmares 203 is located on Avenida Rafael Melgar on the port side
              (beach) of Puerto Morelos. It is on the same street as Layla
              Guesthouse and across from the Secondaria school. We recommend
              using
              <a href='https://www.usa-transfers.com/' target='_blank'>
                USA Transfers
              </a>
              to get here from Cancun airport. Just provide "Layla Guesthouse"
              as the destination and inform the driver to drive about 300 feet
              more where you'll see a white building with a sign Palmares 8-02
              to the right of the entrance.
            </p>
          </div>
        </article>

        <article className='contact'>
          <h3>ready to book?</h3>
          <p>
            click the airbnb icon to book now
            <a
              href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
              target='_blank'
              className='booking-icon'
            >
              <i className='fab fa-airbnb'></i>
            </a>
          </p>
          <div className='contact-form'>
            <h3>have questions? contact us</h3>
            <form
              action='https://formspree.io/f/myyanbgk'
              method='POST'
              className='form-group'
            >
              <input
                type='email'
                name='email'
                placeholder='YOUR EMAIL'
                className='form-control'
              />
              <textarea
                name='message'
                placeholder='YOUR MESSAGE'
                rows='8'
                className='form-control'
              ></textarea>

              <button type='submit' className='btn-submit'>
                submit
              </button>
            </form>
          </div>
          <div className='form-submit'>
            <h3 className="'form-submit-thanks">
              Thank you for your message. We will respond to your inquiry within
              24 hours.
            </h3>
          </div>
        </article>
      </section>

      <footer className='section footer'>
        <ul className='footer-links'>
          <li>
            <a href='#home' className='footer-link scroll-link'>
              home
            </a>
          </li>

          <li>
            <a href='#sleep' className='footer-link scroll-link'>
              sleep
            </a>
          </li>

          <li>
            <a href='#activities' className='footer-link scroll-link'>
              play
            </a>
          </li>

          <li>
            <a href='#eat' className='footer-link scroll-link'>
              eat
            </a>
          </li>

          <li>
            <a href='#book' className='footer-link scroll-link'>
              book
            </a>
          </li>
        </ul>

        <ul className='footer-icons'>
          <li>
            <a
              href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
              target='_blank'
            >
              <i className='fab fa-airbnb'></i>
            </a>
          </li>
        </ul>

        <p className='copyright'>
          copyright &copy; palmares 203 puerto morelos <span id='date'></span>.
          all rights reserved
        </p>
      </footer>
    </>
  );
}

export default App;
