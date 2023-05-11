import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import './Slider.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SliderProduct } from '../../data/product'

const Slider = () => {
  return (
    <div className='just'>
      <div className="container">
        <Swiper modules={[Pagination, Navigation]} className='mySwiper' navigation={true} loopFillGroupWithBlank={true} slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
              {SliderProduct.map((slide, i) => {
                return(
                  <SwiperSlide className='you'>
                      <div className="lefty">
                        <div className="name">
                          <span>{slide.name}</span>
                          <span>{slide.details}</span>
                        </div>

                        <span>#{slide.price}</span>
                        <div>Shop Now</div>
                      </div>
                      <img src={slide.img} alt="product" className='img-product' />
                  </SwiperSlide>
                )
              })}
        </Swiper>
    </div>
    </div>
  );
};

export default Slider;