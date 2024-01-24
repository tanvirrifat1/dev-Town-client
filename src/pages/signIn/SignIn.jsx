import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import img from "../../assets/others/signup.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import LoadingButton from "../Shared/LodingButton";
import SmallSpinner from "../Shared/SmallSpinner";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);

  const [isLoading, SetIsLoading] = useState(false);

  if (isLoading) {
    <div className="flex justify-center items-center">
      <span className="loading loading-spinner text-secondary"></span>
    </div>;
  }

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { user } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const saveUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };

        fetch("http://localhost:5000/api/v1/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((user) => {
            console.log(user?.data?.email);
            if (user) {
              axios
                .post("http://localhost:5000/api/v1/auth/login", {
                  email: user?.data?.email,
                })
                .then((data) => {
                  console.log(data?.data);
                });
            }
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.error(err));
  };

  const onSubmit = (data) => {
    SetIsLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=c71fd21009b2244466212ed88a7ea531`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.data.display_url) {
          createUser(data.email, data.password)
            .then((result) => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserProfile(data.name, imgData.data.display_url).then(
                () => {
                  const saveUser = {
                    name: data.name,
                    email: data.email,
                    image: imgData.data.display_url,
                    password: data.password,
                  };
                  fetch("http://localhost:5000/api/v1/user", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data) {
                        handleData(data);
                        console.log("User profile updated");
                        reset();
                        toast("User created successfully", {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                        navigate("/");
                        SetIsLoading(false);
                      }
                    });
                }
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              toast(errorCode, errorMessage, {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
        }
      });
  };

  const handleData = (data) => {
    axios
      .post("http://localhost:5000/api/v1/auth/login", {
        email: data?.data?.email,
      })
      .then((data) => {
        console.log(data?.data);
      });
  };

  return (
    <div>
      <div>
        <Link to={"/"}>
          <BiArrowBack className="text-3xl ml-6 mt-9" />
        </Link>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <figure className="">
              <img className="h-[480px]" src={img} alt="" />
            </figure>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-primary"
                  name="name"
                  {...register("name", { required: true })}
                />{" "}
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="file"
                  placeholder="image"
                  className="input input-primary"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-500">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-primary"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-primary"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />{" "}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-4">
                <LoadingButton
                  type="submit"
                  className="btn btn-accent mt-3 w-full"
                  value="Login"
                >
                  {isLoading ? <SmallSpinner /> : "signUp"}
                </LoadingButton>
              </div>

              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-primary"
              >
                <FcGoogle className="text-3xl" />
              </button>

              <p className="my-2">
                Already have an account
                <Link to="/login">
                  <a className="link link-primary"> Login</a>
                </Link>
              </p>
              {errors.err && (
                <span className="text-red-500">user already exist</span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
