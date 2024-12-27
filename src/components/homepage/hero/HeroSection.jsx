export default function HeroSection() {
  return (
    <div className="space-y-16 bg-gray-100 p-8">
      {/* Section 1: Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
          <img
            src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/we-are-new-age-_-industry-led_mewxev.webp"
            alt="Presentation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-4 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            We are New Age & Industry-Led!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            <span className="font-semibold text-gray-800">
              NIILM Skills University
            </span>{" "}
            is India first Skills University to offer Industrial Immersive
            degree programmes within the holistic development framework of
            NEP2020. Our{" "}
            <span className="font-semibold">
              outcome-focused skill-integrated model
            </span>{" "}
            of higher education is backed by leading industry and sectoral
            partners in India and worldwide.
          </p>
          <button className="text-blue-500 underline">WHO WE ARE →</button>
        </div>
      </div>

      {/* Section 2: Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="flex-1">
          <img
            src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/we-are-new-age-_-industry-led_mewxev.webp"
            alt="Presentation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-4 md:mr-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            Empowering Skills for the Future!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Our programs are designed to bridge the gap between academia and
            industry. With hands-on learning, internships, and industry-aligned
            curriculum, we prepare students to excel in their careers.
          </p>
          <button className="text-blue-500 underline">LEARN MORE →</button>
        </div>
      </div>
    </div>
  );
}
