import React from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";

function Hero({
  inputText,
  setInputText,
  shortenLink,
  setShortenLink
}) {

  const URL = 'https://api.shrtco.de/v2/';
  const errorCode = {
    1:'Please add a link',
    2:'Please add a valid URL',
    3:'Wait a second and try again',
    4:'IP-Address has been blocked because of violating our terms of service',
    5:'shortcode already taken/in use',
    6:'Unknown error',
    7:'Unknown error',
    8:'Unknown error',
    9:'Unknown error',
    10:'Trying to shorten a disallowed link. More information on disallowed links',
  }

  const inputValue = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value)
  }

  const postLink = async () => {

    const res = await fetch(URL + 'shorten?url=' + inputText);
    const data = await res.json();

    const input = document.querySelector('.hero__shorten-input')
    if (res.status !== 201) {
      console.log('Hay un Error:')
      console.log(errorCode[data.error_code])
      input.classList.add('error')
    } else {
      //  Link recortado.
      // if (shortenLink.length == 3) {
      //   setShortenLink([...shortenLink, shortenLink.pop()])
      // } else {
      //   setShortenLink([...shortenLink, { originalLink: data.result.original_link, shortenLink: data.result.short_link2 }])
      // }
      console.log('Es 201')
      input.classList.remove('error');
      setShortenLink([...shortenLink, { originalLink: data.result.original_link, shortenLink: data.result.short_link2 }])
      setInputText('');
      console.log(shortenLink);
    }
  }

  return (
    <section className="section hero">
      <div className="hero__container">
        <div className="hero__shorten">
          <input
            className="hero__shorten-input"
            placeholder="Shorten a link here..."
            onChange={inputValue}
            value={inputText}
          />
          <Button
            className="hero__shorten-btn"
            onClick={postLink}
          >Shorten It!</Button>
        </div>

        <div className="hero__list">
          <ul>
            {shortenLink.map(linkList => (
              <List
                key={linkList.shortenLink}
                shortenLink={linkList.shortenLink}
                originalLink={linkList.originalLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

export { Hero };