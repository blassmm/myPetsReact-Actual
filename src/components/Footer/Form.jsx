import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({handleSubmitForm, faEnvelope, email, handleChangeInput, showMessage, faArrowRight}) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <FontAwesomeIcon icon={faEnvelope} size="1x" />
      <input
        type="email"
        required
        name="email"
        value={email}
        onChange={handleChangeInput}
        id="email"
        autoComplete="email"
        placeholder={showMessage ? "¡Enviado con éxito!" : "Enter your email"}
        maxLength="35"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="white" />
      </button>
    </form>
  );
};
export default Form;
