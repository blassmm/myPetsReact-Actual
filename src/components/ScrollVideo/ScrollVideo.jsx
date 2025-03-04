import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function ScrollVideo() {
  let totalImages = 86;

  const ref = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
    //center del contenedor toca el end del VP = Empieza
    //center del contenedor toca el start del VH = Termina
  });

  const images = useMemo(() => {
    const loadedImages = [];
    for (let i = 1; i <= totalImages; i++) {
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

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, totalImages]);

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
      { threshold: 0.1 } // Se activa cuando al menos el 100% de la sección es visible
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

        const scrollDistance = e.deltaY > 0 ? 65 : -120;
        // Se desplaza de a 50px scrolleando hacia abajo
        // Se desplaza de a 120px scrolleando hacia arriba

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
    <div id="slow-scroll-section" className="bg-black w-[100%] h-[100px]">
      lorem
    </div>
      <canvas
        
        width={1000}
        height={1000}
        ref={ref}
        style={{
          backgroundColor: "orange",
          maxWidth: "100%", // Para evitar desbordamientos horizontales
          maxHeight: "100%", // Para evitar desbordamientos verticales
        }}
      />
    </>
  );
}

export default ScrollVideo;
