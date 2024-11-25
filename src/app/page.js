import BackToTop from "@/components/BackToTop";
import FirstSlide from "@/components/FirstSlide";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollMenu from "@/components/ScrollMenu";
import SecondSlide from "@/components/SecondSlide";
import Image from "next/image";

import { FaChessRook, FaRegCalendar, FaUser, FaBuilding, FaWater, FaHotTub, FaSkiingNordic } from "react-icons/fa";

// react icons
import { IoSearchOutline } from "react-icons/io5"; // Ionicons


export default function Home() {

  const firstSlides = [
    {
      title: "Bali, Indonesia",
      src: "/image1.png"
    },
    {
      title: "Kerry, Ireland",
      src: "/image2.png"
    },
    {
      title: "Sydney, Australia",
      src: "/image3.png"
    },
    {
      title: "Paris, France",
      src: "/image4.png"
    },
    {
      title: "CHT, Bangladesh",
      src: "/image5.png"
    }
  ];

  const thirdSlides = [
    {
      title: "Hotels",
      src: "/sl3-image1.png"
    },
    {
      title: "Apartments",
      src: "/sl3-image2.png"
    },
    {
      title: "Resorts",
      src: "/sl3-image3.png"
    },
    {
      title: "Villas",
      src: "/sl3-image4.png"
    },
    {
      title: "Mountains",
      src: "/sl3-image5.png"
    }
  ]

  return (
    <div className="">

      <div className={`relative bg-cover bg-center flex flex-col gap-4 sm:gap-8 lg:gap-12 `}>

        <div className="absolute top-0 left-0 h-[420px] sm:h-[120vh] w-full -z-10 bg-black overflow-hidden ">
          <Image
            src='/hero-image1.png'
            alt="background image"
            className="opacity-80 "
            fill
            sizes="100%"
          />
          <div className=" shadow-[0_0_20px_10px_rgba(255,255,255,1)] md:shadow-[0_0_80px_40px_rgba(255,255,255,1)] absolute bottom-0 w-full"></div>
        </div>

        <Navbar />

        <div className=" flex flex-col gap-4 lg:gap-12 pl-[5vw] sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 ">

          <h2 className=" text-white text-3xl md:text-5xl xl:text-6xl sm:leading-normal leading-none">The whole world <br /> awaits.</h2>

          {/* Search bar */}

          <div className=" bg-white/30 md:mr-8 lg:mr-24 !rounded-lg text-stone-200 items-center my-0 py-0 overflow-hidden md:flex hidden justify-between px-5 md:gap-1 lg:gap-3">

            <div className="relative flex-grow p-1 max-w-[500px] bg-transparent ">
              <IoSearchOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-white " />
              <input
                type="text"
                placeholder="Search destinations, hotels"
                className="px-8 py-2 bg-transparent outline-none w-full  placeholder:text-gray-100"
              />
            </div>

            <div className=" flex items-center gap-1 md:text-sm lg:text-base cursor-default ">
              <FaRegCalendar />
              Check in
            </div>

            <div className=" flex items-center gap-1 md:text-sm lg:text-base cursor-default ">
              <FaRegCalendar />
              Check out
            </div>

            <div className=" flex items-center gap-1 md:text-sm lg:text-base cursor-default ">
              <FaUser />
              1 room, 2 adults
            </div>

            <button className=" py-[6px] md:w-24 lg:w-36 bg-white text-blue-500 font-semibold rounded-2xl">Search</button>
          </div>

          {/* Responsive search bar md and less */}


          <div className=" md:mr-8 lg:mr-24 !rounded-lg text-stone-200 items-center my-4 overflow-hidden md:hidden flex flex-col gap-3 pr-[5vw]">

            <div className=" flex justify-center items-center h-12 px-1 bg-stone-400/70 backdrop-blur-sm rounded-3xl w-full ">
              <IoSearchOutline className=" text-2xl " />
              <input
                type="text"
                placeholder="Search destinations, hotels"
                className=" h-full px-4 bg-transparent outline-none placeholder:text-gray-100"
              />
            </div>

            <div className=" flex w-full  bg-stone-400/70 backdrop-blur-sm rounded-3xl h-12 text-xl gap-4 justify-evenly items-center">
              <div className=" cursor-default flex items-center gap-1">
                <FaRegCalendar />
                Check in
              </div>
              |
              <div className=" cursor-default flex items-center gap-1 ">
                <FaRegCalendar />
                Check out
              </div>
            </div>

            <div className=" h-12 w-full bg-stone-400/70 backdrop-blur-sm flex rounded-3xl justify-center items-center gap-1 text-lg cursor-default ">
              <FaUser />
              1 room, 2 adults
            </div>

            <button className=" w-full h-12 py-[6px] bg-blue-500 text-white font-semibold rounded-3xl">Search</button>
          </div>




          <div className=" flex flex-col lg:gap-10 md:gap-6 gap-2">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl text-black my-5 sm:text-white">Top categories</h2>
            <ScrollMenu />
          </div>

          <div className=" text-white">
            <h2 className=" text-xl sm:text-2xl lg:text-3xl">Top Vacation Destinations</h2>
            <FirstSlide slides={firstSlides} />
          </div>

        </div>

      </div>

      <div className=" pl-[5vw] sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 lg:space-y-10 md:space-y-5">

        <div className=" text-black">
          <h2 className=" text-xl sm:text-2xl lg:text-3xl font-semibold">Offers</h2>
          <SecondSlide />
        </div>

        <div className=" h-52 sm:h-96 mr-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-24 ">
          <div className=" relative h-full w-full rounded-xl lg:rounded-2xl overflow-hidden">
            <Image
              src='/hero-image2.png'
              alt="hero_image"
              fill
              sizes="100%"
              className=" object-cover"
            />

            <div className=" w-full h-full absolute top-0 left-0 bg-black/50"></div>

            <div className=" lg:pr-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] flex flex-col gap-4">
              <h2 className=" text-white text-3xl sm:text-6xl">Plan your trip with travel expert</h2>
              <p className="  sm:text-2xl text-white">Our professional advisors can craft your perfect itinerary</p>
            </div>
          </div>

        </div>

        <div className=" text-white my-4">
          <h2 className=" text-black text-xl sm:text-2xl lg:text-3xl font-semibold">Browse by property type</h2>
          <FirstSlide slides={thirdSlides} />
        </div>

      </div>

      <Footer />

      <BackToTop />

    </div>
  );
}


