import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./slider.module.css";

// Sample data - replace with your actual data
const slides = [
  {
    id: 1,
    image: "/resources/carrousel/1.jpg",
    title: "Rescates en la Patagonia",
    description:
      "Creo una web para encontrar mascotas perdidas en los incendios de la Patagonia",
    categories: [
      { name: "Website", url: "https://www.instagram.com/p/DGBOePqslfI/?img_index=2" }, // URL definida
      { name: "Rescates" }, // Sin URL
      { name: "Incendio" },
    ],
  },
  {
    id: 2,
    image: "/resources/carrousel/2.jpg",
    title: "Beach Sunset",
    description:
      "Stunning sunset over the ocean with golden reflections on the water.",
    categories: [
      { name: "Link", url: "https://www.instagram.com/p/C-tG3f9vTE6/" }
    ],
  },
  {
    id: 3,
    image: "/resources/carrousel/3.jpg",
    title: "Urban Architecture",
    description: "Modern city skyline with impressive architectural designs.",
    categories: [{ name: "Lorem" }, { name: "Lorem" }, { name: "Lorem" }],
  },
  {
    id: 4,
    image: "/resources/carrousel/4.jpg",
    title: "Forest Trail",
    description: "Peaceful forest path surrounded by tall trees and wildlife.",
    categories: [{ name: "Lorem" }, { name: "Lorem" }, { name: "Lorem" }],
  },
  {
    id: 5,
    image: "/resources/carrousel/5.jpg",
    title: "Desert Landscape",
    description:
      "Vast desert with golden sand dunes stretching to the horizon.",
    categories: [{ name: "Lorem" }, { name: "Lorem" }, { name: "Lorem" }],
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning, goToNext]); //Corrected dependencies

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {slides.map((slide, index) => {
          // Calculate the position relative to the current slide
          let position = index - currentIndex;

          // Handle wrapping for the circular carousel effect
          if (position < -2) position += slides.length;
          if (position > 2) position -= slides.length;

          // Determine the appropriate CSS class based on position
          let slideClass = styles.slide;
          if (position === 0) slideClass += ` ${styles.active}`;
          else if (position === -1 || position === slides.length - 1)
            slideClass += ` ${styles.previous}`;
          else if (position === 1 || position === -slides.length + 1)
            slideClass += ` ${styles.next}`;
          else if (position === -2 || position === slides.length - 2)
            slideClass += ` ${styles.farPrevious}`;
          else if (position === 2 || position === -slides.length + 2)
            slideClass += ` ${styles.farNext}`;

          return (
            <div
              key={slide.id}
              className={slideClass}
              style={{
                transform: `translateX(${position * 100}%)`,
                zIndex: position === 0 ? 5 : 4 - Math.abs(position),
              }}
              onClick={() => goToSlide(index)}
            >
              <div className={styles.slideContent}>
                <img
                  src={slide.image || "/vite.svg"}
                  alt={slide.title}
                  className={styles.slideImage}
                />
                <div className={styles.slideInfo}>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <p className={styles.slideDescription}>{slide.description}</p>
                  <div className={styles.categoryContainer}>
                    {slide.categories.map((category, i) =>
                      category.url ? (
                        // Si tiene URL, lo envuelves en un <a> con la clase .buttonURL
                        <a
                          key={i}
                          href={category.url}
                          target="_blank" // Esto abre el enlace en una nueva pestaña
                          rel="noopener noreferrer" // Para mejorar la seguridad
                          className={`${styles.categoryButton} ${styles.buttonURL}`} // Aquí agregas la clase .buttonURL
                        >
                          {category.name}
                        </a>
                      ) : (
                        // Si no tiene URL, es un simple botón
                        <button key={i} className={styles.categoryButton}>
                          {category.name}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={goToPrevious}
      >
        <ChevronLeft className={styles.navIcon} />
      </button>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={goToNext}
      >
        <ChevronRight className={styles.navIcon} />
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.activeIndicator : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
