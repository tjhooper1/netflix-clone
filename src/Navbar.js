import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isNavBackgroundVisible, setIsNavBackgroundVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsNavBackgroundVisible(true);
      } else {
        setIsNavBackgroundVisible(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${isNavBackgroundVisible && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1600px-Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ?format=jpg&name=240x240"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Navbar;
