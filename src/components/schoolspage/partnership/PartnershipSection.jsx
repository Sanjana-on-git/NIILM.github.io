const logos = [
  {
    src: "https://msu.edu.in/public/storage/our_partnership/C8d028zozkv907wnLsLiAmRnQhDMme0V6cRP0SWS.png",
    alt: "Reliance Retail",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/69ESU0WHe4STh2u6RyxTj1jbJJz8qvTeBu8L7bch.png",
    alt: "Antaloor",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/uLpFcZZ4Ae9tBVo1Lln6Sunj7ZUOoEGrpz5f2ZWb.jpg",
    alt: "Trends",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/Wm2WTyr8sN7upIx1soeVvFKD1B26YjIBYC9TLWar.jpg",
    alt: "MT",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/eAKkThJWlVxDEvG0PO073WOrUtDdimc1HmsmIU6S.jpg",
    alt: "Elin",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/2HpQyJIMZtbgIhLtwtSgvqAW5shkAJq61KA3bjHl.jpg",
    alt: "Aditya Birla",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/xWuKOu0XqzPykfNkKOouQk3gpHZ4zrvKiywcocUY.jpg",
    alt: "Advik",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/WpLPTkmEV5YgNyZUYQBkXYxueJhHJEpmTlkJUwmf.jpg",
    alt: "AenCure",
  },
  {
    src: "https://msu.edu.in/public/storage/our_partnership/jslnt5lL2zwjJoURbT3eUh0I7Cb7ItdF3APCFTgN.jpg",
    alt: "Logo",
  },
];

const PartnershipSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Section */}
      <div className="md:w-5/12 text-center md:text-left">
        <h2 className="text-5xl font-bold mb-4">Our Partnership</h2>
        <p className="text-gray-700 leading-relaxed mt-6 text-lg">
          The partnership between NIILM Skills University and its partners is
          instrumental in addressing the evolving needs of the industry by
          providing access to a pool of well-trained and adept professionals.
          The symbiotic relationship between NIILM and industry partners becomes a
          catalyst for economic development, driving innovation, productivity,
          and overall progress in the nation workforce.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap- md:gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center border rounded-lg shadow-md bg-white h-28 md:h-32"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
        <div className="col-span-full text-center mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
