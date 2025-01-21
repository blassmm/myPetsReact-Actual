import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import { Canvas } from "@react-three/fiber";
import Fiber from "./components/R3F/fiber";
import GridTest from "./components/GridTest/GridTest";
import GridTest2 from "./components/GridTest2/GridTest2";
import Section3 from "./components/Section3/Section3";

import bgVector from "./resources/bg-vector.png";

function App() {
  return (
    <>
      <div className="wrapper-main relative flex flex-col justify-center items-center">
        <div className="background-overlay"></div>

        <div className="wrapper shadow-custom max-w-40rem w-full relative">
          {/* <Navbar /> */}
          <div className="section-1">
            <Section1 />
          </div>

          <div className="">
            <img
              src={bgVector}
              alt="iphone"
              className="relative bottom-10 filter brightness-0 invert w-full h-[100px]"
            />
            <Section2 />
          </div>

          <Section3 />

          {/* <div className="h-[40vh]">
            <Canvas>
              <Fiber />
            </Canvas>
          </div>

          <div className="border-black">
            <GridTest />
          </div>

          <div className="border-black">
            <GridTest2 />
          </div> */}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
