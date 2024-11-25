'use client'

////// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


//// React and Next imports
import Image from 'next/image';
import { useState } from 'react';


function FirstSlide({ slides }) {

  return (
    <div className=' lg:mr-10'>
      <Swiper
        effect='fade'
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={16}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },  // On mobile, show 1 slide
          768: { slidesPerView: 3 },  // On tablet, show 2 slides
          1024: { slidesPerView: 4 }, // On desktop, show 4 slides max
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper sm:mx-auto h-44 my-4 sm:my-10 rounded-lg sm:pr-0 pr-4 w-[90vw] max-w-[300px] sm:max-w-full sm:w-full"
      >
        {/* <SwiperSlide className=' relative rounded-xl overflow-hidden'>
          <div className='max-h-40 max-w-60'>
            <Image
              src='/image1.png'
              alt='image'
              className=' object-cover'
              fill
            />
            <div className=' backdrop-blur-[1px] bg-black/20 h-10 w-full absolute bottom-0'>
              <h2 className=' absolute bottom-4 left-3 font-semibold text-lg'>Bali, Indonesia</h2>
            </div>
          </div>
        </SwiperSlide> */}
        {
          slides && slides.map((item, idx) => {
            return (
              <SwiperSlide className=' relative rounded-lg overflow-hidden md:max-w-[32%] lg:max-w-[25%] mx-auto ' key={idx} >
                <div className=' relative h-40 rounded-xl overflow-hidden mx-auto'>
                  <Image
                    src={item.src}
                    alt='image'
                    className=' object-cover'
                    fill
                    sizes='100%'
                  />
                  <div className=' backdrop-blur-lg bg-black/40 h-10 w-full absolute bottom-0 left-0 overflow-hidden !rounded-xl'>
                    <h2 className=' absolute bottom-2 left-5 font-semibold text-lg '>{item.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        {/* <SwiperSlide className=' relative rounded-xl overflow-hidden '>
          <div className='max-h-40 '>
            <Image
              src='/image2.png'
              alt='image'
              className=' object-cover'
              fill
            />
            <div className=' backdrop-blur-[1px] bg-black/20 h-10 w-full absolute bottom-0'>
              <h2 className=' absolute bottom-4 left-3 font-semibold text-lg'>Kerry, Ireland</h2>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div >
  )
}

export default FirstSlide