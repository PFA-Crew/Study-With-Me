import React from 'react';

const Resources = ({ handleResourceClick }) => {
  return (
    <div id='resourceLayout'>
      <div>
        <h3>Resources</h3>
        <hr />
        <ul id='personalResourcesContainer'>
          <li>
            <a
              href='https://react.dev/reference/react'
              onClick={handleResourceClick}
            >
              Intro to React Hooks
            </a>
          </li>
          <li>
            <a
              href='https://www.mongodb.com/docs/atlas/'
              onClick={handleResourceClick}
            >
              MongoDB Atlas
            </a>
          </li>
          <li>
            <a
              href='https://cssgrid-generator.netlify.app/'
              onClick={handleResourceClick}
            >
              CSS Grid Generator
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Study Resources</h3>
        <hr />
        <ul id='studyResourcesContainer'>
          <li>
            <a
              href='https://www.indeed.com/career-advice/career-development/how-to-take-break-from-studying'
              onClick={handleResourceClick}
            >
              How to Take a Break from Studying
            </a>
          </li>
          <li>
            <a
              href='https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques'
              onClick={handleResourceClick}
            >
              Breathing Exercises
            </a>
          </li>
          <li>
            <a
              href='https://www.healthline.com/health/deskercise'
              onClick={handleResourceClick}
            >
              Desk Stretches
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
