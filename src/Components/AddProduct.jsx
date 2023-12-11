import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from './Loader/Loader'
import './Numberstyle.css'

const AddProduct = () => {
    const role = localStorage.getItem('role')
    const email = localStorage.getItem('email')
    const mobile = localStorage.getItem('mobile')
    const navigate = useNavigate()
    const [productData, setProductData] = useState({ title: '', description: '', category: '', image: "", mrp: '', discount: '', availablestock: '', rating: '' })
    const [err, seterr] = useState({ price: '' })
    const [oncheckerr, setoncheckerr] = useState({ title: '' })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (email === null && mobile === null) {
            navigate('/login')
            toast('Please login first')
        } else if (role === 'user') {
            navigate('/')
            toast('Something went wrong')
        }
        // eslint-disable-next-line
    }, [])

    const validation = () => {
        let error = {}

        if (productData.title === '') {
            error.title = 'Please Enter TItle'
        }

        if (productData.description === '') {
            error.description = 'Please Enter Description'
        }

        if (productData.category === '') {
            error.category = 'Please Enter Category'
        }

        if (productData.image === '') {
            error.image = 'Please Enter Image'
        }

        if (productData.mrp === '') {
            error.mrp = 'Please Enter MRP'
        }

        if (productData.discount === '') {
            error.discount = 'Please Enter Discount'
        } else if ((productData.discount < 0) || (productData.discount > 100)) {
            error.discount = 'Enter Number Between 0 to 100'
        }

        if (productData.availablestock === '') {
            error.availablestock = 'Please Enter Stock'
        }

        if (productData.rating === '') {
            error.rating = 'Please Enter Rating'
        }

        seterr(error)
        return Object.keys(error).length === 0
    }


    const onChangeCheck = () => {
        let error = {}

        if (productData.title === '') {
            error.title = 'Please Enter TItle'
        }

        if (productData.description === '') {
            error.description = 'Please Enter Description'
        }

        if (productData.category === '') {
            error.category = 'Please Enter Category'
        }

        if (productData.image === '') {
            error.image = 'Please Enter Image'
        }

        if (productData.mrp === '') {
            error.mrp = 'Please Enter MRP'
        }

        if (productData.discount === '') {
            error.discount = 'Please Enter Discount'
        } else if ((productData.discount < 0) || (productData.discount > 100)) {
            error.discount = 'Enter Number Between 0 to 100'
        }

        if (productData.availablestock === '') {
            error.availablestock = 'Please Enter Stock'
        }

        if (productData.rating === '') {
            error.rating = 'Please Enter Rating'
        }

        setoncheckerr(error)
        return Object.keys(error).length === 0
    }


    const submit = (e) => {
        e.preventDefault()
        setLoading(true)

        if (validation()) {
            axios.post(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts`, productData)
                .then(() => {
                    toast.success('Product Added')
                    navigate('/products')
                    setProductData({ title: '', description: '', category: '', image: "", mrp: '', discount: '', availablestock: '', rating: '' })
                    setLoading(false)
                })
                .catch((err) => {
                    toast.error(`${err.massage}`)
                    setLoading(false)
                })
        } else {
            const error = Object.keys(oncheckerr)
            const firsterr = error[0]
            if (error.length) {
                if (firsterr !== 'category') {
                    const input = document.querySelector(
                        `input[name=${firsterr}]`
                    )

                    input.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'start',
                    })
                } else {
                    const input = document.querySelector(
                        `select[name=${firsterr}]`
                    )

                    input.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'start',
                    })
                }


            }
            setLoading(false)
        }
    }

    const calculatePrice = () => {
        // eslint-disable-next-line
        if (productData.discount !== '' && productData.mrp !== '' && productData.discount !== NaN && productData.mrp !== NaN) {
            const sprice = productData.mrp * productData.discount / 100
            const finalsprice = productData.mrp - sprice
            setProductData({ ...productData, price: Math.round(finalsprice) })
        }
    }


    return (
        <div className='dark:bg-black h-screen'>
            <AdminNavBar />
            {loading ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    <div className='dark:bg-black h-fit mt-16'>
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                                    Add New Product
                                </h2>
                            </div>
                            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" onSubmit={submit}>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Product Title
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name='title'
                                                value={productData.title}
                                                placeholder='Product Title'
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                onChange={(e) => {
                                                    setProductData({ ...productData, title: e.target.value })
                                                    seterr({ ...err, title: '' })
                                                    onChangeCheck()
                                                }}
                                            />
                                            <small><span className='text-red-600'>{err.title}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Description
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                placeholder='Description'
                                                name='description'
                                                value={productData.description}
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                onChange={(e) => {
                                                    setProductData({ ...productData, description: e.target.value })
                                                    seterr({ ...err, description: '' })
                                                    onChangeCheck()
                                                }}
                                            />
                                            <small><span className='text-red-600'>{err.description}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Category
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                value={productData.category}
                                                name='category'
                                                placeholder='Select Category'
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 "
                                                onChange={(e) => {
                                                    setProductData({ ...productData, category: e.target.value })
                                                    seterr({ ...err, category: '' })
                                                    onChangeCheck()
                                                }}
                                            >
                                                <option disabled value={''}>Select Category</option>
                                                <option value={'mens clothing'}>Men's clothing</option>
                                                <option value={'womens clothing'}>Women's clothing</option>
                                                <option value={'electronics'}>Electronics</option>
                                                <option value={'jewelery'}>Jewelery</option>
                                            </select>
                                            <small><span className='text-red-600'>{err.category}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Image
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name='image'
                                                value={productData.image}
                                                placeholder='https://Image.jpg'
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                onChange={(e) => {
                                                    setProductData({ ...productData, image: e.target.value })
                                                    seterr({ ...err, image: '' })
                                                    onChangeCheck()
                                                }}
                                            />
                                            <small><span className='text-red-600'>{err.image}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            MRP
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name='mrp'
                                                value={productData.mrp}
                                                onBlur={calculatePrice}
                                                placeholder='Product MRP'
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                onChange={(e) => {
                                                    if (e.target.value !== '') {
                                                        setProductData({ ...productData, mrp: e.target.valueAsNumber })
                                                        seterr({ ...err, mrp: '' })
                                                        onChangeCheck()
                                                    } else {
                                                        setProductData({ ...productData, mrp: e.target.value })
                                                        seterr({ ...err, mrp: '' })
                                                        onChangeCheck()
                                                    }
                                                }}
                                            />
                                            <small><span className='text-red-600'>{err.mrp}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Discount
                                        </label>
                                        <div className="mt-2 relative flex flex-wrap items-stretch">
                                            <input
                                                type="number"
                                                // min={0}
                                                // max={100}
                                                placeholder='Discount'
                                                name='discount'
                                                value={productData.discount}
                                                onBlur={calculatePrice}
                                                className="block relative m-0 min-w-0 flex-auto rounded-l-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                onChange={(e) => {
                                                    if (e.target.value !== '') {
                                                        setProductData({ ...productData, discount: e.target.valueAsNumber })
                                                        seterr({ ...err, discount: '' })
                                                        onChangeCheck()
                                                    } else {
                                                        setProductData({ ...productData, discount: e.target.value })
                                                        seterr({ ...err, discount: '' })
                                                        onChangeCheck()
                                                    }
                                                }}
                                            />
                                            <span
                                                className="flex items-center whitespace-nowrap rounded-r-md border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-black dark:bg-gray-800 dark:border-none dark:text-white"
                                            >%</span>
                                        </div>
                                        <small><span className='text-red-600'>{err.discount}</span></small>
                                    </div>

                                    <div
                                        onMouseEnter={() => {
                                            seterr({ ...err, price: 'Selling Price Auto Calculate' })
                                        }}
                                        onMouseLeave={() => {
                                            seterr({ ...err, price: '' })
                                        }}
                                    >
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Selling Price
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                disabled
                                                defaultValue={productData.price}
                                                placeholder='Selling Price'
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                            />
                                            <small><span className='text-green-600'>{err.price}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Stock
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name='stock'
                                                value={productData.availablestock}
                                                placeholder='Available Stock'
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                onChange={(e) => {
                                                    if (e.target.value !== '') {
                                                        setProductData({ ...productData, availablestock: e.target.valueAsNumber })
                                                        seterr({ ...err, availablestock: '' })
                                                        onChangeCheck()
                                                    } else {
                                                        setProductData({ ...productData, availablestock: '' })
                                                        seterr({ ...err, availablestock: e.target.value })
                                                        onChangeCheck()
                                                    }
                                                }}
                                            />
                                            <small><span className='text-red-600'>{err.availablestock}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Rating
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                max={5}
                                                name='rating'
                                                value={productData.rating}
                                                placeholder='Rating'
                                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                onChange={(e) => {
                                                    if (e.target.value !== '') {
                                                        setProductData({ ...productData, rating: e.target.valueAsNumber })
                                                        seterr({ ...err, rating: '' })
                                                        onChangeCheck()
                                                    } else {
                                                        setProductData({ ...productData, rating: e.target.value })
                                                        seterr({ ...err, rating: '' })
                                                        onChangeCheck()
                                                    }
                                                }}
                                            />
                                            <small><span className='text-red-600'>{err.rating}</span></small>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            onClick={() => {

                                            }}
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default AddProduct
