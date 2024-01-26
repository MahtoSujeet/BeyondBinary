import React from "react";

const NavBar = () => (
  <div className="bg-danger py-2 px-2">
    <span>
      <a
        className="btn-sm text-decoration-none bg-danger rounded-0 text-light"
        href="https://github.com/MahtoSujeet/BeyondBinary"
      >
        <i className="fab text-light fa-github"></i>
        &nbsp; Source Code
      </a>
      <a
        className="btn-sm text-decoration-none bg-danger rounded-0 text-light"
        href="https://MahtoSujeet.github.io/"
      >
        <i className="fab text-light fa-instagram"></i>
        &nbsp;  Sujeet Mahto
      </a>
    </span>
  </div>
);

export default NavBar;
