import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shoes from '../../assets/tops4.webp';
import shoes2 from '../../assets/tops2.webp';
import tops3 from '../../assets/tops5.webp';
import tops4 from '../../assets/tops5.webp';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function SampleNextArrow({ onClick }) {
    return (
        <div
            className="absolute top-1/2 right-6 z-20 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform -translate-y-1/2 bg-white hover:bg-gray-200 transition"
            onClick={onClick}
            aria-label="Next Slide"
        >
            <FaArrowRight className="text-gray-700 text-xl" />
        </div>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <div
            className="absolute top-1/2 left-6 z-20 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform -translate-y-1/2 bg-white hover:bg-gray-200 transition"
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <FaArrowLeftLong className="text-gray-700 text-xl" />
        </div>
    );
}

const productData = [
    { id: 1, img: tops4, title: "Luxury Running Shoes", price: 120 },
    { id: 2, img: shoes2, title: "Elegant Sneakers", price: 95 },
    { id: 3, img: tops3, title: "Sporty Trainers", price: 110 },
    { id: 4, img: shoes2, title: "Casual Footwear", price: 80 },
    { id: 5, img: shoes, title: "Premium Comfort Shoes", price: 130 },
];

const LastSection = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            { breakpoint: 1536, settings: { slidesToShow: 4 } },
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
        ],
    };

    const Card = ({ product }) => (
        <div className="group bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden cursor-pointer transform transition-transform duration-300 lg:hover:-translate-y-2 relative">
            <img
                src={product.img}
                alt={product.title}
                loading="lazy"
                className="w-full h-64 object-cover"
            />
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                <p className="text-lg font-bold text-indigo-600 mt-2">${product.price}</p>
            </div>

            <button
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-1 rounded-sm font-semibold opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-indigo-700"
                aria-label={`Add ${product.title} to cart`}
            >
                Add to Cart
            </button>
        </div>
    );

    return (
        <div className="pb-16 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold my-10 text-center text-gray-900">Featured Products</h2>

            {/* Grid for Mobile & Tablet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden">
                {productData.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>

            {/* Slider only for Large Screens */}
            <div className="hidden lg:block">
                <Slider {...sliderSettings} className="relative">
                    {productData.map(product => (
                        <div key={product.id} className="p-4">
                            <Card product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default LastSection;
