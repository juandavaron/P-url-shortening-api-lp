import React from "react";
import { ReactComponent as Brand } from './../../style/svg/icon-brand-recognition.svg';
import { ReactComponent as Detailed } from './../../style/svg/icon-detailed-records.svg';
import { ReactComponent as Fully } from './../../style/svg/icon-fully-customizable.svg';

function Info() {
  return (
    <section className="section info">
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div className="info__container">
        <div className="info__item">
          <div className="info__img">
            <Brand />
          </div>
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </div>

        <div className="info__divider"/>

        <div className="info__item">
          <div className="info__img">
            <Detailed />
          </div>
          <h3>Detailed Records</h3>
          <p>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
        </div>

        <div className="info__divider"/>

        <div className="info__item">
          <div className="info__img">
           <Fully />
          </div>
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  )
};

export { Info };