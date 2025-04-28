import Image from "next/image"; // Use Next.js Image for optimization
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const slides = [
  { text: "Big Discounts on Electronics!", img: "/carousel 1.svg" },
  { text: "Shop the Latest Fashion!", img: "/carousel 2.svg" },
  { text: "Best Deals on Mobile Phones!", img: "/carousel 3.svg" },
];

export default function Hero() {
  return (
    <div className="relative w-full h-[400px]">
      <div className="flex space-x-6 md:justify-end justify-center items-center text-center lg:-mt-14 -mt-0 pb-10">
        <Link href="/" className="text-black hover:text-gray-600 text-lg font-medium">
          All
        </Link>
        <Link href="/categories/men%27s" className="text-black hover:text-gray-600 text-lg font-medium">
          Men's
        </Link>
        <Link href="/categories/women%27s" className="text-black hover:text-gray-600 text-lg font-medium">
          Women's
        </Link>
        <Link href="/categories/electronics" className="text-black hover:text-gray-600 text-lg font-medium">
          Electronics
        </Link>
        <Link href="/categories/mobile" className="text-black hover:text-gray-600 text-lg font-medium">
          Mobile
        </Link>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.img}
              alt={slide.text}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 m-10 w-2 bg-opacity-40 flex items-baseline justify-start">
              <h2 className="text-3xl md:text-4xl font-bold">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:block">
        <div className="swiper-button-next text-white absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer"></div>
        <div className="swiper-button-prev text-white absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer"></div>
      </div>
    </div>
  );
}



/*import Image from "next/image"; // Use Next.js Image for optimization
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const slides = [
  { text: "Big Discounts on Electronics!", img: "/carousel 1.svg" },
  { text: "Shop the Latest Fashion!", img: "/carousel 2.svg" },
  { text: "Best Deals on Mobile Phones!", img: "/carousel 3.svg" },
];

export default function Hero() {
  return (
    <div className="relative w-full h-[400px]">
      <div className="flex space-x-6 md:justify-end justify-center items-center text-center lg:-mt-14 -mt-0 pb-10">
        <Link href="/" className="text-black hover:text-gray-600 text-lg font-medium">
          All
        </Link>
        <Link href="/categories/men's" className="text-black hover:text-gray-600 text-lg font-medium">
          Men's
        </Link>
        <Link href="/categories/women's" className="text-black hover:text-gray-600 text-lg font-medium">
          Women's
        </Link>
        <Link href="/categories/electronics" className="text-black hover:text-gray-600 text-lg font-medium">
          Electronics
        </Link>
        <Link href="/categories/mobile" className="text-black hover:text-gray-600 text-lg font-medium">
          Mobile
        </Link>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.img}
              alt={slide.text}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 m-10 w-2 bg-opacity-40 flex items-baseline justify-start">
              <h2 className="text-3xl md:text-4xl font-bold">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:block">
        <div className="swiper-button-next text-white absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer"></div>
        <div className="swiper-button-prev text-white absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer"></div>
      </div>
    </div>
  );
}
*/