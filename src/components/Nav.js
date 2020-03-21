import React from 'react';
import moment from 'moment';

export default function Nav() {
  return (
    <nav>
      Current Time: {moment(new Date()).format('MM Do YYYY hh:MM:ss A')}
      <a>Home</a>
      <a>About</a>
    </nav>
  );
}
