import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterViewResponsive = ( { LogoImage, faFacebook, faTiktok, faInstagram, faEnvelope, faArrowRight } ) => {
  return (
    <div className="wrapper-responsive">
      <div className="row">
        <div className="col">
          <div
            className="logo2"
            style={{
              backgroundImage: `url(${LogoImage})`,
            }}
          ></div>
          <p>
            Trabajamos incansablemente para ayudar a los corazones de familias y
            mascotas. Si deseas brindarnos tu apoyo no dudes en contactarnos!
          </p>
          <br />
        </div>

        <div className="col">
          <h3>Recibe Novedades</h3>
          <form>
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your email id"
              required
            />
            <button type="submit">
              <FontAwesomeIcon icon={faArrowRight} size="1x" color="white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FooterViewResponsive;
