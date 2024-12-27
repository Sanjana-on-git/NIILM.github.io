import CollabSwiperComponent from "../../swiper/homepage/CollabSwiperComponent";
import PartnerSwiperComponent from "../../swiper/homepage/PartnerSwiperComponent";

const CollabPartnerSection = () => {
  return (
    <section className="w-10/12 h-auto mx-auto text-center my-12">
      {/* Collab Section */}
      <div className="h-auto my-12">
        <h1 className="font-bold text-4xl mb-12">Recent Achievements</h1>
        <CollabSwiperComponent />
      </div>

      {/* Partners Section */}
      <div className="h-auto my-12">
        <h1 className="font-bold text-4xl mb-12">Industry & Skill Partners</h1>
        <PartnerSwiperComponent />
      </div>
    </section>
  );
};

export default CollabPartnerSection;
