import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        links: "/#",
    },
    {
        title: "About",
        links: "/#",
    },
    {
        title: "Contact",
        links: "/#",
    },
    {
        title: "Blogs",
        links: "/#",
    },
];

const Footer = () => {
    return (
        <div className="text-white" style={BannerImg}>
            <div data-aos="zoom-in" className="container">
                <div className="grid md:grid-cols-3 pb-44 pt-5">
                    {/* Company Details  */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img
                                src={footerLogo}
                                alt=""
                                className="max-w-[50px]"
                            />
                            Shopsy
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eaque similique eius quo voluptate iste sunt?
                        </p>
                    </div>
                    {/* Footer Links  */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((item) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={item.title}
                                        >
                                            <span>{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((item) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={item.title}
                                        >
                                            <span>{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div className="flex items-center gap-3 mt-9">
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Thane, Maharashtra</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <FaMobileAlt />
                                    <p>+91 1234567890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
