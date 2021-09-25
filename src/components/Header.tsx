import React from 'react';
import {HEADER_PROPS_TYPE} from "../types";

function Header(props: HEADER_PROPS_TYPE) {
  return (
    <nav>
        <header className="App-header">
            {props.title}
        </header>
    </nav>
  );
}

export default Header;
