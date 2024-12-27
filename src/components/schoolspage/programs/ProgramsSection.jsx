/* eslint-disable react/prop-types */
import { useState } from "react";

const ProgramsSection = ({ UG, PG }) => {
  const [selectedCategory, setSelectedCategory] = useState("ug");

  // Dynamically fetch images based on selectedCategory
  const images = selectedCategory === "ug" ? UG.images : PG.images;

  return (
    <div className="h-auto w-4/5 mx-auto my-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Program Levels</h1>
          <p className="mt-4 w-full md:w-2/3 text-lg tracking-wide">
            Our working community creates the ideal atmosphere for career growth
            and personal expression.
          </p>
        </div>

        {/* UG and PG toggle buttons */}
        <div className="border bg-gray-200 rounded-lg flex w-full md:w-1/3 text-xl font-bold mt-4 md:mt-0">
          <button
            className={`flex-1 py-4 ${
              selectedCategory === "ug"
                ? "bg-white border border-gray-400 rounded-lg"
                : ""
            }`}
            onClick={() => setSelectedCategory("ug")}
          >
            UG Programs
          </button>
          <button
            className={`flex-1 py-4 ${
              selectedCategory === "pg"
                ? "bg-white border border-gray-400 rounded-lg"
                : ""
            }`}
            onClick={() => setSelectedCategory("pg")}
          >
            PG Programs
          </button>
        </div>
      </div>

      {/* Program images */}
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group"
            >
              <h1 className="uppercase absolute bottom-8 left-8 w-2/3 text-xl font-bold text-white">
                {image.title}
              </h1>
              <img
                src={image.src}
                alt={`Program image ${index + 1}`}
                className="w-full h-96 object-cover p-2 rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
