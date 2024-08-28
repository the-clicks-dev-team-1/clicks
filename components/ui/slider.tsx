'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderOne = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });    
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1000,
        className: 'w-full mx-auto cursor-pointer center-mode',
    };

    if (isMediumScreen) {
        settings.slidesToShow = 1.67;
    } else if (isSmallScreen) {
        settings.slidesToShow = 1;
    }

    if (!isClient) {
        // Рендеринг простого содержимого на сервере для избежания ошибки гидратации
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Slider {...settings}>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/openai.png"
                            alt="OpenAI Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/github.png"
                            alt="GitHub Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/monday.png"
                            alt="Monday Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/nextjs.png"
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/mailchimp.png"
                            alt="Mailchimp Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/adobe.png"
                            alt="Adobe Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/strapi.png"
                            alt="Strapi Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
                <>
                    <div className={`flex justify-center items-center px-2 md:p-10 ${isSmallScreen ? 'bg-gradient-to-b from-sky-400 to-purple-500 backdrop-blur-md' : ''}`}>
                        <Image
                            priority
                            src="/images/partners-logos/contentful.png"
                            alt="Contentful Logo"
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </>
            </Slider>
        </div>
    );
}

export default SliderOne;
