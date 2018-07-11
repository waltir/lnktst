import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import ResponsiveMenu from 'react-responsive-navbar';

export const Header = ({startLogout}) => (
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
            <Link className="header__help" to="/profile">Profile</Link>
            <button className="header-button" onClick={startLogout}>Logout</button>
          </ul>
        }
      />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);