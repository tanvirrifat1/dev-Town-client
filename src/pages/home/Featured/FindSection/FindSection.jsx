const FindSection = () => {
  return (
    <div className="bg-slate-100 my-30 py-32 ">
      <div>
        <h1 className="text-4xl text-center my-4">Be the first to know</h1>
        <p className="text-[16px] text-center font-semibold  my-6">
          Discover how to find the best watch and enjoy exclusive products and
          offers via email
        </p>
        <div className="flex justify-center items-start">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs "
          />
        </div>
        <div className="flex justify-center">
          <button className="btn text-white hover:text-black bg-green-500 mt-8 w-[180px]">
            sing in
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindSection;
