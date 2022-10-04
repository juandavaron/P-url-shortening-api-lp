import React from "react";
import { ReactComponent as Logo } from './../../style/svg/logo.svg'
import { GiHamburgerMenu as Menu} from 'react-icons/gi';
import { Modal } from "../Modal/Modal";
import { HeaderBar } from "../HeaderBar/HeaderBar";

function Header({
  openModal,
  setOpenModal
}) {

  const modal = () => {
    setOpenModal(!openModal);
  }

  return(
    <header className="header">
      <Logo className="header__logo"/>
      <HeaderBar className='header__bar'></HeaderBar>
      <Menu
        onClick={modal}
        className='header__menu'
      />
      {openModal && (
        <Modal
          closeModal={modal}
        />
      )}
    </header>
  )
};

export { Header };