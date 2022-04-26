import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-footer pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-500 color-pur">Purchase Your Gadget</h4>
                            <h5 className="text-sm mt-0 mb-2 text-blueGray-600 address-details">
                                Shop#838,839,840, Level#8,<br />Multiplan Center New Elephant Road, Dhaka 1205, <br />
                                Phone no. 01855565858, <br />
                                Email : techtrans@tech.com
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                {/* <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 " type="button" >
                                    <i className="fab fa-twitter twitter-c "></i>
                                </button> */}
                                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-facebook-square f-c"></i>
                                </button>
                                {/* <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-dribbble"></i>
                                </button> */}
                                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-linkedin f-c"></i>
                                </button>
                                <button className="bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-youtube-square"></i>
                                </button>
                                <button className="bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-pinterest-p"></i>
                                </button>
                                <button className="bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-google-plus-g"></i>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-300 text-sm font-semibold mb-2 color-pur">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm link-footer-f" href={""}>About Us</a>

                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm link-footer-f" href={""}>Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm link-footer-f" href="">FAQ</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm link-footer-f" href="">Free Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-300 text-sm font-semibold mb-2 color-pur">Other Resources</span>
                                    <ul className="list-unstyled">
                                        {/* <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm link-footer-f" href={""}>Discount Product</a>
                                        </li> */}
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm link-footer-f" href={""}>Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm link-footer-f" href={""}>Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600  font-semibold block pb-2 text-sm link-footer-f" href={""}>Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1 copyright-section">
                                Copyright © <span id="get-current-year">2022</span> TechTrans LTD. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Footer;