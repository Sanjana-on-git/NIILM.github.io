/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSwiperComponent = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={true}
      modules={[Autoplay, Pagination]}
    >
      {slides.map((item) => (
        <>
          <SwiperSlide>
            <img src={item.image} className="w-full h-full object-cover" />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default HeroSwiperComponent;
