'use client'

////// React icons 

import { TbBeach } from "react-icons/tb"; // Tabler Icons
import { PiCactusBold } from "react-icons/pi"; // Phosphor Icons
import { BsBuildingFill } from "react-icons/bs"; // Bootstrap Icons
import { GiCampingTent, GiHillFort, GiTreehouse, GiForest, GiIsland } from "react-icons/gi"; // Game Icons
import { FaHouseFloodWater } from "react-icons/fa6"; // FontAwesome 6 (make sure you have the correct version of react-icons)
import { MdNaturePeople } from "react-icons/md"; // Material Design
import { IoIosFlower } from "react-icons/io"; // Ionicons
import { FaChessRook, FaBuilding, FaWater, FaSkiingNordic } from "react-icons/fa";

///// Swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ScrollMenu() {
  return (
    <div className=" text-slate-600 sm:text-slate-300 text-xs md:text-sm sm:pr-10 ">
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 4 },  // On mobile, show 1 slide
          768: { slidesPerView: 6 },  // On tablet, show 2 slides
          1024: { slidesPerView: 8 }, // On desktop, show 4 slides max
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper mx-auto h-24"
      >
        {/* Swiper Slides for Categories */}
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <TbBeach className="text-3xl" />
            <h4>Beaches</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <PiCactusBold className="text-3xl" />
            <h4>Deserts</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <GiHillFort className="text-3xl" />
            <h4>Mountains</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <BsBuildingFill className="text-3xl" />
            <h4>Iconic Cities</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <FaHouseFloodWater className="text-3xl" />
            <h4>Houseboats</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <MdNaturePeople className="text-3xl" />
            <h4>Countryside</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <GiCampingTent className="text-3xl" />
            <h4>Camping</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <FaChessRook className="text-3xl" />
            <h4>Castles</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <FaSkiingNordic className="text-3xl" />
            <h4>Skiing</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col items-center gap-1'>
            <GiTreehouse className="text-3xl" />
            <h4>Tropical</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center gap-1'>
            <FaBuilding className="text-3xl" />
            <h4>Skyscrapers</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center gap-1'>
            <GiForest className="text-3xl" />
            <h4>Forests</h4>
          </div>
        </SwiperSlide>
      </Swiper>


      {/* <div>
                <PiCactusBold className=" text-3xl" />
                <h4>Deserts</h4>
              </div>
              <div>
                <GiHillFort className=" text-3xl" />
                <h4>Mountains</h4>
              </div>
              <div>
                <BsBuildingFill className=" text-3xl" />
                <h4>Iconic Cities</h4>
              </div>
              <div>
                <FaHouseFloodWater className=" text-3xl" />
                <h4>Houseboats</h4>
              </div>
              <div>
                <MdNaturePeople className=" text-3xl" />
                <h4>Countryside</h4>
              </div>
              <div>
                <GiCampingTent className=" text-3xl" />
                <h4>Camping</h4>
              </div>
              <div>
                <FaChessRook className=" text-3xl" />
                <h4>Castles</h4>
              </div>
              <div>
                <FaSkiingNordic className=" text-3xl" />
                <h4>Skiing</h4>
              </div>
              <div>
                <GiTreehouse className=" text-3xl" />
                <h4>Tropical</h4>
              </div>
 */}

    </div>
  )
}

export default ScrollMenu