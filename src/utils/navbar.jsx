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
        href="https://www.instagram.com/sujeetvibes"
        target="_blank"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp;  Sujeet Mahto
      </a>
    </span>
  </div>
);

export default NavBar;
