import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import image from "../../../assets/assets/category/watch6.png";
import "./Featured.css";

const Featured = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the current date as "Month Day, Year"
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="featured-item bg-fixed text-white my-10 md:my-20 pt-2 rounded-xl">
      <SectionTitle subHeading="Check it out" heading="From Our Shop" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 pb-6 md:pb-12 px-4 md:px-8 lg:px-16">
        <div className="mb-4 md:mb-0 lg:mb-0 lg:-mr-12 md:w-[350px] lg:w-1/2">
          <img
            className="rounded-2xl w-full md:w-72 lg:w-[880px] h-72"
            src={image}
            alt=""
          />
        </div>
        <div className="md:ml-0 md:mr-0 lg:ml-10">
          <p className="font-semibold text-center md:text-left">
            {formattedDate}
          </p>
          <p>
            <p>🎉 Exclusive Timepiece Extravaganza! 🕒</p>
            Unveiling our Spectacular Summer Sale at Time Square 🌞 Indulge in
            Luxury: Up to 50% OFF on Select Watches! 🔥 Limited-Time Offer:{" "}
            <br />
            {formattedDate} 🔥 🌟 Discover a World of Elegance: <br /> Dive into
            a stunning collection of renowned brands Choose from an array of Our
            watch enthusiasts are here to assist you Quality Assurance: <br />{" "}
            Guaranteed authenticity and durability Hassle-Free Shopping: <br />{" "}
            Online and in-store options available 🎁 BONUS Perks: <br />{" "}
            Complimentary watch sizing for the perfect fit Free shipping on
            orders over $100 Gift with purchase on select models 🔔 Don't Miss
            Out! Whether its a gift for a loved one or a treat for yourself, our
            Summer Sale is your ticket to timeless elegance. Mark your calendars
            and join us at Time Square starting August 10th! Visit us online at
            Website URL or step into our store at Manikganj Sadar. Elevate your
            style with the watch of your dreams. See you there! 🛍️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
