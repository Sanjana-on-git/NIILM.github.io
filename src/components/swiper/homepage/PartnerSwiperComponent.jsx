import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { industryPartnersData } from "../../../data/homepage/collab-partnerData";

const PartnerSwiperComponent = () => {
  if (!industryPartnersData || industryPartnersData.length === 0) {
    return <p>No images found for this category.</p>;
  }

  return (
    <div className="w-full mx-auto">
      <Swiper
        className=""
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
        {industryPartnersData.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center w-full h-52">
              <img
                src={partner.images}
                alt={partner.label}
                className="object-contain"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSwiperComponent;
