import "./Carousel.css";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import carousel2 from "../assets/carousel/carousel2.png"
import carousel3 from "../assets/carousel/carousel3.png"
import carousel4 from "../assets/carousel/carousel4.png"
import carousel5 from "../assets/carousel/carousel5.png"

const Carousel = () => {
   return (
      <section className="carousel-container">
         <h2 className="carousel-title">Exclusivas</h2>
         <p className="carousel-subtitle">Propriedades que você só encontra aqui!</p>

         <Swiper className="carousel"
            loop={true}
            grabCursor={true}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               576: {
                  slidesPerView: 1,
                  spaceBetween: 0,
               },
               767: {
                  slidesPerView: 2,
                  spaceBetween: 0,
               },
               991: {
                  slidesPerView: 3,
                  spaceBetween: 0
               },
               1269: {
                  slidesPerView: 4,
                  spaceBetween: 0
               }
            }}
            modules={[Pagination]}>
         
            <SwiperSlide className="carousel-swiper">
               <img src={carousel2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="carousel-swiper">
               <img src={carousel3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="carousel-swiper">
               <img src={carousel4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="carousel-swiper">
               <img src={carousel5} alt="" />
            </SwiperSlide>
         </Swiper>
      </section>
   )
}

export default Carousel