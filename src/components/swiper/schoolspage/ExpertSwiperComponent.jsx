// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Slides data Import
import { expertData } from "../../../data/schoolspage/expertData";
import { Autoplay } from "swiper/modules";

export default function ExpertSwiperComponent() {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      }}
    >
      {expertData.map((item) => (
        <SwiperSlide key={item._id}>
          <div
            className="relative mx-auto h-[16rem] md:h-[44rem]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "all 0.5s ease",
            }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
