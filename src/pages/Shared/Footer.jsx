import { AiFillLinkedin } from "react-icons/ai";
import {
  FaGithubSquare,
  FaShoppingBasket,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="lg:w-full">
      <footer
        style={{
          backgroundColor: "#455a64",
        }}
        className="divide-y p-12"
      >
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <div
              rel="noopener "
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                <FaShoppingBasket className="text-4xl text-white" />
              </div>
              <div className="self-center text-2xl text-white font-semibold">
                Time-Square
              </div>
            </div>
            <div className="text-white lg:ml-16 ">
              <p>Allright Reserved </p>
              <p>Time-Square </p>
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 text-white gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide font-semibold uppercase dark:text-gray-50">
                NAVIGATION
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to={"/"} rel="noopener noreferrer">
                    HomePage
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} rel="noopener noreferrer">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} rel="noopener noreferrer">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to={"/menu"} rel="noopener noreferrer">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide font-semibold uppercase dark:text-gray-50">
                SHOP
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Flash Sale
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Limited Sale
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    New Arrival
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Build Custom
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase font-semibold dark:text-gray-50">
                STAY IN TOUCH
              </div>
              <div className="flex gap-2 ">
                <p>
                  <FaLocationDot />
                </p>
                <p>Manikganj,Dhaka,Bangladesh</p>
              </div>
              <div className="flex gap-2 ">
                <p>
                  <IoIosMail />
                </p>
                <p>rifatkhan5567790@gmail.com</p>
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/md-rifat-miah-48555b257/"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <AiFillLinkedin className="text-4xl" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/tanvirrifat1"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <FaGithubSquare className="text-4xl" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/RifatKh77041896"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <FaTwitterSquare className="text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-white">
          © {currentYear} Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
