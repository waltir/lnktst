import React from 'react';
import HeaderPublic from './HeaderPublic';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicy = () => (
  <div>
  <HeaderPublic />
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title" style={{height: '100px'}}>Privacy Policy</h1>
    </div>
  </div>
  <Grid fluid style={{marginTop: '-35px', marginLeft: '-16px', marginBottom: '0px'}}>
    <Row>
      <Col xs={12} lg={12}><img width="100%" height="400px" style={{width: 'auto', minWidth: '100vw', overflow: 'hidden', filter: 'grayscale(100%)', webkitFilter: 'grayscale(100%)'}} src="https://source.unsplash.com/2000x400/?sf,bay"/>
      </Col>
    </Row>
  </Grid>
  <Grid fluid style={{marginTop: '0px', marginBottom: '150px'}}>
  <div className="content-container">
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} className="paragraph">
                    <h2>Privacy Policy</h2>
                    <p>Your privacy is important to us. It is LnkTst's policy to respect your privacy regarding any information we may collect from you across our website, <a href="http://lnktst.app">http://lnktst.app</a>, and other sites we own and operate.</p>
                    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                    <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
                    <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                    <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                    <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                    <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
                    <p>Please note that we do not offer phone support, but if you have questions regarding our products or your order, please visit our <Link to="/contact">Contact</Link> page.</p>
                    <p><strong>This policy is effective as of 8 July 2018.</strong></p>
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

export default PrivacyPolicy;