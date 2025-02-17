import "./section1.css";
import Logo from "../../resources/logo-mobile.png";
import Cat from "../../resources/cat.png";
import Dog from "../../resources/dog.png";
import ClickIcon from "../../resources/click-icon.png";
import Icon2 from "../../resources/icon2.png";
import Icon4 from "../../resources/icon4.png";

const Section1 = () => {
  return (
    <>
      

      <div className="elemento-animado text-center py-2">
        <img src={Logo} alt="Logo" className="elemento-animado mx-auto mb-10" />
      </div>

      <div className="elemento-animado flex items-center justify-center">
        <div className="cat-img">
          <img src={Cat} alt="Logo" className="logo elemento-animado" />
        </div>
        <div className="dog-img">
          <img src={Dog} alt="Logo" className="logo elemento-animado" />
        </div>
      </div>

      <h1 className="estilo-titulo text-center py-6 pb-7">
        ¿Perdiste a tu perro / gato?
      </h1>

      <div className="bg-white relative m-auto w-[250px] rounded-xl">
        <h1 className="estilo-titulo-solo text-[#FBBE42] sm:text-[30px] text-[9vw] py-4 leading-[30px] text-center">
          Descarga la App
        </h1>
        <img
          src={ClickIcon}
          alt="clickIcon"
          className="absolute h-[40px] w-[40px] top-11 right-[0.25rem]"
        />
      </div>

      <div className="relative w-[12rem] mx-auto flex flex-col items-center justify-center gap-2 py-10">
        <a
          className="border-2 border-black gap-4 w-full flex justify-center items-center flex-nowrap bg-black py-2 px-2 rounded-[40px] hover:bg-transparent hover:text-black transition-all duration-300"
          href="https://play.google.com/store/apps/details?id=com.mypets.mypetsapplication&pcampaignid=web_share&pli=1"
          target="_blank"  // Esto abrirá el enlace en una nueva pestaña
          rel="noopener noreferrer"  // Para seguridad adicional al abrir enlaces en nueva pestaña
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="icon w-[25px]"
            viewBox="0 0 512 512"
          >
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
          </svg>
          <span className="texts flex flex-col leading-tight">
            <span className="text-[.8rem]">Descargar en</span>
            <span className="">Google Play</span>
          </span>
        </a>
        <a
          className="border-2 border-black gap-4 w-full flex justify-center items-center flex-nowrap bg-black py-2 px-2 rounded-[40px] hover:bg-transparent hover:text-black transition-all duration-300"
          href="https://apps.apple.com/ar/app/my-pets/id6447811827"
          target="_blank"  // Esto abrirá el enlace en una nueva pestaña
          rel="noopener noreferrer"  // Para seguridad adicional al abrir enlaces en nueva pestaña
        >
          <svg
            fill="currentcolor"
            viewBox="-52.01 0 560.035 560.035"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className="w-[25px]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
            </g>
          </svg>
          <span className="texts flex flex-col leading-tight">
            <span className="text-[.8rem]">Descargar en</span>
            <span className="">Apple Store</span>
          </span>
        </a>
      </div>

      <div className="elemento-animado px-4 mt-20 text-center space-y-4 relative z-2 pb-[10rem]">
        <img src={Icon2} alt="icon" className="elemento-animado mx-auto w-[80px] " />
        <h2 className="estilo-titulo ">Gratuita</h2>
        <img src={Icon2} alt="icon" className="mx-auto w-[80px]" />
        <h2 className="estilo-titulo">Funciona en todo el pais</h2>
        <img
          src={Icon4}
          alt="icon"
          className="relative z-2 block mx-auto w-[100px]"
        />
        <h2 className="estilo-titulo">Declarada de interes cultural</h2>
      </div>
    </>
  );
};

export default Section1;
