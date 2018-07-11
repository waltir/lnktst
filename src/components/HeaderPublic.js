import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {startLogin} from '../actions/auth';
import ResponsiveMenu from 'react-responsive-navbar';

const HeaderPublic = ({startLogin}) => (
  <div className="header-container">
  <div className="header__content content-container">
    <Link className="header__title" to="/"><h1>LnkTst</h1></Link>
    <ResponsiveMenu
    menuOpenButton={<i class="fa fa-bars"></i>}
    menuCloseButton={<i class="fa fa-times"></i>}
    changeMenuOn="700px"
    largeMenuClassName="large-menu-classname"
    smallMenuClassName="small-menu-classname"
    menu={
      <ul>
        <Link className="header__help" to="/about">About</Link>
        <Link className="header__help" to="/contact">Contact</Link>
        <Link className="header__help" to="/faqs">FAQs</Link>
        <button className="box-layout__button header-button" onClick={startLogin}>Login / Register</button>
      </ul>
    }
  />
  </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(HeaderPublic);