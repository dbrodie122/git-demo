import React from 'react';
import moment from 'moment';

export default function Nav() {
  return (
    <React.Fragment>
      <div>
        Current time is {moment(new Date()).format('MM Do YYYY hh:MM:ss A')}
      </div>
      <nav className='flex-nav'>
        <a>Home</a>
        <a>About</a>
      </nav>
    </React.Fragment>
  );
}
