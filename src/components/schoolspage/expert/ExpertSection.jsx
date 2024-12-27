import ExpertSwiperComponent from "../../swiper/schoolspage/ExpertSwiperComponent";

const ExpertSection = () => {
  return (
    <div className="w-full bg-redTheme py-4">
      <div className="w-4/5 mx-auto my-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Expert Speak</h1>
        <div>
          <ExpertSwiperComponent />
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
