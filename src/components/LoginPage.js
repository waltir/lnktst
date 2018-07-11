import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {startLogin, videoBackground} from '../actions/auth';
import HeaderPublic from './HeaderPublic';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from './Footer';

export const LoginPage = ({startLogin}) => (
  <div>
    <HeaderPublic/>
    <div className="box-layout">
      <div id="video_overlays"></div>
        <video autoPlay muted loop id="myVideo" height="100%" src={'https://storage.googleapis.com/coverr-main/mp4/Magazine.mp4'} width="100%"></video>
      <div className="box-layout__box">
        <h1 className="box-layout__title">LnkTst.</h1>    
        <p className="box-layout__paragraph">Helps make managing and testing mobile deeplinks and web applications even easier.</p>
        <button className="box-layout__button button-outline-white" onClick={startLogin}>Login / Register</button>
      </div>
  </div>
  <Row>
    <Col lg={6} style={{height: '400px', overflow: 'hidden'}} className="box-layout__box info__cell2">
      <div className="img-text">
        <h2 className="box-layout__title" style={{fontSize: '30px'}}>Accessible on any device.</h2>
        <h2 className="box-layout__paragraph" style={{ marginTop: '-40px', fontSize: '13px', fontWeight: '100'}}>Access and test your links from any device.</h2>
        <img src="./images/iPhone82.png" height="auto" width="200px" style={{marginBottom: '-60px', overflow: 'hidden'}}/>
      </div>
      <img className="img-home1" src="https://images.unsplash.com/photo-1495366554757-8568e69d7f80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b23e33878c459a275a9dc6481a4bf638&auto=format&fit=crop&w=967&q=80" alt="Snow" height="400px" width="100%"/>
    </Col>
    <Col lg={6} style={{height: '400px', overflow: 'hidden'}} className="box-layout__box info__cell2">
      <div className="img-text">
        <h2 className="box-layout__title" style={{fontSize: '30px'}}>Totally free.</h2>
        <h2 className="box-layout__paragraph" style={{ marginTop: '-40px', fontSize: '13px', fontWeight: '100'}}>We cover the cost so you can focus on testing.</h2>
        <img src="./images/ipad2.png" height="auto" width="300px" style={{marginBottom: '-60px', overflow: 'hidden'}}/>
      </div>
      <img className="img-home1" src="https://images.unsplash.com/photo-1504771646146-67b39393c67b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e2954e8fcdcaadac96da7a2296e0888&auto=format&fit=crop&w=1350&q=80" alt="Snow" height="400px" width="100%"/>
    </Col>
  </Row>
  <div className="home-container" style={{marginTop: '-10px'}}>
    <div className="banner">
        <span className="banner-content paragraph">Signup to linker.app today to speed up your testing! <button className="button" onClick={startLogin}>Login / Register</button></span>
    </div>
  </div>
  <Footer />
</div>
);
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);