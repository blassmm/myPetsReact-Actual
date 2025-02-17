import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db";

import Form from "./Form";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const FooterViewMobile = ({
  LogoImage,
  faFacebook,
  faTiktok,
  faInstagram,
  faEnvelope,
  faArrowRight,
}) => {
  const [dataForm, setDataForm] = useState([]);
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChangeInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const timestamp = Timestamp.now();

    try {
      await addDoc(collection(db, "emails"), { email, timestamp });
      console.log(
        "Correo guardado en Firestore con timestamp:",
        email,
        timestamp
      );

      // Actualiza el estado local con el email y timestamp
      setDataForm((prevDataForm) => [...prevDataForm, { email, timestamp }]);
      setEmail(""); // Limpia el input

      // Muestra el mensaje y lo oculta después de 2 segundos
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    } catch (error) {
      console.error("Error al guardar el correo:", error);
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(".icons-container", {
      opacity: 0,
      y: 50,
    });
    gsap.to(".icons-container", {
      //a quien aplicamos
      opacity: 1,
      y: 0,
      duration: 1.8,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".wrapper-minsize", //cuando se aplica el trigger
        // markers: true, //muestra hud para ver lineas
        start: "top 80%",
        toggleActions: "play none none reverse",
        // scrub: true, //efecto
      },
    });
  });

  return (
    <div className="wrapper-minsize">
      <div className="icons-container">
        <a
          href="#" // Aquí va el enlace que deseas
          target="_blank" // Esto abrirá el enlace en una nueva pestaña
          rel="noopener noreferrer" // Para mayor seguridad
        >
          <FontAwesomeIcon
            className="footer-icons"
            icon={faFacebook}
            size="3x"
          />
        </a>

        <a
          href="https://www.tiktok.com/@mypets_app?_t=8rOdHqpxvNf&_r=1" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FontAwesomeIcon className="footer-icons" icon={faTiktok} size="3x" />
        </a>

        <a
          href="https://www.instagram.com/mypetss.app?igsh=MTQxZG9zaXg0YXRldQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <FontAwesomeIcon
            className="footer-icons"
            icon={faInstagram}
            size="3x"
          />
        </a>
      </div>

      <div className="container-input">
        <h3>Recibe Novedades</h3>
        <Form
          handleSubmitForm={handleSubmitForm}
          faEnvelope={faEnvelope}
          email={email}
          handleChangeInput={handleChangeInput}
          showMessage={showMessage}
          faArrowRight={faArrowRight}
        />
      </div>
      <div className="col-mobile">
        <img src={LogoImage} alt="logo" className="h-[100px] mx-auto m-4" />
        <p>
          Trabajamos incansablemente para ayudar a los corazones de familias y
          peludos. Si deseas brindarnos tu apoyo no dudes en contactarnos
        </p>
        <br />
      </div>
    </div>
  );
};

export default FooterViewMobile;
