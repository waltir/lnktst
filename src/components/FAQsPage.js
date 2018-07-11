import React from 'react';
import HeaderPublic from './HeaderPublic';
import Faqs from './FAQs';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from './Footer';

const FAQsPage = () => (
  <div>
    <HeaderPublic />
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">FAQs</h1>
      </div>
    </div>
    <Grid fluid style={{marginTop: '-35px', marginLeft: '-16px', marginBottom: '0px'}}>
      <Row>
        <Col xs={12} lg={12}>
          <img width="100%" height="250px" style={{width: 'auto', minWidth: '100vw', overflow: 'hidden', filter: 'grayscale(100%)', webkitFilter: 'grayscale(100%)'}} src="https://source.unsplash.com/2000x400/?golden-gate-bridge"/>
        </Col>
      </Row>
    </Grid>
    <div className="content-container">
      <Faqs />
    </div>
    <Footer />
  </div>
);

export default FAQsPage;
