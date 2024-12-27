import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import { collabData } from "../../../data/homepage/collab-partnerData.js";

const CollabSwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={40}
      speed={2000}
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
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {collabData.map((item) => (
        <>
          <SwiperSlide className="">
            <div className="flex justify-center">
              <img src={item.imageUrl} />
              {/* <h1 className="text-lg font-semibold text-start py-8 px-4">
                {item.title}
              </h1> */}
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default CollabSwiperComponent;
