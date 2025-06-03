'use client'

import { FC, useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface ReviewI {
  text: string;
  position: string;
}

interface ReviewsSliderProps {
  reviews: ReviewI[];
}

const ReviewsSlider: FC<ReviewsSliderProps> = ({ reviews }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="relative">
      <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li.slick-active div {
          background: #241E2A;
        }
        .slick-dots li {
          margin: 0 4px;
        }
      `}</style>
      <Slider {...settings} ref={sliderRef}>
        <div className="px-4">
          <div className="flex gap-4 items-start md:items-center bg-white rounded-2xl shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
            <div className="w-[20%] md:w-auto">
              <Image src="/images/landings/review-avatar-1.png" alt="Review 1" width={245} height={296} />
            </div>
            <div className="flex flex-col gap-2 flex-1 p-4">
              <div className="text-[12px] text-[#666368] font-400 mb-4 leading-[14px]">May 8, 2025</div>
              <div className="text-[20px] md:text-[24px] text-[#241E2A] font-400 mb-4 leading-[24px] md:leading-[28px]">
                {reviews[0].text}
              </div>
              <div className="text-[16px] md:text-[20px] text-[#241E2A] font-400 mb-[4px] leading-[18px] md:leading-[24px]">
                Nina Kovacs,
              </div>
              <div className="text-[12px] md:text-[16px] text-[#666368] font-400 leading-[14px] md:leading-[18px]">
                {reviews[0].position}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex gap-4 items-start md:items-center bg-white rounded-2xl shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
            <div className="w-[20%] md:w-auto">
              <Image src="/images/landings/review-avatar-2.png" alt="Review 1" width={245} height={296} />
            </div>
            <div className="flex flex-col gap-2 flex-1 p-4">
              <div className="text-[12px] text-[#666368] font-400 mb-4 leading-[14px]">May 2, 2025</div>
              <div className="text-[20px] md:text-[24px] text-[#241E2A] font-400 mb-4 leading-[24px] md:leading-[28px]">
                {reviews[1].text}
              </div>
              <div className="text-[16px] md:text-[20px] text-[#241E2A] font-400 mb-[4px] leading-[18px] md:leading-[24px]">
                Sarah Kim,
              </div>
              <div className="text-[12px] md:text-[16px] text-[#666368] font-400 leading-[14px] md:leading-[18px]">
                {reviews[1].position}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex gap-4 items-start md:items-center bg-white rounded-2xl shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
            <div className="w-[20%] md:w-auto">
              <Image src="/images/landings/review-avatar-3.png" alt="Review 1" width={245} height={296} />
            </div>
            <div className="flex flex-col gap-2 flex-1 p-4">
              <div className="text-[12px] text-[#666368] font-400 mb-4 leading-[14px]">Apr 22, 2025</div>
              <div className="text-[20px] md:text-[24px] text-[#241E2A] font-400 mb-4 leading-[24px] md:leading-[28px]">
                {reviews[2].text}
              </div>
              <div className="text-[16px] md:text-[20px] text-[#241E2A] font-400 mb-[4px] leading-[18px] md:leading-[24px]">
                Tomás Rivera,
              </div>
              <div className="text-[12px] md:text-[16px] text-[#666368] font-400 leading-[14px] md:leading-[18px]">
                {reviews[2].position}
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="relative flex gap-4 justify-center mt-4 z-10">
        <div className="cursor-pointer w-[40px] h-[40px]" onClick={() => sliderRef.current?.slickPrev()}>
          <div className="w-[40px] h-[40px]">
            <Image src="/images/landings/arrow-left.svg" alt="Arrow left" width={40} height={40} />
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <div
            onClick={() => sliderRef.current?.slickGoTo(0)}
            className={`cursor-pointer w-[15px] h-[15px] rounded-full flex items-center justify-center ${currentSlide === 0 ? 'bg-[#241E2A]' : 'bg-white'}`}
          />
          <div
            onClick={() => sliderRef.current?.slickGoTo(1)}
            className={`cursor-pointer w-[15px] h-[15px] rounded-full flex items-center justify-center ${currentSlide === 1 ? 'bg-[#241E2A]' : 'bg-white'}`}
          />
          <div
            onClick={() => sliderRef.current?.slickGoTo(2)}
            className={`cursor-pointer w-[15px] h-[15px] rounded-full flex items-center justify-center ${currentSlide === 2 ? 'bg-[#241E2A]' : 'bg-white'}`}
          />
        </div>
        <div className="cursor-pointer w-[40px] h-[40px]" onClick={() => sliderRef.current?.slickNext()}>
          <div className="w-[40px] h-[40px]">
            <Image src="/images/landings/arrow-right.svg" alt="Arrow right" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
