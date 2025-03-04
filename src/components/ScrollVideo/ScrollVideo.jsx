import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function ScrollVideo() {
  const ref = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "start start"],
  });

  const images = useMemo(() => {
    const loadedImages = [];
    for (let i = 1; i <= 86; i++) {
      const img = new Image();
      img.src = `/resources/videoImages/${i}.webp`;
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  const render = useCallback(
    (index) => {
      if (images[index - 1]) {
        ref.current?.getContext("2d")?.drawImage(images[index - 1], 0, 0);
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 86]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    render(1);
  }, [render]);

  // Detectar si la sección está en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.5 } // Se activa cuando al menos el 50% de la sección es visible
    );

    const section = document.getElementById("slow-scroll-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Implementar el scroll suave solo cuando estamos en la sección deseada
  useEffect(() => {
    let scrollTimeout;

    const handleSmoothScroll = (e) => {
      if (isInViewport) {
        e.preventDefault();

        // Evitar el desplazamiento instantáneo
        const scrollDistance = e.deltaY > 0 ? 100 : -100; // Distancia de desplazamiento (puedes ajustarlo)
        const targetScrollY = window.scrollY + scrollDistance;

        // Scroll suave con animación
        scrollTimeout = setTimeout(() => {
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }, 20); // Controla el tiempo entre cada "scroll" para hacerlo gradual
      }
    };

    window.addEventListener("wheel", handleSmoothScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleSmoothScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isInViewport]);

  return (
    <>
      {/* Espacio anterior del scroll */}
      <div
        style={{
          height: "700px",
          width: "100%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {/* Sección donde aplicamos el scroll suave */}
        <div id="slow-scroll-section" style={{ height: "700px", backgroundColor: "lightblue", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <canvas width={700} height={700} ref={ref} />
        </div>
      </div>
    </>
  );
}

export default ScrollVideo;
