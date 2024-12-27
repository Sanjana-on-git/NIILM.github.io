import HeroSwiperComponent from "../../swiper/homepage/HeroSwiperComponent";

const HeroGallerySection = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://www.niilmuniversity.ac.in/uploads/slider/WhatsApp_Image_2024_05_14_at_4.45.23_PM_1715685375.jpeg",
    },
    {
      id: 2,
      image:
        "https://www.niilmuniversity.ac.in/uploads/slider/WhatsApp_Image_2024_05_14_at_4.45.24_PM_1715685442.jpeg",
    },
    {
      id: 3,
      image:
        "https://www.niilmuniversity.ac.in/uploads/slider/WhatsApp_Image_2024_05_14_at_4.45.24_PM_(1)_1715685486.jpeg",
    },
    {
      id: 4,
      image:
        "https://www.niilmuniversity.ac.in/uploads/slider/WhatsApp_Image_2024_05_14_at_4.45.39_PM_1715685509.jpeg",
    },
  ];

  return (
    <section className="h-[48rem] flex">
      <HeroSwiperComponent slides={slides} />
    </section>
  );
};

export default HeroGallerySection;
