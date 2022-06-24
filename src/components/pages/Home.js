import React, { Fragment } from 'react';
import Sign from '../sign/Sign';
import Login from '../login/Login';
import './Home.css';

const Home = () => (
  <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          {/* empty */}
        </div>
        <div className="col-md-8">
        <Login />
        </div>
        <div className="col-md-2">
          {/* empty */}
        </div>
      </div>
    </div>
  </Fragment>
);

export default Home;