import { Swiper, SwiperSlide } from "swiper/react";
import "../Category/Category.css";
import {
  Navigation,
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import img1 from "../../../assets/assets/category/watch1.png";
import img2 from "../../../assets/assets/category/watch16.png";
import img3 from "../../../assets/assets/category/watch19.png";
import img4 from "../../../assets/assets/category/watch16.png";
import img5 from "../../../assets/assets/category/watch14.png";
import img6 from "../../../assets/assets/category/watch6.png";
import img7 from "../../../assets/assets/category/watch10.png";
import img8 from "../../../assets/assets/category/watch15.png";

const Category = () => {
  const SERVICE = [
    {
      id: 1,
      title: "The Legendary Omega Speedmaster: A Timeless Classic",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img6,
    },
    {
      id: 2,
      title: "Exploring the Elegance of Omega Seamaster Watches",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img7,
    },
    {
      id: 3,
      title: "Omega Constellation: A Symbol of Luxury and Precision",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img8,
    },
    {
      id: 4,
      title: "Fitbit Versa:Your Ultimate Health and Fitness Companion",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img5,
    },
    {
      id: 5,
      title: "Fitbit Sense: Beyond a Smartwatch, It's Your Wellness Coach",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img6,
    },
    {
      id: 6,
      title: "Fitbit Luxe: Elevating Style and Wellness in One Watch",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img2,
    },
    {
      id: 7,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img3,
    },
    {
      id: 8,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: img4,
    },
  ];

  return (
    <div className="w-full container mx-auto">
      <section className=" relative py-20">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 lg:max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-[#455a64]">
                Read trusted reviews from our customers
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Popular Items
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Swiper
            // install Swiper modules

            modules={[Navigation, Autoplay, Keyboard, Pagination, Scrollbar]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonal"
          >
            {SERVICE?.map((review, i) => (
              <SwiperSlide className="pt-3" key={i}>
                <div className="mb-10">
                  <figure className="cursor-pointer">
                    <img
                      width={100}
                      height={100}
                      src={review?.image}
                      alt=""
                      className="w-[140px] lg:-mb-16 p-2 mx-auto object-cover h-[140px] rounded-full ring"
                    />
                  </figure>
                  <blockquote className="blockquote bg-blue-100 flex h-full flex-col justify-center group rounded-2xl cursor-pointer transition-all duration-300  sm:pt-16 sm:p-8">
                    <p className="text-2xl mb-1 text-center font-bold text-primaryColor sm:text-3xl">
                      {review?.title.slice(0, 40)}
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute right-20 bottom-10 hidden md:flex gap-5">
          <button className="prev z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:-translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineLeft className="w-6 h-6 text-white" />
          </button>
          <button className="next z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Category;
