import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "../styles.css";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import anodiam1 from '../assets/anodiam-1.png';
import anodiam2 from '../assets/anodiam-2.png';
import anodiam3 from '../assets/anodiam-3.png';
import anodiam4 from '../assets/anodiam-4.png';
import anodiam5 from '../assets/anodiam-5.png';
import anodiam6 from '../assets/anodiam-6.png';
import anodiam7 from '../assets/anodiam-7.png';
import anodiam8 from '../assets/anodiam-8.png';

export default function SwiperDemo() {
    const sliderNews = [
        { key: 0, linkUrl:'https://www.youtube.com/embed/muuK4SpRR5M', slideImage: anodiam1, text: 'Lorem ipsum' }, 
        { key: 1, linkUrl:'https://www.youtube.com/embed/AVn-Yjr7kDc', slideImage: anodiam2, text: 'Ipsum ipsum' },
        { key: 2, linkUrl:'https://www.youtube.com/embed/WNk6LZFJN2k', slideImage: anodiam3, text: 'Lorem Lorem' }, 
        { key: 3, linkUrl:'https://www.youtube.com/embed/UgfsbL-uHOA', slideImage: anodiam4, text: 'Ipsum Lorem' },
        { key: 4, linkUrl:'https://www.youtube.com/embed/muuK4SpRR5M', slideImage: anodiam5, text: 'Lorem ipsum' }, 
        { key: 5, linkUrl:'https://www.youtube.com/embed/AVn-Yjr7kDc', slideImage: anodiam6, text: 'Ipsum ipsum' },
        { key: 6, linkUrl:'https://www.youtube.com/embed/WNk6LZFJN2k', slideImage: anodiam7, text: 'Lorem Lorem' }, 
        { key: 7, linkUrl:'https://www.youtube.com/embed/UgfsbL-uHOA', slideImage: anodiam8, text: 'Ipsum Lorem' }
      ];
    return (
        <div className="container" >
            <Typography variant='h6' align='center'>Welcome to Anodiam</Typography>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{el: '.swiper-pagination', clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper-container"
            >
                {sliderNews.map((slide) => (
                    <SwiperSlide key={slide.key} className="swiper-slide">
                        <img src={slide.slideImage} alt={slide.text} />
                    </SwiperSlide>
                ))}
                <div className="slide-controler">
                    <ArrowBackIosIcon className="swiper-button-prev slider-arrow"/>
                    <ArrowForwardIosIcon className="swiper-button-next slider-arrow"/>
                </div>           
            </Swiper>
        </div>
    );
}