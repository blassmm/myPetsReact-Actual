import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedElements = ({ emoji = "😄", animationType = "bounce", scale = 1.5, rotation = 0, duration = 2, repeat = -1 }) => {
  const emojiRef = useRef(null);

  useEffect(() => {
    // Dependiendo del tipo de animación que se pase como prop, aplicamos una animación diferente.
    if (animationType === "bounce") {
      gsap.fromTo(
        emojiRef.current,
        { y: 0, scale: 1 },
        {
          y: -30,
          scale: scale,
          repeat: repeat,
          yoyo: true,
          duration: duration,
          ease: 'power1.inOut',
        }
      );
    } else if (animationType === "rotate") {
      gsap.to(emojiRef.current, {
        rotation: rotation,
        repeat: repeat,
        duration: duration,
        ease: 'power2.inOut',
      });
    } else if (animationType === "scale") {
      gsap.fromTo(
        emojiRef.current,
        { scale: 1 },
        {
          scale: scale,
          repeat: repeat,
          yoyo: true,
          duration: duration,
          ease: 'power1.inOut',
        }
      );
    }
  }, [animationType, scale, rotation, duration, repeat]); // Dependencias para que la animación se actualice cuando cambian las props

  return (
    <div ref={emojiRef} style={{ fontSize: '4rem' }}>
      {emoji}
    </div>
  );
};

export default AnimatedElements;

// #useEffect: Cada vez que cambian las props (como el tipo de animación o la duración), gsap aplicará la animación correspondiente.
// #gsap.fromTo y gsap.to: Usamos fromTo para animaciones que comienzan en un valor específico, y to cuando la animación solo tiene un punto final.