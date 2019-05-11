import React from 'react';
import cssClasses from './home.module.css';
import logo from '../../logo.svg';

const Home = (props) => {
  return (
    <div className={cssClasses.welcome}>
      <h2>Welcome To our Website</h2>
      <img  src={logo} alt="Website Logo"/>
    </div>
  );
}

export default Home;
