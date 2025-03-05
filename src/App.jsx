import { useEffect } from "react";
import styles from "./App.module.css";

// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollVideo from "./components/ScrollVideo/ScrollVideo.jsx";

import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
// import { Canvas } from "@react-three/fiber";
// import Fiber from "./components/R3F/fiber";
// import GridTest from "./components/GridTest/GridTest";
// import GridTest2 from "./components/GridTest2/GridTest2";
import Section3 from "./components/Section3/Section3";

import Slider from "./components/Slider/Slider.jsx";
import bgVector from "./resources/bg-vector.png";

import ReactGA from "react-ga4";

function App() {
  
  useEffect(() => {
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID;

    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "App.tsx" });
    }
  }, []);

  return (
    <>
      <div
        className={`${styles.wrapperMain} relative flex flex-col justify-center items-center`}
      >
        <div className={`${styles.backgroundOverlay}`}></div>

        <div
          className={`${styles.wrapper} shadow-custom max-w-40rem w-full relative`}
        >
          {/* <Navbar /> */}
          <div className={`${styles.section1} `}>
            <Section1 />
          </div>

          <div>
            <img
              src={bgVector}
              alt="background-vector"
              className="relative bottom-10 filter brightness-0 invert w-full h-[100px]"
            />
            <Section2 />
          </div>

          <Section3 />
          <ScrollVideo />
          <Slider />

          <div className="h-[40vh]">
            <Canvas>
              <Fiber />
            </Canvas>
          </div>

          {/* <div className="border-black">
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
