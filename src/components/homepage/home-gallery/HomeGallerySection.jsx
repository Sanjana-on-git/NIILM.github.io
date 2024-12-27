import HomeGallerySwiperComponent from "../../swiper/homepage/HomeGallerySwiperComponent";

const slides = [
  {
    id: 1,
    title: "SMME",
    description: "School of Modern Media and Entertainment",
    image: "https://www.msu.edu.in/frontend_assets/images/banner/SCSE.jpg",
  },
  {
    id: 2,
    title: "SD",
    description: "School of Design",
    image: "https://www.msu.edu.in/frontend_assets/images/banner/SBW.jpg",
  },
  {
    id: 3,
    title: "SAST",
    description: "School of Applied Science and Technology",
    image: "https://www.msu.edu.in/frontend_assets/images/banner/SIKRA.webp",
  },
  {
    id: 4,
    title: "SAST",
    description: "School of Applied Science and Technology",
    image: "https://www.msu.edu.in/frontend_assets/images/banner/SHST.webp",
  },
  {
    id: 5,
    title: "SAST",
    description: "School of Applied Science and Technology",
    image: "https://www.msu.edu.in/frontend_assets/images/banner/SMME.jpg",
  },
];

const HomeGallerySection = () => {
  return (
    <section className="h-[30rem] flex">
      <HomeGallerySwiperComponent slides={slides} />
    </section>
  );
};

export default HomeGallerySection;
