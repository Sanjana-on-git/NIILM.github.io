const CurrentInfoSection = () => {
  return (
    <div
      className="bg-white p-16 rounded-lg shadow-lg border-4 mx-auto border-redTheme"
      style={{
        maxWidth: "95%",
        minHeight: "600px",
      }}
    >
      <div className="grid grid-cols-4 gap-10 mb-16">
        <div className="text-white px-10 py-8 rounded-lg shadow-lg bg-redTheme">
          <h3 className="font-bold text-2xl mb-4 text-center">1st India</h3>
          <p className="text-lg text-center">
            To be the Awarding Body of UGC & NCVET, MSDE, GoI.
          </p>
        </div>

        <div className="text-white px-10 py-8 rounded-lg shadow-lg bg-greenTheme">
          <h3 className="font-bold text-2xl mb-4 text-center">1st India</h3>
          <p className="text-lg text-center">To promote Overseas Mobility.</p>
        </div>

        <div className="text-white px-10 py-8 rounded-lg shadow-lg bg-redTheme">
          <h3 className="font-bold text-2xl mb-4 text-center">1st India</h3>
          <p className="text-lg text-center">
            To promote NEP2020 with Industry Integration.
          </p>
        </div>

        <div className="text-white px-10 py-8 rounded-lg shadow-lg bg-greenTheme">
          <h3 className="font-bold text-2xl mb-4 text-center">1st India</h3>
          <p className="text-lg text-center">
            To feature Learn & Earn during Degree.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-6 gap-12 bg-white border border-gray-400 px-10 py-14 rounded-lg shadow-md"
        style={{
          borderColor: "#012D47",
        }}
      >
        <div className="text-center">
          <p className="text-4xl font-bold text-black">3500+</p>
          <p className="text-lg text-gray-600">Trainees</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-black">50+</p>
          <p className="text-lg text-gray-600">Programmes</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-black">100+</p>
          <p className="text-lg text-gray-600">Industry/Skill Partners</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-black">2</p>
          <p className="text-lg text-gray-600">Campuses</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-black">15+</p>
          <p className="text-lg text-gray-600">Schools & Centers</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-black">100+</p>
          <p className="text-lg text-gray-600">Industry Experts</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentInfoSection;
