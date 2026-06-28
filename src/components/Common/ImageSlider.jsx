import { useEffect, useState } from "react";

function ImageSlider({ images }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  function prevSlide() {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  }

  function nextSlide() {
    if (currentIdx < images.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  }

  return (
    <>
      <img
        src={`${images[currentIdx].secure_url}`}
        alt={`post image`}
        loading="lazy"
        className={`object-center h-full w-full object-cover transition-transform duration-700 group-hover:scale-110`}
      />

      {images.length > 1 && (
        <>
          {currentIdx !== images.length - 1 && (
            <i
              className="ri-arrow-right-double-line absolute text-xl md:-right-10 right-5 top-1/2 transform -translate-y-1/2 sm:group-hover:right-4 transition-all duration-200 bg-white text-primary rounded-full w-6 h-6 flex justify-center items-center select-none z-20"
              onClick={nextSlide}
            ></i>
          )}
          {currentIdx !== 0 && (
            <i
              className="ri-arrow-left-double-line absolute text-xl md:-left-10 left-5 top-1/2 transform -translate-y-1/2 sm:group-hover:left-4 transition-all duration-200 bg-white text-primary rounded-full w-6 h-6 flex justify-center items-center select-none z-20"
              onClick={prevSlide}
            ></i>
          )}
        </>
      )}

      <div className="z-20 absolute bottom-3 w-full flex justify-center items-center gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-1.5 h-1.5 ${idx === currentIdx ? "bg-white" : "bg-white/30"}  rounded-full`}
          ></span>
        ))}
      </div>
    </>
  );
}

export default ImageSlider;
