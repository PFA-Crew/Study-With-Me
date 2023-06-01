import React from 'react';
import './assets/App.scss';

const Desktop = ({ resourceURL }) => {
  return resourceURL ? (
    <iframe src={resourceURL}></iframe>
  ) : (
    <span>click a resource to start!</span>
  );
};

export default Desktop;
