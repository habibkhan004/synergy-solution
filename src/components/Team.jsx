import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { teamArr } from "./js/teamimg.js";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper";

function Team() {
  return (
    <div className="container1">
      <h1 className="heading1">Our Team</h1>
      <Swiper
        // effect={"coverflow"}
        // grabCursor={true}
        // centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {teamArr.map((team) => (
          <SwiperSlide className="sw">
            <img src={team.img} alt="slide_image" />
            <h2>{team.name}</h2>
            <h4>{team.role}</h4>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">{"<"}</ion-icon>
          </div>

          <div className="swiper-button-next slider-arrow ">
            <ion-icon name="arrow-forward-outline">{">"}</ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Team;
