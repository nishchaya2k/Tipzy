import React, { useState } from 'react';
import WelcomeImage1 from "../images/page11.jpeg";
import WelcomeImage2 from "../images/page12.jpeg";
import WelcomeImage3 from "../images/page13.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsQrCodeScan } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import TipzyLogo from './TipzyLogo';

const dotStyles = `
        .slick-dots li button {          
            height: 1px;
            width: 1px;
            border-radius: 50%; /* Make dots circular */
            pointer-events: none;
            background-color: white !important;
            border: 2px solid #5c42ff !important; /* Set border color to white for all dots */
        }

        .slick-dots li.slick-active button {
            background-color: #5c42ff !important;
            border: 2px solid white !important; /* Set border color to white for active dot */
        }
    `;


const Landing = () => {

    const [prevSlideIndex, setPrevSlideIndex] = useState(null);

    const navigate = useNavigate();
    const Images = [WelcomeImage1, WelcomeImage2, WelcomeImage3];


    const handleSlideChange = (currentSlide, nextSlide) => {
        console.log("d");
        const dots = document.querySelectorAll('.slick-dots li button');

        // Remove 'active' class from the dot corresponding to the previous slide
        dots[nextSlide].classList.add('active');

        dots[currentSlide].classList.remove('active');

        // Add 'active' class to the dot corresponding to the current slide


    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <></>, // Hides the left navigation arrow
        nextArrow: <></>, // Hides the right navigation arrow
        beforeChange: (currentSlide, nextSlide) => handleSlideChange(currentSlide, nextSlide), // Update active slide before each slide change
    };

    return (
        <div className='m-2 h-full flex flex-col items-center bg-black p-[6px] rounded-3xl'>
            <style>{dotStyles}</style>
            <div className='w-[374px] h-[478px]'>
                <Slider {...settings}>
                    {Images.map((image, index) => (
                        <div key={index} className='w-[359px] h-[390px] overflow-hidden  rounded-3xl'>
                            <div className='w-full h-full bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${image})` }}>
                                <TipzyLogo />
                                <div className='w-[300px] absolute left-1/2 -translate-x-1/2 bottom-6 leading-tight text-center flex text-2xl font-bold text-white'> Make Your Moment With Your Choosen Music</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='w-[245px] h-[76px] mt-[40px] flex flex-col justify-between items-center'>
                <div className='text-white font-bold text-2xl leading-7'>
                    Welcome to TipZy!
                </div>
                <div className='mt-[22px] text-[#CECECE] tracking-wide font-normal text-base leading-5 text-center'>
                    Scan the QR code and unlock the beats!
                </div>
            </div>
            <div className='w-[98.89px] h-[98.89px] mb-[41px] mt-[78px] flex items-center justify-center bg-[#5C42FF] rounded-full'>
                <BsQrCodeScan className='w-[49.45px] h-[49.45px] m-auto text-white cursor-pointer' onClick={() => { navigate("/Registration") }} />
            </div>
        </div>
    );
};

export default Landing;
