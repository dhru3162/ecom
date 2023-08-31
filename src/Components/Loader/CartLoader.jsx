import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CartLoader = () => {
    return (
        <div className='mt-16'>
            <div className='flex justify-center'>
                <div className="mb-10 mt-5 items-center w-1/6"><Skeleton height={'30px'} /></div>
            </div>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {/* first product */}
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <div className="rounded-lg aspect-[10/7] w-52" >
                            <Skeleton
                                height="100%"
                                width='100%'
                            />
                        </div>
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0 w-9/12">
                                <h2 className="mb-1"><Skeleton height={'20px'} /></h2>
                                <p className="text-sm lg:w-16"><Skeleton /></p>
                            </div>
                            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center">
                                    <div className={`rounded-l w-[96px]`}>
                                        <Skeleton
                                            height={'32px'}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="rounded-full p-1 w-full">
                                        <Skeleton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second Product */}
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <div className="rounded-lg aspect-[10/7] w-52" >
                            <Skeleton
                                height="100%"
                                width='100%'
                            />
                        </div>
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0 w-9/12">
                                <h2 className="mb-1"><Skeleton height={'20px'} /></h2>
                                <p className="text-sm lg:w-16"><Skeleton /></p>
                            </div>
                            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center">
                                    <div className={`rounded-l w-[96px]`}>
                                        <Skeleton
                                            height={'32px'}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="rounded-full p-1 w-full">
                                        <Skeleton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Totle  */}
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="w-1/3"><Skeleton /></p>
                        <p className="w-1/4"><Skeleton /></p>
                    </div>
                    <div className="flex justify-between">
                        <p className="w-1/3"><Skeleton /></p>
                        <p className="w-1/3"><Skeleton /></p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold w-1/3"><Skeleton height={'25px'} /></p>
                        <p className="text-lg font-bold w-1/3"><Skeleton height={'25px'} /></p>
                    </div>
                    <div className="mt-6 w-full rounded-md py-1.5 font-medium ">
                        <Skeleton height={'30px'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartLoader
