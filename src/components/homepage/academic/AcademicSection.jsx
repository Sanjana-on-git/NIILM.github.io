import AcademicSwiperComponent from "../../swiper/homepage/AcademicSwiperComponent";

const AcademicSection = () => {
  return (
    <section className="w-full h-auto text-black pt-2 pb-8" style={{
      backgroundImage: `url("/images/event-banner.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="w-3/4 mx-auto flex flex-col items-center text-center py-10">
        <h1 className="text-[2.5rem] mb-6 font-bold">
          Job-Ready Academic Curriculum
        </h1>
        <p className="text-[1.1rem] leading-7 tracking-wide w-full md:w-5/6">
          At NIILM, we ardently embrace the dynamic shifts characterizing the
          Education in 21st century. Our Strategically structured academic
          framework blended with several unique features are designed to create
          a productive learning trajectory for an enriching experience while
          assuring the requisite skills and knowledge to be attained for an
          ever-evolving career and life.
        </p>
      </div>
      <div>
        <AcademicSwiperComponent />
      </div>
    </section>
  );
};

export default AcademicSection;
