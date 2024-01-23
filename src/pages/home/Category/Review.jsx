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

import { AiFillStar } from "react-icons/ai";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useGetAllReviewsQuery } from "../../../Redux/api/reviewApi";

const Reviews = () => {
  const { data, isLoading } = useGetAllReviewsQuery(undefined);

  if (isLoading) {
    return (
      <div className="mt-52">
        <p className="text-5xl text-center min-h-[500px] ">Loading...</p>;
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <section className="container relative py-10">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              heading={"What Peoples Say"}
              subHeading={"Read trusted reviews from our customers"}
            />
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
            {data?.data?.map((review, i) => (
              <SwiperSlide className="pt-3" key={i}>
                <Card
                  color="transparent"
                  shadow={false}
                  className="w-full max-w-[26rem] border lg:h-[300px] border-black p-4"
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0  flex items-center gap-4 pt-0 pb-8"
                  >
                    <Avatar
                      size="lg"
                      variant="circular"
                      src={review?.image}
                      alt="tania andrew"
                      className="h-16 w-20"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                          {review?.name}
                        </Typography>
                        <div className="flex justify-center mt-2 gap-0.5 ">
                          {Array(review?.rating)
                            .fill(0)
                            .map((index, i) => (
                              <AiFillStar
                                key={i}
                                className="w-6 h-6 text-yellow-900"
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                    <Typography>{review?.details.slice(0, 150)}...</Typography>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
