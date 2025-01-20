import Iphone from "../../resources/iphone.png";
import Icon1 from "../../resources/icon1.png";
import Huellas from "../../resources/huellas.png";
import Alarma from "../../resources/alarma.png";
import FotoFede from "../../resources/foto-nota.png";


const Section2 = () => {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center gap-2">
      <img src={Iphone} alt="iphone" className="block mx-auto pb-9" />

      <div className="text-center space-y-4 text-black">
        <img src={Icon1} alt="icon" className="block mx-auto w-[80px]" />
        <h2 className="estilo-titulo text-black">Geolocalización</h2>
        <p>
          Con My Pets, puedes reportar en tiempo real si perdiste o encontraste
          un peludo. Nuestro mapa interactivo te ayuda a actuar rápido y
          encontrar soluciones localizadas.
        </p>

        <img src={Huellas} alt="huellas" className="block mx-auto w-[100px]" />
        <h2 className="estilo-titulo">Tipos de Reportes</h2>
        <p>
          ¿Viste, encontraste, perdiste, o buscas adoptar o dar tránsito? Crea
          un reporte en segundos y ayuda a conectar vidas con solo unos clicks.
        </p>

        <img src={Alarma} alt="alarma" className="block mx-auto w-[100px]" />
        <h2 className="estilo-titulo">Alertas y Notificaciones</h2>
        <p>
          Recibe alertas en tiempo real sobre mascotas perdidas o encontradas
          cerca de ti. Sé parte activa en la resolución de casos.
        </p>

        <img src={FotoFede} alt="alarma" className="mx-auto p-4" />

        <button className="border p-4">Leer la nota</button>

        
      </div>
    </div>
  );
};
export default Section2;
