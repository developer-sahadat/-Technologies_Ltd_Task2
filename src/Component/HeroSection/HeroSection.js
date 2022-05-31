import React from "react";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero-section.css";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import banner1 from "../../Assets/Images/banner1.png";
import banner2 from "../../Assets/Images/banner2.png";

const HeroSection = () => {
  return (
    <div className="mt-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={"auto"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
