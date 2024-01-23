import React from "react";
import useTask from "../Hooks/useTask";

const SaveTask = () => {
  const [task, refetch] = useTask();
  console.log(task);

  return (
    <div>
      {task?.data.map((service) => (
        <div key={service.id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaveTask;
