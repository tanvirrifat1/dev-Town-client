import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { image, price, name, details, title } = item;
  return (
    <div className="container mx-auto">
      <Card
        className="lg:w-80 "
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <CardHeader shadow={false} floated={false} className="lg:h-80 md:h-60">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium text-black">
              {name}
            </Typography>
            <Typography color="blue-gray" className="font-medium text-black">
              ${price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-black opacity-75"
          >
            {details.slice(0, 75)}...
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
