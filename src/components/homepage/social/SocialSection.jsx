const SocialSection = () => {
  return (
    <section
      className="w-full h-auto py-12"
      style={{
        backgroundImage: `url("/images/event-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full sm:w-10/12 mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl text-center font-bold">
          Follow @niilmuniversity
        </h1>

        {/* Social Media Cards */}
        <div className="w-full my-8 flex flex-wrap justify-center gap-4">
          {/* Card 1 */}
          <div className="h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300">
            {/* Content inside the card */}
          </div>
          {/* Card 2 */}
          <div className="h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300">
            {/* Content inside the card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
