import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section class="relative  bg-blueGray-50">
                <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div class="absolute banner-div top-0 w-full h-full bg-center bg-cover" >
                        <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div class="container relative mx-auto">
                        <div class="items-center flex flex-wrap">
                            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div class="pr-12">
                                    <h1 class="text-white font-semibold text-4xl">
                                        Your journey starts with us
                                    </h1>
                                    <p class="mt-4 text-lg text-blueGray-200">
                                        <i>TechTrans is providing you with the best pricing for all the PC components compared to anywhere else. We are also providing you with top-ranking PC Building Experts to help you through the process. You will be able to find all the PC components on our website and you can order from there. You will also be able to enjoy our Courier Service facility, as we deliver your product anywhere in Bangladesh. You can also enjoy our Home delivery service if you are located inside the Dhaka City area. If you desire to visit us at our authorized Shops then you will be able to find them in Dhaka, Chattagram, Khulna, Rangpur, and Gazipur to have an up-close experience.</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px banner-divv" >
                        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section class="pb-10 bg-blueGray-200 -mt-24">
                    <div class="flex flex-wrap">
                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <i class="fas fa-award"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Awarded Agency</h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                        <i> The International best selling Awards shine a spotlight on exceptional individuals and businesses that have made incredible contributions to the global e-commerce industry. Winning an award is a unique opportunity to demonstrate our ability to deliver great ideas.
                                        </i>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-4/12 px-4 text-center">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                        <i class="fas fa-retweet"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Free Revisions</h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                        <i> Our revision policy strives to meet customer satisfaction, comfort, and a peace of mind. Our company provides minor revisions and amendments to the initial order as a part of our ongoing service.
                                        </i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                        <i class="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Verified Company</h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                        <i> Our mission is to help small business owners and individuals get their products out to the masses in as profitable and efficient manner as possible with the most comprehensive and interactive e-commerce education platform online.</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Banner;