import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Slider from "react-slick";

const TestimonialsData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus unde tempora officia et nihil aut quae dolorem deleniti ad",
        img: Img1,
    },
    {
        id: 2,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus unde tempora officia et nihil aut quae dolorem deleniti ad",
        img: Img2,
    },
    {
        id: 3,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus unde tempora officia et nihil aut quae dolorem deleniti ad",
        img: Img3,
    },
    {
        id: 4,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus unde tempora officia et nihil aut quae dolorem deleniti ad",
        img: Img4,
    },
    {
        id: 5,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus unde tempora officia et nihil aut quae dolorem deleniti ad",
        img: Img1,
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinity: true,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinity: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        What Our Customers Are Saying
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Amet a suscipit perferendis.
                    </p>
                </div>

                {/* Testimonials Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialsData.map((data) => (
                            <div className="my-6">
                                <div
                                    key={data.id}
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                >
                                    <div className="mb-4">
                                        <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-xs text-gray-500">{data.text}</p>
                                            <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">”</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
