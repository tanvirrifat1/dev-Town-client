import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTask from "../../../components/Hooks/useTask";
import useCart from "../../../components/Hooks/useCart";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [refetch] = useCart();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements.web.value;

    const description = form.elements.description.value;

    const email = user?.email;

    const booking = {
      title,
      email,

      description,
    };

    fetch(`http://localhost:5000/api/v1/task/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          Swal.fire("Task Add successfully!");
          navigate("/save");
          // refetch();
        } else {
          Swal.fire("Already add the task!");
        }
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-[50vh]">
      <div className="hero mt-12">
        <div className="hero-content lg:w-[700px] flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  required
                  name="web"
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full "
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered"
                  placeholder="description"
                  required
                ></textarea>
              </div>
              <div type="submit" className="form-control mt-6">
                <button className="btn btn-outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
