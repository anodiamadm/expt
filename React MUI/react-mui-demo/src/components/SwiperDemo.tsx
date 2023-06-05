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

export default function SwiperDemo() {
    const sliderNews = [
        { key: 0, linkUrl:'https://www.youtube.com/embed/muuK4SpRR5M', slideImage:'https://picsum.photos/200', text: 'Lorem ipsum' }, 
        { key: 1, linkUrl:'https://www.youtube.com/embed/AVn-Yjr7kDc', slideImage:'https://picsum.photos/201', text: 'Ipsum ipsum' },
        { key: 2, linkUrl:'https://www.youtube.com/embed/WNk6LZFJN2k', slideImage:'https://picsum.photos/202', text: 'Lorem Lorem' }, 
        { key: 3, linkUrl:'https://www.youtube.com/embed/UgfsbL-uHOA', slideImage:'https://picsum.photos/203', text: 'Ipsum Lorem' },
        { key: 4, linkUrl:'https://www.youtube.com/embed/muuK4SpRR5M', slideImage:'https://picsum.photos/204', text: 'Lorem ipsum' }, 
        { key: 5, linkUrl:'https://www.youtube.com/embed/AVn-Yjr7kDc', slideImage:'https://picsum.photos/205', text: 'Ipsum ipsum' },
        { key: 6, linkUrl:'https://www.youtube.com/embed/WNk6LZFJN2k', slideImage:'https://picsum.photos/206', text: 'Lorem Lorem' }, 
        { key: 7, linkUrl:'https://www.youtube.com/embed/UgfsbL-uHOA', slideImage:'https://picsum.photos/207', text: 'Ipsum Lorem' }
      ];
    return (
        <div className="container">
            <Typography variant='h6'>Welcome to Anodiam</Typography>
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
                    <div className="swiper-button-prev slider-arrow">
                        
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        
                    </div>
                </div>           
            </Swiper>
        </div>
    );
}