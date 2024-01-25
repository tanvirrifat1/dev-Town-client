import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import img from '../../assets/others/authentication.gif';

import { AuthContext } from '../../Providers/AuthProviders';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { BiArrowBack } from 'react-icons/bi';
import { toast } from 'react-toastify';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successfully!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage, {
          position: 'top-center',
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;

        const saveUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };

        fetch('http://localhost:5000/api/v1/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(saveUser),
        })
          .then(res => res.json())
          .then(user => {
            if (user) {
              navigate(from, { replace: true });
            }
          });
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div>
        <Link to={'/'}>
          <BiArrowBack className="text-3xl ml-6 mt-9" />
        </Link>
      </div>
      <div className="hero min-h-screen ">
        <div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
              <figure className="">
                <img className="h-[600px] rounded-md" src={img} alt="" />
              </figure>
            </div>
            <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-success"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-success"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline btn-success"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div
                  onClick={handleGoogleLogin}
                  className="btn btn-outline btn-accent"
                >
                  <FcGoogle className="text-3xl" />
                </div>
                <p className="my-2">
                  New Here?
                  <Link to="/signup">
                    <a className="link link-primary"> Create an account</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
