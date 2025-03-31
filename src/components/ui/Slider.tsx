'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import {useMediaQuery} from 'react-responsive';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white z-10 hover:bg-opacity-75"
  >
    <FaChevronLeft size={24} />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white z-10 hover:bg-opacity-75"
  >
    <FaChevronRight size={24} />
  </button>
);

const SliderOne = () => {

    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        className: 'w-full mx-auto cursor-pointer center-mode',
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    }

    if (isMediumScreen) {
        settings.slidesToShow = 1.67;
    } else if (isSmallScreen) {
        settings.slidesToShow = 1;
    }

    return (
        <div>
        <Slider {...settings}>
                <div className="rounded-md px-2 md:p-10">
                    <Image priority src="/ADMIT.jpg" alt="logo" width={600} height={100} className='rounded-2xl' />
                </div>
                <div className="rounded-md px-2 md:p-10">
                    <Image priority src="/koleyewon.jpg" alt="logo" width={600} height={100} className='rounded-2xl' />
                </div>
                <div className="rounded-md px-2 md:p-10">
                    <Image priority src="/KOLORADO.jpg" alt="logo" width={600} height={100} className='rounded-2xl' />
                </div>
                <div className="rounded-md px-2 md:p-10">
                    <Image priority src="/audiomack1.png" alt="logo" width={600} height={400} className='rounded-2xl' />
                </div>
                <div className="rounded-md px-2 md:p-10">
                    <Image priority src="/kunmieofficial.jpg" alt="logo" width={600} height={400} className='rounded-2xl' />
                </div>
                <div className="rounded-md px-2 md:p-10">
                    <Image priority src="/audiomack2.jpg" alt="logo" width={600} height={200} className='rounded-2xl' />
                </div>
        </Slider>
        </div>
    );
};

export default SliderOne;