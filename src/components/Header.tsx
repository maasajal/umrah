import React from "react";

const Header = () => {
  return (
    <>
      <nav className="mx-auto container">
        <ul className="flex gap-10 p-5">
          <li>Home</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
