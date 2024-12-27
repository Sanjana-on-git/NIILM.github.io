// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Slides data Import
import { academicData } from "../../../data/homepage/academicData";

export default function AcademicSwiperComponent() {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      }}
    >
      {academicData.map((item) => (
        <SwiperSlide key={item._id}>
          {({ isActive }) => (
            <div
              className={`rounded-2xl relative mx-auto w-[350px] h-[450px]  ${
                isActive ? "active-slide" : "inactive-slide"
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: isActive ? "none" : "grayscale(100%)",
                transform: isActive ? "scale(1)" : "scale(0.9)",
                border: isActive ? "4px solid #FFFFFF" : "",
                transition: "all 0.5s ease",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>

              {/* Title */}
              <h3 className="absolute bottom-2 left-0 text-[2rem] bg-opacity-50 text-white px-2 py-1">
                {item.title}
              </h3>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
