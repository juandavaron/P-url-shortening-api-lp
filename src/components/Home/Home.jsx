import React from "react";
import { ReactComponent as Logo } from './../../style/svg/illustration-working.svg'

function Home() {
  return(
    <section className="section home">
      <div className="home__container">
        <Logo className="home__img"/>
      </div>
      <h1>More than just shorter links</h1>
      <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <button className="oval">Get Started</button>
    </section>
  )
};

export { Home };