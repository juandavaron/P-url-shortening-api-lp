import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Home } from "../Home/Home";
// import { Hero } from "../Hero/Hero";
import { Info } from "../Info/Info";
import { Boost } from "../Boost/Boost";
import { Footer } from "../Footer/Footer";

function AppUI({
  openModal,
  setOpenModal
}) {
  return (
    <React.Fragment>
      <Header
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <Main>
        <Home />
        {/* <Hero></Hero> */}
        <Info />
        <Boost />
      </Main>
      <Footer />
    </React.Fragment>
  )
};

export { AppUI };