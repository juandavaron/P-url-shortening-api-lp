import React from "react";
import { Button } from "../Button/Button";

function Hero({
  shortenLink,
  setShortenLink
}) {

  const URL = 'https://api.shrtco.de/v2/';

  const inputValue = (e) => {
    console.log(e.target.value)
    setShortenLink(e.target.value);
  }

  const postLink = async () => {
    const res = await fetch(URL + 'shorten?url=' + shortenLink);
    const data = await res.json();

    console.log(data);
  }

  return (
    <section className="section hero">
      <div className="hero__container">
        <div className="hero__shorten">
          <input
            className="hero__shorten-input"
            placeholder="Shorten a link here..."
            onChange={inputValue}
            value={shortenLink}
          />
          <Button
            className="hero__shorten-btn"
            onClick={postLink}
          >Shorten It!</Button>
        </div>
        <div className="hero__item"></div>
      </div>
    </section>
  )
};

export { Hero };