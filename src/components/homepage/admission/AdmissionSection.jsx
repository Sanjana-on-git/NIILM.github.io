const AdmissionSection = () => {
  return (
    <section
      className="w-full h-auto py-20"
      style={{
        backgroundImage: `url("/images/cta-banner-red.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full sm:w-10/12 md:w-1/2 mx-auto flex flex-col justify-center text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-bold">Apply for Admissions</h1>
        <p className="text-lg sm:text-2xl font-semibold my-8 w-full sm:w-3/4 mx-auto">
          Apply now for admission to MSU - 2024 batch. Join us and shape your
          future today!
        </p>
        <button className="bg-[#165d23] border border-white uppercase mx-auto text-lg sm:text-2xl font-bold py-4 px-8 sm:px-12 rounded-tl-full rounded-br-full transition-all duration-500 hover:rounded-bl-full hover:rounded-tr-full hover:rounded-br-none hover:rounded-tl-none">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default AdmissionSection;
