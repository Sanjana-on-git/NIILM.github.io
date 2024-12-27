/* eslint-disable react/prop-types */
import AcademicSwiperComponent from "../../swiper/homepage/AcademicSwiperComponent";

const SchoolsGallerySection = ({ content }) => {
  return (
    <section
      className="w-full h-auto text-black pt-2 pb-8"
      style={{
        backgroundImage: `url("/images/event-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-3/4 mx-auto flex flex-col items-center text-center py-10">
        <h1 className="text-3xl md:text-4xl mb-6 font-bold">Gallery</h1>
        <p className="text-lg leading-7 tracking-wide w-full md:w-5/6">
          {content}
        </p>
      </div>
      <div>
        <AcademicSwiperComponent />
      </div>
    </section>
  );
};

export default SchoolsGallerySection;
