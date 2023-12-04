import React from "react";
import {

  Button,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const categories = [
  {
    title: "Mobile",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/406102612_1066899684436621_2102691640180441124_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=WyRnwsSauV8AX8brgou&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQAx_S3KCqorKVowfpuv6AcLcKn0iTx3EQT7cK_zoQ_dg&oe=65959BEC",
  },

];

const HomeCategories = () => {
  return (
    <div className="text-dark mt-5">
      <h3 className="text-danger fw-bold">Categories</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {Array(8).fill(categories[0]).map((cate) => {
          return (
            <SwiperSlide>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="rounded" src={cate.image} alt="fre" />
                <p>{cate.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="position-relative mt-5">
        <img
          width="100%"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/404646302_1913257349071078_8428803221509896869_n.png?stp=dst-png_s552x414&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=PVQc0EKfnf8AX8Ob4W9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRa9W_ZCM_prjiMxpg3V0qbZZ0CPHobZ5OSFlcjMG1DzA&oe=6595AEC9"
          alt="fewf"
        />
        <Button
          style={{ backgroundColor: "inherit", border: "1px solid red" }}
          className="position-absolute top-50 start-50 translate-middle fs-4 fw-bold"
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default HomeCategories;
