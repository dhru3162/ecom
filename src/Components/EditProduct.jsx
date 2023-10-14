import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavbar'
import PageNotFound from './PageNotFound'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import logo from './logo.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from './Loader/Loader'
import './Numberstyle.css'

const AddProduct = () => {
    const role = sessionStorage.getItem('role')
    const navigate = useNavigate()
    const [collapse, setcollapse] = useState(true)
    const [productData, setProductData] = useState({ title: '', description: '', category: '', image: "", mrp: '', discount: '', availablestock: '', rating: '' })
    const [err, seterr] = useState({ price: '' })
    const [oncheckerr, setoncheckerr] = useState({ title: '' })
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    const getData = () => {
        axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts/${id}`)
            .then((res) => {
                setProductData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                toast.error(`${err.massage}`)
                setLoading(false)
            })
    }

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
            axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts/${id}`, productData)
                .then(() => {
                    toast.success('Product Edited')
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
        if (productData.discount !== '' && productData.mrp !== '') {
            const sprice = productData.mrp * productData.discount / 100
            const finalsprice = productData.mrp - sprice
            setProductData({ ...productData, price: Math.round(finalsprice) })
        }
    }


    if (role === 'admin') {
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
                                        Edit Product
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
                                                <div
                                                    Value={productData.price}
                                                    placeholder='Selling Price'
                                                    className="block w-full h-fit rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                >
                                                    {productData.price}
                                                </div>
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
                                                Edit Product
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
    } else if (role === null) {
        return (
            <>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <NavLink to="/" className="flex items-center">
                            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                            <p className="font-sans self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</p>
                        </NavLink>
                        <div className="flex md:order-2">
                            <button data-target='#tttt' data-collapse-toggle="#tttt" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setcollapse(!collapse)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${collapse ? 'hidden' : ''}`} id="tttt">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <NavLink to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/feature" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Feature</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <p className="text-base font-semibold text-indigo-600">405</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Access Denied</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t access this page without login please login first</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <NavLink
                                to="/login"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login Now
                            </NavLink>
                            <NavLink to="/contact" className="text-sm font-semibold text-gray-900">
                                Contact support <span aria-hidden="true">&rarr;</span>
                            </NavLink>
                        </div>
                    </div>
                </main>
            </>
        )

    } else {
        return (
            <>
                <PageNotFound />
            </>
        )
    }
}

export default AddProduct
