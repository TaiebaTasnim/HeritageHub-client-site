import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa"; // Importing the right arrow icon
import "swiper/css";
import "swiper/css/autoplay";
import "animate.css"; // Animate.css for animations
import { Link } from "react-router-dom";

const Banner = () => {
      const slides = [
            {
              image: "https://i.ibb.co.com/YThVxCG/pexels-nietjuh-612800.jpg",
              title: "Discover the Past",
              description: "Join us in exploring remarkable artifacts that shed light on ancient civilizations and their timeless legacies.",
            },
            {
              image: "https://i.ibb.co.com/XsCm2H9/pexels-dmitry-demidov-515774-3793689.jpg",
              title: "Relics of History",
              description: "Uncover the fascinating stories behind relics that have shaped human history and culture.",
            },
            {
              image: "https://i.ibb.co.com/p3khV4r/pexels-rdne-7979097.jpg",
              title: "Timeless Artifacts",
              description: "Discover artifacts that connect us to the past and inspire a deeper appreciation for our heritage.",
            },
          ];
          
          

  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] md:h-[562px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-6 md:px-16 lg:px-24">
                <div className="text-white max-w-lg animate__animated animate__fadeInRight">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                Learn More
              </span>
            </button>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
