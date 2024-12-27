/* eslint-disable react/prop-types */
const HeaderSection = ({ image, heading }) => {
  return (
    <div className="relative w-full">
      <div className="relative h-80 overflow-hidden md:h-[28rem]">
        <div
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out`}
        >
          {/* Image */}
          <img
            src={image}
            alt={`Alt ${image}`}
            className="absolute w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          {/* Text */}
          <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
