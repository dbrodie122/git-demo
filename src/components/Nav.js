import React from 'react';
import moment from 'moment'

export default function Nav() {
  return (
    <nav>
      <div>
        Current time is {moment(new Date()).format('MM Do YYYY hh:MM:ss A')}

      </div>
      <section>Home</section>
      <section>About</section>
    </nav>
  );
}
