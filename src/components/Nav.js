import React from 'react';
import moment from 'moment';

export default function Nav() {
  return (
    <React.Fragment>
      <div>
        Current time is {moment(new Date()).format('MM Do YYYY hh:MM:ss A')}
      </div>
      <nav className='flex-nav'>
        <div>Home</div>
        <div>About</div>
      </nav>
    </React.Fragment>
  );
}
