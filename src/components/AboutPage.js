import React from 'react';
import HeaderPublic from './HeaderPublic';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const AboutPage = () => (
<div>
  <HeaderPublic />
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title" style={{height: '100px'}}>About</h1>
    </div>
  </div>
  <Grid fluid style={{marginTop: '-35px', marginLeft: '-16px', marginBottom: '0px'}}>
    <Row>
      <Col xs={12} lg={12}><img width="100%" height="250px" style={{width: 'auto', minWidth: '100vw', overflow: 'hidden', filter: 'grayscale(100%)', webkitFilter: 'grayscale(100%)'}} src="https://source.unsplash.com/2000x400/?golden,gate,bridge"/></Col>
    </Row>
  </Grid>
  <Grid fluid style={{marginTop: '0px', marginBottom: '150px'}}>
    <div className="content-container">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} style={{padding:'10px'}}>
            <h5 className="profile__section-title">About LnkTst®</h5>
            <p className="profile__section-paragraph">LnkTst is a tool that allows QA teams the ability to easily manage and sort their web and mobile deeplinks. Some teams have dozens of links that need to be physically tested on a daily or weekly basis. Performing these tasks can be quite time consuming, especially, when these links need to be tested on a variety of test devices.</p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} style={{padding:'10px'}}>
            <h5 className="profile__section-title">Why TstLnk exists</h5>
            <p className="profile__section-paragraph">Before LnkTst was developed our team was managing out links in a secure document. We found that accessing this document on each test device was time consuming and not very intuitive. We sought to fix the bottleneck that we saw in the Blackbox QA space.</p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
            <h5 className="profile__section-title">Community Guidelines</h5>
            <p className="profile__section-paragraph">Along with our Terms of Use and Privacy Policy, these Community Guidelines represent our best attempt to foster a community based on respect and understanding, while celebrating the different cultures, perspectives, and values that make us human.</p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <h5 className="profile__section-title">Act lawfully</h5>
          <p className="profile__section-paragraph">Don’t post or do illegal things on TstLnk. Do not add links that support organized crime or terrorist activities or that seek to incite violence. Don’t add links to illegal behavior - this includes illegal drugs or other banned substances, sexual services, harm to animals and humans, fraudulent activities, and well, simply put, everything else that is against the law.</p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h5 className="profile__section-title">Support</h5>
          <p className="profile__section-paragraph">If have any technical questions please direct them to our support team <Link to='/support'>here</Link>.</p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <h5 className="profile__section-title">Privacy Policy</h5>
          <p className="profile__section-paragraph">If you have any questions regarding our Privacy Policy it can be located <Link to='/privacy'>here</Link>.</p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <h5 className="profile__section-title">Terms Of Service</h5>
          <p className="profile__section-paragraph">Any questions you might have regarding the TstLnk Terms Of Service have likely been answered <Link to='/terms'>here</Link>.</p>
        </Col>
      </Row>
    </div>
  </Grid>
  <Grid fluid>
    <Row>
        <Col xs={12} lg={12}>
        <Footer />
        </Col>
    </Row>
  </Grid>
</div>
);

export default AboutPage;