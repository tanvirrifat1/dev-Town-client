const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-2/6 my-8 ">
      <p className="text-[#455a64] mb-2 text-xl">{subHeading}</p>
      <h3 className="text-4xl uppercase  py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
