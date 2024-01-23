import SectionTitle from "../sectionTitle/SectionTitle";
import men from "../../assets/assets/men.png";
import women from "../../assets/assets/women.png";
import { BsArrowRight } from "react-icons/bs";

const CategoryWatch = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <SectionTitle heading={"Choose Your Option"} />
      <div className="flex flex-col md:flex-row-reverse lg:ml-0 md:space-x-4">
        <div className="flex flex-col group relative p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 md:w-1/2">
          <div>
            <img
              src={men}
              alt=""
              className="object-cover w-full mb-4 h-60 md:h-96 lg:h-80 dark:bg-gray-500"
            />
          </div>
          <div className="flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-700">
            <div className="flex justify-center gap-2">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">
                MENS WATCH
              </h1>
              <button className="text-white">
                <BsArrowRight className="text-2xl md:text-3xl lg:text-4xl -mt-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col group relative p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 md:w-1/2">
          <div>
            <img
              src={women}
              alt=""
              className="object-cover w-full mb-4 h-60 md:h-96 lg:h-80 dark:bg-gray-500"
            />
          </div>
          <div className="flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-700">
            <div className="flex justify-center gap-2">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">
                WOMENS WATCH
              </h1>
              <button className="text-white">
                <BsArrowRight className="text-2xl md:text-3xl lg:text-4xl -mt-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWatch;
