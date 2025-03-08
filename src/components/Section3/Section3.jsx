import Marquee from "react-fast-marquee";
import { useScramble } from 'use-scramble';

import Sponsor1 from "../../resources/sponsors/logo1.png";
import Sponsor2 from "../../resources/sponsors/logo2.png";
import Sponsor3 from "../../resources/sponsors/logo3.png";
import Sponsor4 from "../../resources/sponsors/logo4.png";
import Sponsor5 from "../../resources/sponsors/logo5.png";

import "./_section3.css";

import bgVector from "../../resources/bg-vector.png";
import ClickIcon from "../../resources/click-icon.png";
import { useRescuesStore } from "../../store";

const Section3 = () => {

  const rescates = useRescuesStore((state) => state.rescates);

  const { ref } = useScramble({
    text: rescates,
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 1,
    chance: 1,
    overdrive: false,
    overflow: true,
    range: [48, 53, 56],
  });

  return (
    <div className="relative h-[65vh] w-full mt-6 mb-10 bg-white">
      <div className="bg-[#FDA51E] absolute top-20 w-full h-[65vh]">

      </div>


      <img src={bgVector} alt="iphone" className="w-full h-[150px] " />
      <div className="absolute top-12 left-0 w-full flex flex-col justify-center items-center text-white z-10 ">
        <p ref={ref} className="text-6xl" />
        <h2 className="text-3xl">Reencuentros</h2>
      </div>

      <div className="bg-white mt-10 w-[250px] rounded-xl relative mx-auto">
        <h1 className="estilo-titulo-solo text-[#FBBE42] sm:text-[30px] text-[9vw] py-4 leading-[30px] text-center">
          Marcas que nos acompañan
        </h1>
      </div>

      <Marquee pauseOnHover speed={150} className="bg-[#FDA51E] mt-5">
        <img src={Sponsor1} alt="vitalcan" className="h-[100px] mr-40" />
        <img
          src={Sponsor2}
          alt="defensoriaprovbsas"
          className=" h-[100px] mr-40"
        />
        <img src={Sponsor3} alt="feliceslasvacas" className="h-[200px] mr-40" />
        <img src={Sponsor4} alt="nutrique" className="h-[auto] mr-40" />
        <img src={Sponsor5} alt="petit" className="logos h-[130px] mr-40" />
      </Marquee>
    </div>
  );
};
export default Section3;
