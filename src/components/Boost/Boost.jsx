import React from "react";
import { Button } from "../Button/Button";

function Boost() {
  return(
    <section className="section boost">
      <h2 className="boost__title">Boost your links today</h2>
      <Button
        className="boost__btn oval"
      >Get Started
      </Button>
    </section>
  )
};

export { Boost };