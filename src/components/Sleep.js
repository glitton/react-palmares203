import React from "react";

const Sleep = () => {
  return (
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
              Located across from the beach and two blocks from the town center,
              this one-bedroom, one bath apartment is perfect for two guests.
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
  );
};

export default Sleep;
