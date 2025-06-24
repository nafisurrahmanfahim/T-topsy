import React from 'react'
import Slider from "react-slick";
import shoes from '../../assets/shoes.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shoes2 from '../../assets/shoes2.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{position: "absolute", top: "50%", right: "30px", transform: "translateY(-50%)", width: "64px", height: "64px", background: "#d8d8d8", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer"}}
            onClick={onClick}
        ><FaArrowRight /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{position: "absolute", top: "50%", left: "30px", zIndex: "10", transform: "translateY(-50%)", width: "64px", height: "64px", background: "#d8d8d8", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer", }}
            onClick={onClick}
        ><FaArrowLeftLong /></div>
    );
}


const LastSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='pb-20'>
            <Slider {...settings}>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="priductsImg" />
                </div>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="priductsImg" />
                </div>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="priductsImg" />
                </div>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="priductsImg" />
                </div>
            </Slider>
        </div>
    )
}

export default LastSection
