import "./footer.css";

import LogoImage from "../../resources/logo-mobile.png";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import FooterViewMobile from "./FooterViewMobile";
import FooterViewResponsive from "./FooterViewResponsive";

import useIsMobile from "../../hooks/useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile(768);

  const icons = {
    faFacebook,
    faTiktok,
    faInstagram,
    faEnvelope,
    faArrowRight,
  };

  return (
    <footer>
      {isMobile ? (
        <FooterViewMobile {...icons} LogoImage={LogoImage} />
      ) : (
        <FooterViewResponsive {...icons} LogoImage={LogoImage} />
      )}

      <hr />
      <p className="copyright">
        © {new Date().getFullYear()} My Pets. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;