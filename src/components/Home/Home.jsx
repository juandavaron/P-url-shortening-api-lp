import React from "react";
import { Button } from "../Button/Button";

function Home() {
  return (
    <section className="section home">
      <div className="home__container">
        <div className="home__img"></div>
        <div className="home__copy">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <Button className="oval">Get Started</Button>
        </div>
      </div>
    </section>
  )
};

export { Home };