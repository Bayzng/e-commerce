import React from 'react'
import hat from '../../Assets/hat-removebg-preview (1).png'
import {Swiper, SwiperSlide} from 'swiper/react'
import './Testimonies.css'
import {TestimonialsData} from '../../data/Testimonials'

const Testimonies = () => {
  return (
    <div className="testimonials">
      <div className="wrappers">
        <div className="contain">
          <span>Top Rated</span>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ullam!</span>
        </div>
        <div className="bluecircl">

        <img src={hat} alt="" />
        </div>

        <div className="contain">
          <span>100K</span>
          <span>Happy Customers With Us</span>
        </div>
      </div>

      <div className="reviews">Reviews</div>

      <div className="carousal">
        <Swiper slidesPerView={3} slidesPerGroup={1} spaceBetween={70} className='tcarousel'>
          {
            TestimonialsData.map((testimonial, i) => {
              return (
                <SwiperSlide>
                  <div className="testimonial">
                    <img src={testimonial.img} alt="" />
                    <span>{testimonial.name}</span>
                    <hr />
                    <span>{testimonial.details}</span>
                    
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonies