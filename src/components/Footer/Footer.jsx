import React from "react";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { ReactComponent as Logo } from './../../style/svg/logo.svg';

function Footer() {
  return (
    <footer>
      <section className="footer section">
        <Logo className="footer__logo" />
        <div className="footer__container">
          <h4>Features</h4>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </div>
        <div className="footer__container">
          <h4>Resources</h4>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div className="footer__container">
          <h4>Company</h4>
          <span>About</span>
          <span>Our team</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div className="footer__networks">
          <a href="#"><AiFillFacebook /></a>
          <a href="#"><AiOutlineTwitter /></a>
          <a href="#"><BsPinterest /></a>
          <a href="https://www.instagram.com/nosoyesejuan/"><AiOutlineInstagram /></a>
        </div>

        {/* Sign */}
        <div className="footer__sign">
          <p>Made with 🧡 by <a className="footer__sign-link" href="https://github.com/juandavaron">Juan Varón</a></p>
        </div>
      </section>
    </footer>
  )
};

export { Footer };