import { curriculumData } from "../../../data/schoolspage/curriculumData";

const CurriculumSection = () => {
  return (
    <div className="flex flex-col relative h-auto bg-[#a60101] pb-16">
      {/* Video Section */}
      <div className="bg-black rounded-2xl border-2 border-white absolute left-1/2 transform -translate-x-1/2 -top-48 w-full md:w-3/5 h-[26rem]">
        Video Section
      </div>
      {/* Curriculum Section */}
      <div className="mt-[20rem] w-4/5 mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 flex-wrap">
          {curriculumData.map(({ id, title, description, icon }) => {
            const Icon = icon;

            return (
              <div
                className="border-2 border-none m-2 bg-white text-black rounded-2xl"
                key={id}
              >
                <div className="flex flex-col md:flex-row p-6">
                  <div>
                    <Icon className="w-24 h-24" />
                  </div>
                  <div className="flex flex-col ml-3 my-2">
                    <h1 className="text-lg md:text-xl font-bold">{title}</h1>
                    <p className="m-auto">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
