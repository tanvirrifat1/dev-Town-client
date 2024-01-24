import React from "react";
import useTask from "../Hooks/useTask";
import { FaRegEdit } from "react-icons/fa";

const SaveTask = () => {
  const [task, refetch] = useTask();
  console.log(task);

  return (
    <div className="container mx-auto min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 m-10">
        {task?.data.map((service) => (
          <div key={service.id} className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title ">{service.title.slice(0, 30)}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="flex justify-center items-center gap-6">
                <button className="btn btn-square btn-outline">
                  <FaRegEdit className="text-xl" />
                </button>
                <button className="btn btn-square btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveTask;
