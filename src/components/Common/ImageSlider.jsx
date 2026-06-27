import { useState } from "react";

function ImageSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const image = [
    "/carousel-1.jpg",
    "/carousel-2.jpg",
    "/carousel-3.jpg",
    "/carousel-4.jpg",
  ];

  function prevSlide() {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  }

  function nextSlide() {
    if (currentIdx < image.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  }
  return (
    <>
      <img
        src={`${image[currentIdx]}`}
        alt={`post image`}
        loading="lazy"
        className={`w-full h-full object-fit object-cover transition-all duration-200 `}
      />

      {image.length > 1 && (
        <>
          {currentIdx !== image.length - 1 && (
            <i
              className="ri-arrow-right-double-line absolute text-xl md:-right-10 right-5 top-1/2 transform -translate-y-1/2 sm:group-hover:right-4 transition-all duration-200 bg-white text-primary rounded-full w-6 h-6 flex justify-center items-center select-none"
              onClick={nextSlide}
            ></i>
          )}
          {currentIdx !== 0 && (
            <i
              className="ri-arrow-left-double-line absolute text-xl md:-left-10 left-5 top-1/2 transform -translate-y-1/2 sm:group-hover:left-4 transition-all duration-200 bg-white text-primary rounded-full w-6 h-6 flex justify-center items-center select-none"
              onClick={prevSlide}
            ></i>
          )}
        </>
      )}

      <div className="z-20 absolute bottom-3 w-full flex justify-center items-center gap-2">
        {image.map((_, idx) => (
          <span
            className={`w-1.5 h-1.5 ${idx === currentIdx ? "bg-white" : "bg-white/30"}  rounded-full`}
          ></span>
        ))}
      </div>
    </>
  );
}

export default ImageSlider;
