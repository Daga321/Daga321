import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={isDark ? "dark-mode footer-div" : "footer-div"}>
        <div className="footer-bottom">
          <span className={isDark ? "dark-mode footer-copyright" : "footer-copyright"}>
            © {currentYear} Daga. Crafted with care.
          </span>
        </div>
      </div>
    </Fade>
  );
}
