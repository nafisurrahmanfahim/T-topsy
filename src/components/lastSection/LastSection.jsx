import React from 'react'
import Slider from "react-slick";
import shoes from '../../assets/shoes.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shoes2 from '../../assets/shoes2.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !right-0`}  // Force right positioning
            style={{
                ...style,
                display: "flex",
                background: "red",
                justifyContent: "center",
                alignItems: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                zIndex: 20,
            }}
            onClick={onClick}
        >
            &gt;
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !left-0`}
            style={{
                ...style,
                display: "flex",
                background: "green",
                justifyContent: "center",
                alignItems: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                zIndex: 20,
            }}
            onClick={onClick}
        >
            &lt;
        </div>
    );
}


const LastSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='pb-20'>
            <Slider {...settings}>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="" />
                </div>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="" />
                </div>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="" />
                </div>
                <div className='w-[40%] focus:outline-none'>
                    <img src={shoes} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default LastSection
