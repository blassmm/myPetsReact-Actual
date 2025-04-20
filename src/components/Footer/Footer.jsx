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
    <footer className="relative z-99">
      {/* {isMobile ? (
        <FooterViewMobile {...icons} LogoImage={LogoImage} />
      ) : (
        <FooterViewResponsive {...icons} LogoImage={LogoImage} />
      )} */}

<FooterViewMobile {...icons} LogoImage={LogoImage} />

    

      <hr />
      <p className="copyright">
        © {new Date().getFullYear()} My Pets. Todos los derechos reservados.
      </p>

      {/* Información estructurada para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PetStore",
          name: "My Pets",
          url: "https://mypetsapp.com",
          logo: "https://mypetsapp.com/resources/logo-mobile.png",
          sameAs: [
            "https://www.facebook.com/mypets",
            "https://www.instagram.com/mypets",
            "https://www.tiktok.com/@mypets",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Principal 123",
            addressLocality: "Ciudad",
            addressRegion: "Región",
            postalCode: "12345",
            addressCountry: "ES",
          },
          telephone: "+34 123 456 789",
          email: "info@mypetsapp.com",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "10:00",
              closes: "14:00",
            },
          ],
        })}
      </script>
    </footer>
  );
};

export default Footer;
