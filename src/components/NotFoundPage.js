import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div className="loader">
      <div id="video_overlays"></div>
        <video autoPlay muted loop id="myVideo" height="100%" src={'https://storage.googleapis.com/coverr-main/mp4/Magazine.mp4'} width="100%"></video>
        <div className="box-layout__box">
          <h4 className="box-layout__title" style={{marginTop: '-100px', fontSize: '50px'}}>404 - Page Not Found...</h4>
          <Link to="/" className="button-outline-white">HOME</Link>
        </div>
    </div>
  </div>
);

export default NotFoundPage;
