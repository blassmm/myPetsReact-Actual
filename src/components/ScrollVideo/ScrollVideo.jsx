import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'


gsap.registerPlugin(ScrollTrigger);

function ScrollVideo() {
  let totalImages = 86;
  const ref = useRef(null);

  // Cargar las imágenes de forma perezosa
  const images = useMemo(() => {
    const loadedImages = [];
    for (let i = 1; i <= totalImages; i++) {
      const img = new Image();
      img.src = `/resources/videoImages/${i}.webp`;
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  const render = (index) => {
    if (images[index - 1]) {
      ref.current?.getContext("2d")?.drawImage(images[index - 1], 0, 0);
    }
  };

  // Configurar Lenis para scroll suave
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // Controla la velocidad del scroll
      smoothTouch: false, // Opcional: para desactivar el scroll suave en dispositivos táctiles
    });

    function raf(time) {
      lenis.raf(time); // Hacemos el update de Lenis en cada frame
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpiar Lenis cuando el componente se desmonte
    };
  }, []);

  // Configuración de ScrollTrigger con GSAP
  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top center",  // El inicio de la animación será cuando el top del canvas toque el centro del viewport
      end: "bottom center", // El fin de la animación será cuando el bottom del canvas toque el centro del viewport
      scrub: 1, // Esto hace que el scroll esté sincronizado con la animación
      onUpdate: ({ progress }) => {
        const index = Math.min(
          totalImages - 1,
          Math.floor(progress * totalImages)
        );
        render(index + 1); // Actualiza la imagen según el progreso
      },
    });

    // Limpiar ScrollTrigger cuando el componente se desmonte
    return () => {
      scrollTrigger.kill();
    };
  }, [images]);

  return (

      <canvas
        width={1000}
        height={714}
        ref={ref}
        style={{
          backgroundColor: "purple",
          maxWidth: "100%",
          maxHeight: "100%",
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      />
  );
}

export default ScrollVideo;
