import React from 'react';
import moment from 'moment';

export default function Nav() {
  return (
    <nav>
      <div> Current Time: {moment(new Date()).format('MM Do YYYY hh:MM:ss A')} </div>
      <a> Home </a>
      <a> About </a>
    </nav>
  );
}
