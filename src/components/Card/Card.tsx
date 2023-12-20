"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState, useEffect } from 'react';
import style from './style.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

//imagens
import sis from '../../img/sistemaredimensionado.png';
import anagrama from '../../img/anagramaredi.png'

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Card = () => {

    const [sliderView, setSliderView] = useState(3);

    const handleResize = () => {
        if (window.innerWidth < 700) {
            setSliderView(1)
        } else {
            setSliderView(3)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={style.card}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                pagination={true}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className={style.swiper}
            >
                <SwiperSlide className={style.slide}>
                    <Image
                        src={anagrama}
                        alt="Descrição da imagem"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center center"
                    />
                    <p className={style.span}>
                        <a href="https://github.com/CarlosSousa2001/controllerClientSpring">Api rest - controle de clientes</a>
                    </p>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <Image
                        src={sis}
                        alt="Descrição da imagem"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center center"
                    />
                    <p className={style.span}>
                        <a href="https://github.com/CarlosSousa2001/dashboard">Sistema Financeiro</a>
                    </p>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div>Em breve...</div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div>Em breve...</div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Card