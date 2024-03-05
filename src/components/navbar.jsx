import React from "react";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* home route */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* about route */}
        </li>
        <li>
          <Link to="/services">Services</Link> {/*  services route */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/*contact route */}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
