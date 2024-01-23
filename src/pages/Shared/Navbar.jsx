import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";

import Drawer from "./Drawer/Page";
import logo from "../../assets/assets/watchMenu2.png";
import { getUserInfo } from "./auth/auth.service";
import { FaUserLarge } from "react-icons/fa6";
import useCart from "../../components/Hooks/useCart";

const Navbar = () => {
  const [cart, refetch] = useCart();

  const { user, logOut } = useContext(AuthContext);

  const { role } = getUserInfo();
  console.log(role);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navOption = (
    <>
      <ul className="lg:flex space-x-6 text-lg">
        <li
          // onClick={() => window.location.assign("/")}
          className="text-gray-300 lg:hover:text-slate-400"
        >
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li className="text-gray-300 lg:hover:text-slate-400">
          <NavLink to="/order/Rolex">Save task</NavLink>
        </li>

        {user ? (
          <>
            <li>
              {role === "admin" ? (
                <>
                  <button
                    href="#"
                    className="text-gray-300 lg:hover:text-slate-400"
                  >
                    <Link to="/dashBoard/adminHome">DashBoard</Link>
                  </button>
                </>
              ) : (
                <></>
              )}
            </li>
          </>
        ) : (
          <></>
        )}

        {user ? (
          <></>
        ) : (
          <>
            <li>
              <button
                href="#"
                className="text-gray-300 lg:hover:text-slate-400"
              >
                <Link to="/login">Login</Link>
              </button>
            </li>
          </>
        )}

        <li>
          <label
            htmlFor="my-drawer-4"
            className="text-gray-300 lg:hover:text-slate-400 mt-1"
          >
            <FaShoppingCart className="text-xl " />
            <div className="badge badge-secondary text-white -mt-6 ">
              +{cart?.data?.length || 0}
            </div>
          </label>
        </li>
      </ul>
    </>
  );

  return (
    <div className=" sticky top-0 z-50 bg-[#455a64] text-white">
      <div className=" container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>

          <div
            onClick={() => window.location.assign("/")}
            className="flex justify-center "
          >
            <div className="w-12 h-12 ">
              <img className="rounded-full" src={logo} alt="" />
            </div>
          </div>
          <Drawer />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>

        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <div className="avatar mx-4" tabIndex={0}>
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user?.photoURL ? (
                  <>
                    <img
                      width={50}
                      height={50}
                      alt="avater"
                      src={user?.photoURL}
                    />
                  </>
                ) : (
                  <>
                    <p className="text-white lg:mt-1 text-2xl flex justify-center">
                      <FaUserLarge />
                    </p>
                  </>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <p className="m-2 font-semibold ">
                  <span>Welcome</span>
                  <span className="text-primary">{user?.displayName}</span>
                </p>
              </li>
              {user ? (
                <>
                  <li className="">
                    {role !== "user" ? (
                      <>
                        <Link
                          to="/dashBoard/adminHome"
                          className="text-black lg:hover:text-slate-400"
                        >
                          <p>DashBoard</p>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/dashBoard/userHome"
                          className="text-black lg:hover:text-slate-400"
                        >
                          <p>Profile</p>
                        </Link>
                      </>
                    )}
                  </li>
                </>
              ) : (
                <></>
              )}

              {user ? (
                <>
                  <li>
                    <button onClick={handleLogOut} className="text-black ">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="btn" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
