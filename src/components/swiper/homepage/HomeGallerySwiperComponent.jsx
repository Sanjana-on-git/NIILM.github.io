/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const HomeGallerySwiperComponent = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides={true}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
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

export default HomeGallerySwiperComponent;
