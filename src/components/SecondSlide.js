'use client'

////// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


//// React and Next imports
import Image from 'next/image';

function SecondSlide() {
  const slides = [
    {
      title: "Domestic Flights",
      header: "Huge savings on flight with trxvl.",
      Desc: "Book domestic flights starting @ just ₹1459",
      src: "/sl2-image1.png"
    },
    {
      title: "International Flights",
      header: "Fly to global destinations with trxvl.",
      Desc: "Get international flights starting @ ₹9999",
      src: "/sl2-image2.png"
    },
    {
      title: "Hotel Stays",
      header: "Stay at top hotels with great deals.",
      Desc: "Book luxurious stays at affordable prices",
      src: "/sl2-image3.png"
    },
    {
      title: "Vacation Packages",
      header: "All-in-one travel packages for you.",
      Desc: "Explore curated vacation packages starting @ ₹24999",
      src: "/sl2-image4.png"
    },
  ];


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
          768: { slidesPerView: 1 },  // On tablet, show 2 slides
          1024: { slidesPerView: 2 }, // On desktop, show 4 slides max
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper mx-auto h-72 sm:!py-0 !py-4 sm:h-48 my-10 w-[95vw] max-w-[400px] sm:w-full sm:max-w-[600px] lg:max-w-full rounded-lg !px-2 sm:!px-4 "
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
              <SwiperSlide className=' w-full lg:min-w-[45%] lg:max-w-[50%] mx-auto ' key={idx} >

                <div className='flex flex-col sm:flex-row items-center w-full mx-auto h-full sm:h-[95%] relative top-1/2 -translate-y-1/2 gap-3 sm:gap-6 sm:p-4 p-2 shadow-[1px_1px_5px_0.5px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden '>
                  <div className='relative h-[70%] sm:h-full min-w-56 sm:min-w-56 mx-auto gap-1 sm:gap-2 rounded-xl overflow-hidden'>
                    <Image
                      src={item.src}
                      alt='image'
                      className=' object-cover'
                      fill
                      sizes='100%'
                    />
                  </div>
                  <div className='  flex-grow h-full flex flex-col justify-evenly font-light '>
                    <h2 className=' text-sm leading-tight'>{item.title}</h2>
                    <h2 className=' text-lg sm:text-xl font-semibold !leading-none !xl:leading-tight'>{item.header}</h2>
                    <h2 className=' text-xs leading-tight'>{item.Desc}</h2>
                    <button className=' w-28 sm:w-32 h-8 sm:h-10 rounded-3xl bg-blue-500 text-white '> Book Now </button>
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

export default SecondSlide