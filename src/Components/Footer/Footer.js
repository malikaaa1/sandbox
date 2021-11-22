import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            SAND<span>BOX</span>
          </h3>

          <p class="footer-links">

            <span>Apple|</span>

            <span>Samsung|</span>

            <span>Xiomi</span>
          </p>

          <p class="footer-company-name">SandBox © 2021</p>
        </div>

        <div class="footer-center">
            <i class="fa fa-map-marker"></i>
            <p className="adress">
              <span>Tabyshalieva 29</span>Kyrgyzstan Bishkek
            </p>
          <div>
            <i class="fa fa-phone"></i>
            <p className="adress">+996 555.555.555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <span className="email">sandBox@company.com</span>
            </p>
          </div>
        </div>

    
      </footer>
    </div>
  );
};

export default Footer;
