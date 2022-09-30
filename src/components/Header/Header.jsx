import React from "react";
import { ReactComponent as Logo } from './../../style/svg/logo.svg'
import { GiHamburgerMenu as Menu} from 'react-icons/gi';
import { Modal } from "../Modal/Modal";

function Header({
  openModal,
  setOpenModal
}) {

  const modal = () => {
    setOpenModal(!openModal);
  }

  return(
    <header className="header">
      <Logo />
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