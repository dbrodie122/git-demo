import React from 'react';
import moment from 'moment'

export default function Nav() {
  return (
    <nav className="someotherclassname">
      <div>
        Current time is {moment(new Date()).format('MM Do YYYY hh:MM:ss A')}
      </div>
      <div>Home</div>
      <div>About</div>
    </nav>
  );
}
