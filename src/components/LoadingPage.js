import React from 'react';

const LoadingPage = () => (
  <div className="loader">
    <div id="video_overlays"></div>
    <video autoPlay muted loop id="myVideo" height="100%" src={'https://storage.googleapis.com/coverr-main/mp4/Magazine.mp4'} width="100%"></video>
    <div className="box-layout__box">
      <h1 className="box-layout__title" style={{paddingBottom: '40px'}}>Loading...</h1>
      <img className="loader__image" src="./images/loader2.gif"/>
    </div>
  </div>
);

export default LoadingPage;
