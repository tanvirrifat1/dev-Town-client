import Form from "../../../components/form/form";
import FormInput from "../../../components/form/formInput";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateReviewsMutation } from "../../../Redux/api/reviewApi";
import { toast } from "react-toastify";

const Feedback = ({ setOpenModal }) => {
  const { user } = useAuth();
  const router = useNavigate();
  const location = useLocation();

  const [createReviews] = useCreateReviewsMutation();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const image = user?.photoURL;
      const name = user?.displayName;
      const email = user?.email;
      if (image) {
        data.image = image;
      }
      if (email) {
        data.email = email;
      }
      if (name) {
        data.name = name;
      }

      const res = await createReviews(data);
      if (res) {
        toast("Feedback successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setOpenModal(null);
    } catch (error) {
      console.log(error);
    }
  };

  //  const onSubmit = async (data) => {
  //    try {
  //      const image = user?.photoURL;
  //      const name = user?.displayName;
  //      const email = user?.email;
  //      if (image) {
  //        data.image = image;
  //      }
  //      if (email) {
  //        data.email = email;
  //      }
  //      if (name) {
  //        data.name = name;
  //      }

  //      const updateUrl =
  //        "https://watch-shop-mongoose.vercel.app/api/v1/reviews/create-reviews";
  //      const updateResponse = await fetch(updateUrl, {
  //        method: "POST",
  //        headers: {
  //          "Content-Type": "application/json",
  //        },
  //        body: JSON.stringify(data),
  //      });

  //      if (updateResponse) {
  //        if (updateResponse.ok) {
  //          Swal.fire({
  //            title: "FeedBack Successfully!",
  //            showClass: {
  //              popup: "animate__animated animate__fadeInDown",
  //            },
  //            hideClass: {
  //              popup: "animate__animated animate__fadeOutUp",
  //            },
  //          });
  //        } else {
  //          {
  //            Swal.fire({
  //              title: "Please Login First?",
  //              icon: "warning",
  //              showCancelButton: true,
  //              confirmButtonColor: "#3085d6",
  //              cancelButtonColor: "#d33",
  //              confirmButtonText: "Yes, Login",
  //            }).then((result) => {
  //              if (result.isConfirmed) {
  //                router("/login", { state: { from: location } });
  //              }
  //            });
  //          }
  //        }
  //        setOpenModal(null);
  //      }
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="py-10">
            <div className="">
              <Form submitHandler={onSubmit}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Your Feedback
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Please share the article or the text you like me to
                      review, and let me know what specific aspects you would
                      like feedback on
                    </p>
                    <div>
                      <Helmet>
                        <title> Feedback</title>
                      </Helmet>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3 w-full">
                        <div className="mt-2 w-full">
                          <FormInput
                            id=""
                            name="details"
                            type="text"
                            label="details"
                            placeholder="write your details"
                            className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3 w-full">
                        <div className="mt-2 w-full">
                          <FormInput
                            id=""
                            name="rating"
                            type="number"
                            label="rating"
                            placeholder="write your rating"
                            className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-outline w-72 rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </Form>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
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
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
