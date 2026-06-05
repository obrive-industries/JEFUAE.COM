'use client';

import React, { useEffect } from 'react';
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogPost = ({ date, title, content, imageUrl, path }) => (
    <article className="Y-axis-card-anm flex flex-col w-full  max-md:mt-10">
        <img loading="lazy" src={imageUrl} alt="" className="w-full aspect-[1.5]" />
        <time className="self-start mt-3.5 text-xs font-extralight leading-snug uppercase text-zinc-900">{date}</time>
        <h2 className="mt-2.5 text-lg leading-6 uppercase text-stone-900">{title}</h2>
        <p className="mt-3.5 text-sm font-extralight leading-6 text-stone-900">{content}</p>
        <div className="flex gap-2.5 items-center self-start mt-6">
            <Link href={path} className='flex gap-4 items-center'><span className="self-stretch pb-px my-auto text-xs tracking-widest leading-tight text-red-700 uppercase">Learn More</span>
                <span className="flex flex-col items-start self-stretch my-auto min-h-[15px] w-[17px]">
                    <span className="flex flex-col justify-center min-h-[15px] w-[15px]">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6864a9076b57404370db3fa6548d76f9442f8db4ea6397d9235cbe4290b012c0?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
                    </span>
                </span></Link>
        </div>
    </article>
);

const Blog = () => {
    const blogPosts = [
        {
            date: "January 27, 2025",
            title: "Power System Studies for Renewable Energy Grid Integration in UAE & Middle East",
            content: "Power system studies are crucial for UAE and Middle East renewable energy grid integration because they help ensure the stability, reliability, and efficiency of the electrical grid.",
            imageUrl: "/HomePageImg/Blog1.png",
            path: '/blog/power-system-studies-renewable-energy-integration-uae-middle-east'
        },
        {
            date: "January 29, 2025",
            title: "Role of Power System Studies in Energy Transition",
            content: "Power system studies play an essential role in facilitating this transition, as they help identify challenges, optimize resources, and ensure reliable, cost-effective, and sustainable operation of the power grid.",
            imageUrl: "/HomePageImg/Blog2.png",
            path: '/blog/role-of-power-system-studies-in-energy-transition'
        },
        {
            date: "February 12, 2025",
            title: "Need for Comprehensive Earthing Audits",
            content: "A comprehensive earthing audit is crucial for several reasons, especially when it comes to ensuring safety, equipment reliability, and regulatory compliance.",
            imageUrl: "/HomePageImg/Blog3.png",
            path: '/blog/need-for-comprehensive-earthing-audits'
        },
        {
            date: "February 20, 2025",
            title: "Need for Lightning Protection Systems",
            content: "Lightning Protection Systems (LPS) are designed to protect structures, equipment, and personnel from the damaging effects of lightning strikes.",
            imageUrl: "/HomePageImg/Blog4.png",
            path: '/blog/need-for-lightning-protection-systems'
        },
        {
            date: "February 20, 2025",
            title: "Advancements in Hybrid Power Systems",
            content: "With the increasing adoption of renewables, hybrid power systems are becoming crucial for optimizing energy use, improving grid stability, and reducing reliance on fossil fuels.",
            imageUrl: "/HomePageImg/Blog5.png",
            path: '/blog/advancements-in-hybrid-power-systems'
        },
        {
            date: "March 11, 2025",
            title: "Electromagnetic Transient Studies for Renewable Energy Integration",
            content: "Electromagnetic transients refer to temporary and often rapid changes in the electrical properties of a power system due to disturbances.",
            imageUrl: "/HomePageImg/Blog6.png",
            path: '/blog/electromagnetic-transient-studies-renewable-grid-integration'
        },
        {
            date: "March 20, 2025",
            title: "Advanced Electromagnetic Transient Studies for Renewable Grid Optimization",
            content: "As renewable energy penetration increases, power grids are subjected to higher levels of variability and uncertainty.",
            imageUrl: "/HomePageImg/Blog7.png",
            path: '/blog/advanced-electromagnetic-transient-studies-renewable-grid-uae'
        },
        {
            date: "April 28, 2025",
            title: "Need for Sub-Synchronous Oscillation Studies",
            content: "The transition to inverter-based power plants (IBPs)—such as solar PV, wind, and battery storage—is reshaping power grids globally.",
            imageUrl: "/HomePageImg/Blog8.jpg",
            path: '/blog/need-for-sub-synchronous-oscillation-studies'
        },
        {
            date: "May 15, 2025",
            title: "AC Interference studies for Oil & Gas Utilities",
            content: "AC interference typically occurs when alternating current from nearby electrical power systems induces voltages in the pipelines, which can lead to various operational and safety issues.",
            imageUrl: "/HomePageImg/Blog9.jpg",
            path: '/blog/ac-interference-studies-for-oil-gas-utilities'
        },
    ];


    useEffect(() => {
        gsap.fromTo(
            gsap.utils.toArray('.Y-axis-card-anm'),
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                duration: 1.1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.card-slider',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            gsap.utils.toArray('.Y-axis-card-anm1'),
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                duration: 1.1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.card-slider1',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            gsap.utils.toArray('.Y-axis-card-anm2'),
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                duration: 1.1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.card-slider2',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (

        <>
            <section className="flex overflow-hidden flex-col items-center bg-neutral-100">
                <header className="flex h-screen overflow-hidden flex-col self-stretch w-full bg-zinc-900 max-md:max-w-full">
                    <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
                        <img loading="lazy" src="./BlogImg/BlogsBanner.png" alt="MainImg" className="object-cover h-screen absolute inset-0 size-full" />
                        <div className="flex relative flex-col mb-0 max-w-full mt-[3%] inset-y-3/4 lg:inset-x-20 p-4   max-md:mt-10 max-md:mb-2.5 max-md:ml-2.5">
                            <h1 className="self-start text-6xl font-bold tracking-wider text-white">BLOGS</h1>
                            {/* <div className="flex gap-2 md:gap-4 lg:gap-6 items-center mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button className="uppercase px-5 lg:px-10 self-stretch  py-2 lg:py-3 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-lg hover:bg-red-700 hover:text-white 2xl:min-h-[64px] rounded-[50px]">
                Get in touch
              </button>
            </div> */}
                        </div>
                    </div>
                </header>
                <main className="my-28 p-4 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        {blogPosts.slice(0, 3).map((post, index) => (
                            <div key={index} className=" card-slider flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <BlogPost {...post} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            {blogPosts.slice(3, 6).map((post, index) => (
                                <div key={index} className="card-slider1  flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <BlogPost {...post} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-24 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            {blogPosts.slice(6, 9).map((post, index) => (
                                <div key={index} className="card-slider2 flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <BlogPost {...post} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <nav className="flex gap-4 items-center justify-center mt-20 max-md:mt-10" aria-label="Pagination">
          <button className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-base text-red-700 uppercase whitespace-nowrap border border-red-700 border-solid min-h-[40px] rounded-[60px] w-[129px]">
            Previous
          </button>
          <button className="flex gap-2.5 justify-center items-center self-stretch px-2.5 py-2 my-auto bg-red-700 min-h-[40px] rounded-[60px] w-[129px]">
            <span className="self-stretch my-auto text-base text-white uppercase">Next</span>
            <span className="flex flex-col items-start self-stretch pl-0.5 my-auto min-h-[15px] w-[17px]">
              <span className="flex flex-col justify-center min-h-[15px] w-[15px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0fa7322a21ad8e4a8bfa73c00764fd7ce9d35fd010ac2cc7ec9320870c6df2e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
              </span>
            </span>
          </button>
        </nav> */}
                </main>
            </section>
        </>
    );
};

export default Blog;