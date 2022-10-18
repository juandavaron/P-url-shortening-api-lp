import React from "react";
import { Button } from "../Button/Button";

function HeaderBar({
  className
}) {
  return(
    <section className={className}>
      <div className="headerBar__container">
        <div className="headerBar__info">
          <span>Features</span>
          <span>Pricing</span>
          <span> Resources</span>
        </div>

        <div className="headerBar__logIn">
          <span>Login</span>
          <Button className='oval headerBar__btn'>Sing Up</Button>
        </div>
      </div>
    </section>
  )
};

export { HeaderBar };