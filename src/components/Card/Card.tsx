"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState, useEffect } from 'react';
import style from './style.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//imagens
import sis from '../../img/sistema.png';


// import required modules
import { Pagination } from 'swiper/modules';
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
                slidesPerView={sliderView}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={style.swiper}
            >
                    <SwiperSlide className={style.slide}>
                    <div>Em breve...</div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <Image
                        src={sis}
                        alt="Descrição da imagem"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center center"
                    />
                    <p className={style.span}>Sistema Financeiro</p>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div>Em breve...</div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Card