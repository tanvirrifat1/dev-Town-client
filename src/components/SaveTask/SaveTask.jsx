import React from "react";
import useTask from "../Hooks/useTask";

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
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveTask;
