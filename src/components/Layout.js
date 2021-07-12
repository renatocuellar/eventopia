import React from 'react';

import Navbar from './Navbar';

// With this layout every page can have a navigation bar.

function Layout(props) {

  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
