import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Boost } from "../Boost/Boost";
import { Footer } from "../Footer/Footer";

function AppUI() {
  return (
    <React.Fragment>
      <Header></Header>
      <Main>
        {/* <Home></Home>
        <Hero></Hero>
        <Info></Info> */}
        <Boost></Boost>
      </Main>
      <Footer></Footer>
    </React.Fragment>
  )
};

export { AppUI };