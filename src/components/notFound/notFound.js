import React from 'react';
import cssClasses from './notFound.module.css';
import {Link} from 'react-router-dom';
import { Button } from 'element-react/next';

const NotFound = (props) => {
  return (
    <div className={cssClasses.notFound}>
      <h2>Page Not Found</h2>
      <Button className={cssClasses.homeBtn} type="success" size="large"><Link className={cssClasses.homeLink} to="/">Go To Home Page</Link></Button>
    </div>
  );
}

export default NotFound;
