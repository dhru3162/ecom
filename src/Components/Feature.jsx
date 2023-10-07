import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Feature = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-16 pt-12 dark:bg-black'>
                <div className="container mx-auto md:px-6">
                    <section className="pb-8">
                        <div className="flex flex-wrap items-center">
                            <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
                                <h2 className="mb-6 text-3xl font-bold dark:text-white">
                                    Why is it so<u className=" text-blue-700">
                                        great?</u>
                                </h2>

                                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
                                    iaculis malesuada. Aenean gravida magna orci, non efficitur est
                                    porta id. Donec magna diam.
                                </p>
                            </div>

                            <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Support 24/7</p>
                                                <p className="text-neutral-500 dark:text-neutral-300">
                                                    Pellentesque mollis, metus nec fringilla aliquam. Donec
                                                    consequat orci quis volutpat imperdiet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400 dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Tracking</p>
                                                <p className="text-neutral-500 dark:text-neutral-300">
                                                    Magna lacus iaculis elit, quis pharetra varius. Aenean
                                                    lectus ex, placerat id tellus in eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400 dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Reporting</p>
                                                <p className="text-neutral-500 dark:text-neutral-300 ">
                                                    Pellentesque varius ex vel consequat quis. Sed mauris ex,
                                                    imperdiet sit amet nisl ac, ultrices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400 dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Analytics</p>
                                                <p className="text-neutral-500 dark:text-neutral-300">
                                                    Vestibulum gravida iaculis nisl, vel lobortis eros.
                                                    Praesent vulputate lacus bibendum augue.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400 dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Huge community</p>
                                                <p className="text-neutral-500 dark:text-neutral-300">
                                                    Praesent vulputate lacus bibendum augue. Pellentesque
                                                    mollis, metus nec fringilla aliquam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400 dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Easy to use</p>
                                                <p className="text-neutral-500 dark:text-neutral-300">
                                                    Sed mauris ex, imperdiet sit amet nisl ac, ultrices. Magna
                                                    lacus iaculis elit, quis pharetra varius.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400 dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Frequent updates</p>
                                                <p className="text-neutral-500 dark:text-neutral-300">
                                                    Aenean lectus ex, placerat id tellus in eros. Pellentesque
                                                    varius ex vel consequat quis. Sed mauris ex
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
                                        <div className="flex">
                                            <div className="mt-0.5 shrink-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400 dark:fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2 grow">
                                                <p className="mb-3 font-bold dark:text-white">Responsive</p>
                                                <p className="text-neutral-500 dark:text-neutral-300">
                                                    Donec consequat orci quis volutpat imperdiet. Vestibulum
                                                    gravida iaculis nisl, vel lobortis eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Feature
