import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, paragraph }) => {
  return (
    <div className="pt-10">
      {title && <Cover img={img} title={title} paragraph={paragraph} />}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto gap-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link className="flex justify-center" to={`/order/${title}`}>
        <button className="btn  btn-outline border-0 border-b-4 text-black my-2 w-[280px]">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
