import React, { useContext, useEffect, useState } from 'react'
import { Datacontext } from '../Context'
import '../Numberstyle.css'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import logo from '../logo.png'
import Loader from '../Loader/Loader'

const CheckOut = () => {

    useEffect(() => {
        contextData.setNewOrderData([])
        // eslint-disable-next-line
    }, [])

    const navigate = useNavigate()
    const contextData = useContext(Datacontext)
    const { cart, totalprice: totalpriceFormContext, address, upi, card, newOrderData } = contextData
    const [expanded, setExpanded] = useState({
        address: true,
        addressselected: false,
        paymentselected: false,
        payment: true,
        addAddress: false,
        addCard: false,
        addUPI: false,
    });
    const [addressInput, setAddressinput] = useState({
        addressid: 0,
        fname: '',
        lname: '',
        mobile: '',
        country: 'US',
        add1: '',
        add2: '',
        city: '',
        state: '',
        zipcode: ''
    })
    const [cardInput, setCardInput] = useState({
        cardid: 0,
        name: '',
        cardnumber: '',
        exdate: '',
        cvv: ''
    })
    const [upiInput, setupiInput] = useState({
        upiid: 0,
        upi: '',
        upipin: ''
    })
    const [code, setCode] = useState('')
    const [discountInput, setDiscountInput] = useState('')
    const [cvvInput, setcvvInput] = useState('')
    const [err, seterr] = useState({})
    const [cardErr, setCardErr] = useState({})
    const [cvvErr, setcvvErr] = useState(true)
    const [upiErr, setupiErr] = useState({})
    const [codeErr, setcodeErr] = useState({})
    const [addid, setaddid] = useState(0)
    const [cardid, setcardid] = useState(0)
    const [upiid, setupiid] = useState(0)
    const [newaddid, setnewaddid] = useState(0)
    const [newcardid, setnewcardid] = useState(0)
    const [newupiid, setnewupiid] = useState(0)
    const [radiodata, setradiodata] = useState({})
    const [radiocarddata, setradiocarddata] = useState({})
    const [radioupidata, setradioupidata] = useState({})
    const [errors, seterrors] = useState({
        fname: true,
        lname: true,
        mobile: true,
        add1: true,
        add2: true,
        city: true,
        state: true,
        zipcode: true
    })
    const [CardErrors, setCardErrors] = useState({
        name: true,
        cardnumber: true,
        exdate: true,
        cvv: true
    })
    const [upiErrors, setupiErrors] = useState({
        upi: true,
        pin: true
    })
    const [codeApplied, setCodeApplied] = useState(false)
    const [paymentok, setpaymentok] = useState(true)
    const [totalprice, setTotalprice] = useState(totalpriceFormContext)
    // eslint-disable-next-line
    const price = eval(totalprice) + 4.99

    const addNewAddress = () => {
        setaddid(0)
        setExpanded({ ...expanded, addAddress: !expanded.addAddress })

        if (address.length === 0) {
            setnewaddid(1)
        } else {
            const addressid = contextData.address.map(data => {
                return data.addressid
            })
            setnewaddid(Math.max(...addressid) + 1)
        }
    }

    const addNewCard = () => {
        setcardid(0)
        setExpanded({ ...expanded, addCard: !expanded.addCard, addUPI: false })

        if (card.length === 0) {
            setnewcardid(1)
        } else {
            const cardid = contextData.card.map(data => {
                return data.cardid
            })
            setnewcardid(Math.max(...cardid) + 1)
        }
    }

    const addNewUpi = () => {
        setupiid(0)
        setExpanded({ ...expanded, addUPI: !expanded.addUPI, addCard: false })

        if (upi.length === 0) {
            setnewupiid(1)
        } else {
            const upiid = contextData.upi.map(data => {
                return data.upiid
            })
            setnewupiid(Math.max(...upiid) + 1)
        }
    }

    const addressValidate = () => {
        const errors = {}

        const pattern = /^[a-zA-Z]+$/
        if (addressInput.fname === "") {
            errors.fname = "Please Enter First Name"
        } else if (!pattern.test(addressInput.fname)) {
            errors.fname = "Alphabet only"
        }

        if (addressInput.lname === "") {
            errors.lname = "Please Enter Last Name"
        } else if (!pattern.test(addressInput.lname)) {
            errors.lname = "Alphabet only"
        }

        const mobilepattern = /^([0-9]{10})$/
        if (addressInput.mobile === "") {
            errors.mobile = "Please Enter Contact Number"
        } else if (!mobilepattern.test(addressInput.mobile)) {
            errors.mobile = "Invalid Contact Number"
        }

        if (addressInput.add1 === "") {
            errors.add1 = "Please Enter Addredd Line 1"
        }

        if (addressInput.add2 === "") {
            errors.add2 = "Please Enter Addredd Line 2"
        }

        if (addressInput.add2 === "") {
            errors.city = "Please Enter City"
        }

        if (addressInput.add2 === "") {
            errors.state = "Please Enter State"
        }

        // eslint-disable-next-line
        const zipcodepattern = /^([0-9]{5})\-([0-9]{4})$/
        if (addressInput.zipcode === "") {
            errors.zipcode = "Please Enter ZIP / Postal code"
        } else if (!zipcodepattern.test(addressInput.zipcode)) {
            errors.zipcode = "Invalid ZIP / Postal code"
        }

        seterr(errors)
        return Object.keys(errors).length === 0
    }

    const cardValidate = () => {
        const errors = {}

        const namepattern = /^[a-zA-Z]+$/
        if (cardInput.name === "") {
            errors.name = "Please Enter Name"
        } else if (!namepattern.test(cardInput.name)) {
            errors.name = "Alphabet only"
        }

        const cardpattern = /^[0-9]{16}$/
        if (cardInput.cardnumber === "") {
            errors.cardnumber = "Please Enter Card Number"
        } else if (!cardpattern.test(cardInput.cardnumber)) {
            errors.cardnumber = "Invalid Card Number"
        }

        const datepattern = /^[0-9]{2}\/[0-9]{2}$/
        if (cardInput.exdate === "") {
            errors.date = "Please Enter Date"
        } else if (!datepattern.test(cardInput.exdate)) {
            errors.date = "Invalid Date"
        }

        const cvvpattern = /^[0-9]{3}$/
        if (cardInput.cvv === '') {
            errors.cvv = 'Please Enter CVV'
        } else if (!cvvpattern.test(cardInput.cvv)) {
            errors.cvv = 'Invalid CVV'
        }

        setCardErr(errors)
        return Object.keys(errors).length === 0
    }

    const cvvvalidate = () => {
        const error = {}

        const cvv = /^[0-9]{3}$/
        if (cvvInput === '') {
            error.cvv = 'Please Enter CVV'
        } else if (!cvv.test(cvvInput)) {
            error.cvv = 'Invalid CVV'
        }

        setcvvErr(Object.keys(error).length === 0)
        return Object.keys(error).length === 0
    }

    const upivalidate = () => {
        const error = {}

        // eslint-disable-next-line
        const upi = /^[a-zA-Z0-9.-]{2,256}\@[a-zA-Z][a-zA-Z]{2,64}$/
        if (upiInput.upi === '') {
            error.upi = 'Please Enter UPI Id'
        } else if (!upi.test(upiInput.upi)) {
            error.upi = 'Invalid UPI Id'
        }

        const pin4 = /^[0-9]{4}$/
        const pin6 = /^[0-9]{6}$/
        if (upiInput.upipin === '') {
            error.pin = 'Please Enter UPI Pin'
        } else if ((!pin4.test(upiInput.upipin)) && (!pin6.test(upiInput.upipin))) {
            error.pin = 'Invalid UPI Pin'
        }

        setupiErr(error)
        return Object.keys(error).length === 0
    }

    const discountValidate = () => {
        const error = {}

        const upperinput = discountInput.toUpperCase()
        // eslint-disable-next-line
        if (discountInput === '') {
            error.code = 'Please Enter Discount Code'
        } else if (upperinput !== 'FIRST10') {
            error.code = 'Invalid Discount Code'
        }

        setcodeErr(error)
        return Object.keys(error).length === 0
    }

    const items = cart.map((cartdata, index) =>
        <div key={index} className='dark:bg-gray-800'>
            <div className="justify-between mb-6 rounded-lg flex">
                <img src={cartdata.image} alt={cartdata.image} className="w-1/3 p-2 rounded-lg aspect-[1/1] object-contain border-[1px]" />
                <div className="ml-4 inline-flex w-full">
                    <div className="">
                        <h2 className="font-bold text-gray-900 dark:text-white">{cartdata.title}</h2>
                        <p className="text-sm dark:text-white">${cartdata.price}</p>
                        <small><span className='dark:text-white'>Quantity: {cartdata.qtn}</span></small>

                        <div className='mt-3'>
                            <button
                                type="button"
                                className='text-blue-700 font-semibold cursor-pointer'
                                onClick={() => navigate('/cart')}
                            >
                                Edit
                            </button>
                            <span className=' border-l-2 h-3 ms-2 me-2'></span>
                            <button
                                type="button"
                                className='text-blue-700 font-semibold cursor-pointer'
                                onClick={() => {
                                    contextData.removeProduct(cartdata)
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const saveAddress = contextData.address.map((data, index) =>
        <div key={index}>
            <div className="justify-between rounded-lg flex gap-x-2 my-4">
                <div>
                    <input
                        type="radio"
                        id={data.addressid}
                        value={data.addressid}
                        checked={addid === data.addressid}
                        name='selectaddress'
                        className=" cursor-pointer me-3 top-0 flex justify-between gap-x-0 mt-1"
                        onChange={() => {
                            setExpanded({ ...expanded, addAddress: false })
                            setaddid(data.addressid)
                            setradiodata(data)
                        }}
                    />
                </div>
                <div className="inline-flex w-full cursor-default max-w-full">
                    <div onClick={() => {
                        setExpanded({ ...expanded, addAddress: false })
                        setaddid(data.addressid)
                        setradiodata(data)
                    }}>
                        <p className="font-bold text-gray-900 dark:text-white">{data.fname} {data.lname}</p>
                        <p className="text-sm dark:text-white">{data.add1}</p>
                        <p className="text-sm dark:text-white">{data.add2}</p>
                        <p className="text-sm dark:text-white">{data.city}, {data.state}, {data.zipcode}.</p>
                        <small><span className='dark:text-white'>Contact No.: {data.mobile}</span></small>
                    </div>
                </div>
            </div>
        </div>
    )

    const saveCards = contextData.card.map((data, index) =>
        <div key={index}>
            <div className="rounded-lg flex my-4">
                <div className="inline-flex w-full cursor-default max-w-full">
                    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6 rounded-lg w-full">
                        <div className="sm:col-span-2 h-8">
                            <div
                                className='flex space-x-3'
                                onClick={() => {
                                    setcvvInput()
                                    setExpanded({ ...expanded, addCard: false, addUPI: false })
                                    setupiid(0)
                                    setcardid(data.cardid)
                                    setradiocarddata(data)
                                }}>
                                <input
                                    type="radio"
                                    id={data.cardid}
                                    value={data.cardid}
                                    checked={cardid === data.cardid}
                                    name='selectcard'
                                    className=" cursor-pointer top-0 flex gap-x-1"
                                    onChange={() => {
                                        setupiid(0)
                                        setcardid(data.cardid)
                                        setradiocarddata(data)
                                    }}
                                />
                                <p className="text-gray-900 font-medium dark:text-white">{data.cardnumber}</p>
                                <p className="text-gray-900 font-medium dark:text-white">{data.exdate}</p>

                            </div>
                        </div>

                        {cardid === data.cardid && (
                            <>
                                <div className="sm:col-span-3">
                                    {cvvErr ? (
                                        <>
                                            <input
                                                type="number"
                                                value={cvvInput || ''}
                                                onChange={(e) => {
                                                    setcvvErr(true)
                                                    setcvvInput(e.target.value)
                                                }}
                                                className="mt-2 h-8 md:mt-0 ms-4 block w-[40%] rounded-md border py-1.5 pl-3 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 relative me-3 flex-auto rounded-l border-solid ring-1 ring-inset ring-gray-300 focus:ring-blue-700 outline-none dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <input
                                                type="number"
                                                value={cvvInput || ''}
                                                onChange={(e) => {
                                                    setcvvErr(true)
                                                    setcvvInput(e.target.value)
                                                }}
                                                className="mt-2 h-8 md:mt-0 ms-4 block w-[40%] border-2 border-red-600 rounded-md py-1.5 pl-3 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 relative me-3 flex-auto rounded-l focus:border-red-800 outline-none dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                            />
                                        </>
                                    )}

                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

    const saveupi = contextData.upi.map((data, index) =>
        <div key={index}>
            <div className="rounded-lg flex my-4">
                <div className="inline-flex w-full cursor-default max-w-full">
                    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6 rounded-lg w-full">
                        <div className="sm:col-span-2 h-8">
                            <div
                                className='flex space-x-3'
                                onClick={() => {
                                    setcvvInput()
                                    setcardid(0)
                                    setExpanded({ ...expanded, addCard: false, addUPI: false })
                                    setupiid(data.upiid)
                                    setradioupidata(data)
                                }}>
                                <input
                                    type="radio"
                                    id={data.upiid}
                                    value={data.upiid}
                                    checked={upiid === data.upiid}
                                    name='selectcard'
                                    className=" cursor-pointer top-0 flex gap-x-1"
                                    onChange={() => {
                                        setcardid(0)
                                        setupiid(data.upiid)
                                        setradioupidata(data)
                                    }}
                                />
                                <p className="text-gray-900 font-medium dark:text-white">{data.upi}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className='dark:bg-black h-fit'>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <p className="font-sans self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</p>
                    </NavLink>
                    <div className="flex md:order-2">
                    </div>
                </div>
            </nav>

            <>
                {contextData.loading ? (
                    <Loader />
                ) : (
                    <>
                        {newOrderData.length === 0 ? (
                            <>
                                <div className="pt-20 dark:bg-black">
                                    <h1 className="mb-8 text-center text-2xl font-bold dark:text-white">Check Out</h1>
                                    <div className='dark:bg-black'>
                                        <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                                            <div className="rounded-lg md:w-2/3">

                                                <div className="justify-between rounded-lg bg-white p-3 sm:flex sm:justify-start dark:bg-gray-800">

                                                    <div className="border-gray-900/10 w-full">
                                                        <h1 className="leading-7 text-red-700 font-bold text-lg pb-2">
                                                            1. Select a delivery address</h1>

                                                        {expanded.address ? (
                                                            <>
                                                                <div className='border rounded-lg p-5'>
                                                                    <p className='font-semibold dark:text-white'>Your Addresses</p>
                                                                    <hr className="my-4" />
                                                                    {saveAddress}
                                                                    <button
                                                                        className="form-exp-heading cursor-pointer text-blue-700 "
                                                                        onClick={addNewAddress}
                                                                    >
                                                                        <strong className='justify-items-end'>{expanded.addAddress ? '- ' : '+ '}</strong>
                                                                        <span> Add a new address</span>
                                                                    </button>

                                                                    {expanded.addAddress && (
                                                                        <>
                                                                            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 border rounded-lg p-5">
                                                                                <div className="sm:col-span-3">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">First name</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            value={addressInput.fname}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, fname: e.target.value, addressid: newaddid })
                                                                                                seterrors({ ...errors, fname: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.fname && <span className='text-red-500 text-xs'>{err.fname}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-3">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Last name</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            value={addressInput.lname}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, lname: e.target.value })
                                                                                                seterrors({ ...errors, lname: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.lname && <span className='text-red-500 text-xs'>{err.lname}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-4">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Contact Number</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="number"
                                                                                            value={addressInput.mobile}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, mobile: e.target.value })
                                                                                                seterrors({ ...errors, mobile: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.mobile && <span className='text-red-500 text-xs'>{err.mobile}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-3">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Country/Region</label>
                                                                                    <div className="mt-2">
                                                                                        <select value={addressInput.country} onChange={(e) => { setAddressinput({ ...addressInput, country: e.target.value }) }} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0" >
                                                                                            <option value={'US'}>United States</option>
                                                                                            <option value={'canada'}>Canada</option>
                                                                                            <option value={'mexico'}>Mexico</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-span-full">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Address line 1</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            value={addressInput.add1}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, add1: e.target.value })
                                                                                                seterrors({ ...errors, add1: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.add1 && <span className='text-red-500 text-xs'>{err.add1}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-span-full">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Address line 2</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type='text'
                                                                                            value={addressInput.add2}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, add2: e.target.value })
                                                                                                seterrors({ ...errors, add2: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.add2 && <span className='text-red-500 text-xs'>{err.add2}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-2 sm:col-start-1">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">City</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            value={addressInput.city}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, city: e.target.value })
                                                                                                seterrors({ ...errors, city: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.city && <span className='text-red-500 text-xs'>{err.city}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-2">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">State / Province</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            value={addressInput.state}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, state: e.target.value })
                                                                                                seterrors({ ...errors, state: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.state && <span className='text-red-500 text-xs'>{err.state}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-2">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">ZIP / Postal code</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            placeholder='00000-0000'
                                                                                            value={addressInput.zipcode}
                                                                                            onChange={(e) => {
                                                                                                setAddressinput({ ...addressInput, zipcode: e.target.value })
                                                                                                seterrors({ ...errors, zipcode: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{errors.zipcode && <span className='text-red-500 text-xs'>{err.zipcode}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <button
                                                                                    type="submit"
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault()
                                                                                        seterrors({
                                                                                            ...errors,
                                                                                            fname: true,
                                                                                            lname: true,
                                                                                            mobile: true,
                                                                                            add1: true,
                                                                                            add2: true,
                                                                                            city: true,
                                                                                            state: true,
                                                                                            zipcode: true,
                                                                                        })
                                                                                        if (addressValidate()) {
                                                                                            contextData.addAddress(addressInput)
                                                                                            // setaddid(addressInput.addressid)
                                                                                            setExpanded({ ...expanded, addAddress: false })
                                                                                            setAddressinput({
                                                                                                addressid: 0,
                                                                                                fname: '',
                                                                                                lname: '',
                                                                                                mobile: '',
                                                                                                country: 'US',
                                                                                                add1: '',
                                                                                                add2: '',
                                                                                                city: '',
                                                                                                state: '',
                                                                                                zipcode: ''
                                                                                            })
                                                                                        }
                                                                                    }}
                                                                                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                                >
                                                                                    Add
                                                                                </button>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                    <hr className="my-4" />

                                                                    {expanded.addAddress ? (
                                                                        <button
                                                                            type='button'
                                                                            disabled
                                                                            className="w-full md:w-2/5 rounded-md bg-blue-400 py-1.5 font-medium text-blue-50"
                                                                        >
                                                                            Use this address
                                                                        </button>
                                                                    ) : (
                                                                        <>
                                                                            {addid === 0 ? (
                                                                                <>
                                                                                    <button
                                                                                        type='button'
                                                                                        disabled
                                                                                        className="w-full md:w-2/5 rounded-md bg-blue-400 py-1.5 font-medium text-blue-50"
                                                                                    >
                                                                                        Use this address
                                                                                    </button>
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <button
                                                                                        type='button'
                                                                                        className="w-full md:w-2/5 rounded-md bg-blue-600 py-1.5 font-medium text-blue-50 hover:bg-blue-700"
                                                                                        onClick={() => {
                                                                                            if (!expanded.paymentselected) {
                                                                                                setExpanded({ ...expanded, address: !expanded.address, addressselected: !expanded.addressselected })
                                                                                            } else {
                                                                                                setExpanded({ ...expanded, address: !expanded.address })
                                                                                            }
                                                                                        }}
                                                                                    >
                                                                                        Use this address
                                                                                    </button>
                                                                                </>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className='border rounded-lg'>
                                                                    <div className="justify-between rounded-lg flex gap-x-2 my-4 mx-6">
                                                                        <div className="inline-flex w-full cursor-default max-w-full">
                                                                            <div>
                                                                                <p className="font-bold text-gray-900 dark:text-white">{radiodata.fname} {radiodata.lname}</p>
                                                                                <p className="text-sm dark:text-white">{radiodata.add1},</p>
                                                                                <p className="text-sm dark:text-white">{radiodata.add2},</p>
                                                                                <p className="text-sm dark:text-white">{radiodata.city}, {radiodata.state}, {radiodata.zipcode}.</p>
                                                                                <small><span className='dark:text-white'>Contact No.: {radiodata.mobile}</span></small>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <button className="text-red-700 py-1.5 hover:text-blue-700"
                                                                                onClick={() => {
                                                                                    if (!expanded.paymentselected) {
                                                                                        setExpanded({ ...expanded, address: !expanded.address, addressselected: !expanded.addressselected })
                                                                                    } else {
                                                                                        setExpanded({ ...expanded, address: !expanded.address })
                                                                                    }
                                                                                }}
                                                                            >
                                                                                Change
                                                                            </button>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}

                                                    </div>


                                                </div>

                                                <div className="justify-between rounded-lg bg-white p-3 sm:flex sm:justify-start dark:bg-gray-800">

                                                    <div className="border-gray-900/10 w-full">
                                                        <h1 className="leading-7 text-red-700 font-bold text-lg pb-2">
                                                            2. Payment method
                                                        </h1>

                                                        {expanded.addressselected ? (
                                                            <>
                                                                {expanded.payment ? (
                                                                    <div className='border rounded-lg p-5'>
                                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                                            Discount code
                                                                        </label>
                                                                        <div className='relative flex flex-wrap items-stretch'>
                                                                            {codeApplied ? (
                                                                                <>
                                                                                    <input
                                                                                        type="text"
                                                                                        value={discountInput}
                                                                                        disabled
                                                                                        onChange={(e) => {
                                                                                            setcodeErr({})
                                                                                            setDiscountInput(`${e.target.value}`)
                                                                                        }}
                                                                                        className="relative block me-3 flex-auto rounded-l border-solid rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                    />
                                                                                    <button
                                                                                        className="px-6 text-sm rounded-md bg-blue-600 font-medium text-blue-50 hover:bg-blue-700 "
                                                                                        type="button"
                                                                                        id="button-addon2"
                                                                                        onClick={() => {
                                                                                            setCodeApplied(false)
                                                                                            setCode('')
                                                                                            // eslint-disable-next-line
                                                                                            const data = eval(`${totalprice.toString()}+10`).toFixed(2)
                                                                                            setTotalprice(parseInt(data))
                                                                                        }}
                                                                                    >
                                                                                        Remove
                                                                                    </button>
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder='FIRST10'
                                                                                        value={discountInput}
                                                                                        onChange={(e) => {
                                                                                            setcodeErr({})
                                                                                            setDiscountInput(`${e.target.value}`)
                                                                                        }}
                                                                                        className="relative block me-3 flex-auto rounded-l border-solid rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                    />
                                                                                    <button
                                                                                        className="px-6 text-sm rounded-md bg-blue-600 font-medium text-blue-50 hover:bg-blue-700 "
                                                                                        type="button"
                                                                                        id="button-addon2"
                                                                                        onClick={() => {
                                                                                            if (discountValidate()) {
                                                                                                setCode(discountInput.toUpperCase())
                                                                                                setCodeApplied(true)
                                                                                                setDiscountInput('')
                                                                                                setcodeErr({})
                                                                                                setTotalprice((totalprice - 10).toFixed(2))
                                                                                            }
                                                                                        }}
                                                                                    >
                                                                                        Apply
                                                                                    </button>
                                                                                </>
                                                                            )}
                                                                        </div>
                                                                        <small>
                                                                            {code === '' ?
                                                                                <span className='text-red-500 text-xs'>{codeErr.code}</span>
                                                                                :
                                                                                <span className=' text-green-500 text-xs'>'{code}' Code Applied</span>}
                                                                        </small>
                                                                        <hr className="my-4" />
                                                                        <p className='font-semibold my-4 dark:text-white'>Credit & Debit Cards</p>
                                                                        <hr className="my-4" />
                                                                        {saveCards}
                                                                        <button
                                                                            className="form-exp-heading cursor-pointer text-blue-700 "
                                                                            onClick={addNewCard}
                                                                        >
                                                                            <strong className='justify-items-end'>{expanded.addCard ? '- ' : '+ '}</strong>
                                                                            <span> Add a new card</span>
                                                                        </button>

                                                                        {expanded.addCard && (
                                                                            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 border rounded-lg p-5">

                                                                                <div className="sm:col-span-4">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Name on card</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            value={cardInput.name}
                                                                                            onChange={(e) => {
                                                                                                setCardInput({ ...cardInput, name: e.target.value, cardid: newcardid })
                                                                                                setCardErrors({ ...CardErrors, name: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{CardErrors.name && <span className='text-red-500 text-xs'>{cardErr.name}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-4">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Card number</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="tel"
                                                                                            maxLength={16}
                                                                                            value={cardInput.cardnumber}
                                                                                            onChange={(e) => {
                                                                                                setCardInput({ ...cardInput, cardnumber: e.target.value })
                                                                                                setCardErrors({ ...CardErrors, cardnumber: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{CardErrors.cardnumber && <span className='text-red-500 text-xs'>{cardErr.cardnumber}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-2 sm:col-start-1">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Expiration date (MM/YY)</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="tel"
                                                                                            maxLength={5}
                                                                                            value={cardInput.exdate}
                                                                                            onChange={(e) => {
                                                                                                setCardInput({ ...cardInput, exdate: e.target.value })
                                                                                                setCardErrors({ ...CardErrors, exdate: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{CardErrors.exdate && <span className='text-red-500 text-xs'>{cardErr.date}</span>}</small>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="sm:col-span-2">
                                                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">CVV</label>
                                                                                    <div className="mt-2">
                                                                                        <input
                                                                                            type="tel"
                                                                                            maxLength={3}
                                                                                            value={cardInput.cvv}
                                                                                            onChange={(e) => {
                                                                                                setCardInput({ ...cardInput, cvv: e.target.value })
                                                                                                setCardErrors({ ...CardErrors, cvv: false })
                                                                                            }}
                                                                                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                        />
                                                                                        <small>{CardErrors.cvv && <span className='text-red-500 text-xs'>{cardErr.cvv}</span>}</small>
                                                                                    </div>
                                                                                </div>


                                                                                <div className="sm:col-span-2 sm:col-start-1">
                                                                                    <button
                                                                                        type="submit"
                                                                                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                                        onClick={(e) => {
                                                                                            e.preventDefault()
                                                                                            setCardErrors({
                                                                                                name: true,
                                                                                                cardnumber: true,
                                                                                                exdate: true,
                                                                                                cvv: true
                                                                                            })
                                                                                            if (cardValidate()) {
                                                                                                contextData.addCard(cardInput)
                                                                                                setExpanded({ ...expanded, addCard: false })
                                                                                                setCardInput({
                                                                                                    cardid: 0,
                                                                                                    name: '',
                                                                                                    cardnumber: '',
                                                                                                    exdate: '',
                                                                                                    cvv: ''
                                                                                                })
                                                                                            }
                                                                                        }}
                                                                                    >
                                                                                        Add Card
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        <hr className="my-4" />
                                                                        <p className='font-semibold my-4 dark:text-white'>UPI</p>
                                                                        <hr className="my-4" />
                                                                        {saveupi}
                                                                        <button
                                                                            className="form-exp-heading cursor-pointer text-blue-700 "
                                                                            onClick={addNewUpi}
                                                                        >
                                                                            <strong className='justify-items-end'>{expanded.addUPI ? '- ' : '+ '}</strong>
                                                                            <span>Enter UPI id</span>
                                                                        </button>

                                                                        {expanded.addUPI && (
                                                                            <div className='my-4'>
                                                                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 border rounded-lg p-5">

                                                                                    <div className="sm:col-span-4">
                                                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">UPI ID</label>
                                                                                        <div className="mt-2">
                                                                                            <input
                                                                                                type="text"
                                                                                                value={upiInput.upi}
                                                                                                onChange={(e) => {
                                                                                                    setupiErrors({ ...upiErrors, upi: false })
                                                                                                    setupiInput({ ...upiInput, upi: e.target.value, upiid: newupiid })
                                                                                                }}
                                                                                                className="block outline-none w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                            />
                                                                                            <small>{upiErrors.upi && <span className='text-red-500 text-xs'>{upiErr.upi}</span>}</small>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="sm:col-span-2 sm:col-start-1">
                                                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Pin</label>
                                                                                        <div className="mt-2">
                                                                                            <input
                                                                                                type="text"
                                                                                                value={upiInput.upipin}
                                                                                                onChange={(e) => {
                                                                                                    setupiErrors({ ...upiErrors, pin: false })
                                                                                                    setupiInput({ ...upiInput, upipin: e.target.value })
                                                                                                }}
                                                                                                className="block outline-none w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-600 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                                                            />
                                                                                            <small>{upiErrors.pin && <span className='text-red-500 text-xs'>{upiErr.pin}</span>}</small>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="sm:col-span-2 sm:col-start-1">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                                            onClick={(e) => {
                                                                                                e.preventDefault()
                                                                                                setupiErrors({
                                                                                                    upi: true,
                                                                                                    pin: true
                                                                                                })
                                                                                                if (upivalidate()) {
                                                                                                    contextData.addUpi(upiInput)
                                                                                                    setExpanded({ ...expanded, addUPI: false })
                                                                                                    setupiInput({
                                                                                                        upiid: 0,
                                                                                                        upi: '',
                                                                                                        upipin: ''
                                                                                                    })
                                                                                                }
                                                                                            }}
                                                                                        >
                                                                                            Add UPI
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        <hr className="my-4" />

                                                                        {cardid === 0 && upiid === 0 ? (
                                                                            <>

                                                                                <button
                                                                                    type='button'
                                                                                    className="mt-6 w-full md:w-2/5 rounded-md bg-blue-400 py-1.5 font-medium text-blue-50"
                                                                                    disabled
                                                                                >
                                                                                    Use this payment method
                                                                                </button>
                                                                            </>
                                                                        ) : (
                                                                            <>

                                                                                <button
                                                                                    type='button'
                                                                                    className="mt-6 w-full md:w-2/5 rounded-md bg-blue-600 py-1.5 font-medium text-blue-50 hover:bg-blue-700"
                                                                                    onClick={() => {
                                                                                        if (cardid > 0) {
                                                                                            if (cvvvalidate()) {
                                                                                                setExpanded({ ...expanded, payment: false, paymentselected: true })
                                                                                            }
                                                                                        } else {
                                                                                            setExpanded({ ...expanded, payment: false, paymentselected: true })
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    Use this payment method
                                                                                </button>
                                                                            </>
                                                                        )}



                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <div className='border rounded-lg'>
                                                                            <div className="justify-between rounded-lg flex gap-x-2 my-4 mx-6">
                                                                                <div className="inline-flex w-full cursor-default max-w-full">
                                                                                    {cardid > 0 &&
                                                                                        <div>
                                                                                            <p className="font-bold text-gray-900 dark:text-white">{radiocarddata.name}</p>
                                                                                            <p className="text-sm dark:text-white">{radiocarddata.cardnumber}</p>
                                                                                        </div>
                                                                                    }
                                                                                    {upiid > 0 &&
                                                                                        <div>
                                                                                            <p className="font-semibold text-gray-900 dark:text-white">Pay Using {radioupidata.upi} Upi</p>
                                                                                        </div>
                                                                                    }
                                                                                </div>
                                                                                <div>
                                                                                    <button className="text-red-700 py-1.5 hover:text-blue-700 outline-none"
                                                                                        onClick={() => {
                                                                                            setExpanded({ ...expanded, payment: !expanded.payment })
                                                                                        }}
                                                                                    >
                                                                                        Change
                                                                                    </button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <>
                                                                <hr className="my-4" />
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-2/5 dark:bg-gray-800 dark:border-white">
                                                {items}
                                                <hr className="my-4" />
                                                <div className="mb-2 flex justify-between">
                                                    <p className="text-gray-700 dark:text-white">Subtotal</p>
                                                    <p className="text-gray-700 dark:text-white">${totalprice}</p>
                                                </div>
                                                {code !== '' &&
                                                    <div className="mb-2 flex justify-between">
                                                        <p className="text-gray-700 dark:text-white">Coupon Discount</p>
                                                        <p className="text-gray-700 dark:text-white">-$10</p>
                                                    </div>
                                                }
                                                <div className="flex justify-between">
                                                    <p className="text-gray-700 dark:text-white">Shipping Charge</p>
                                                    <p className="text-gray-700 dark:text-white">{totalprice >= 100 ? 'Free Delivery' : '$4.99'}</p>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="flex justify-between">
                                                    <p className="text-lg font-bold dark:text-white">Total</p>
                                                    <div className="">
                                                        <p className="mb-1 text-lg font-bold dark:text-white">${totalprice < 100 ? price : totalprice}</p>
                                                    </div>
                                                </div>
                                                {!expanded.address && !expanded.payment ? (
                                                    <>
                                                        {/* {cardid > 0 ? (
                                                                <> */}
                                                        <button className="mt-6 w-full rounded-md bg-blue-600 py-1.5 font-medium text-blue-50 hover:bg-blue-700"
                                                            onClick={() => {
                                                                if (upiid > 0) {
                                                                    const conformation = prompt('Enter Your Upi Pin')
                                                                    const inqtn = contextData.upi.findIndex(((obj) => obj.upiid === upiid))
                                                                    if (contextData.upi[inqtn].upipin === conformation) {
                                                                        setpaymentok(true)
                                                                        contextData.orderPlaced(radiodata, radioupidata, 'UPI', `${totalprice < 100 ? price : totalprice}`, `${codeApplied}`)
                                                                    } else {
                                                                        setpaymentok(false)
                                                                        contextData.setloading(true)
                                                                        contextData.setNewOrderData(contextData.cart)
                                                                        setTimeout(() => {
                                                                            contextData.setloading(false)
                                                                        }, 1500)
                                                                    }
                                                                } else {
                                                                    const inqtn = contextData.card.findIndex(((obj) => obj.cardid === cardid))
                                                                    if (contextData.card[inqtn].cvv === cvvInput) {
                                                                        setpaymentok(true)
                                                                        contextData.orderPlaced(radiodata, radiocarddata, 'Card', `${totalprice < 100 ? price : totalprice}`, `${codeApplied}`)
                                                                    } else {
                                                                        setpaymentok(false)
                                                                        contextData.setloading(true)
                                                                        contextData.setNewOrderData(contextData.cart)
                                                                        setTimeout(() => {
                                                                            contextData.setloading(false)
                                                                        }, 1500)
                                                                    }
                                                                }
                                                            }}
                                                        >
                                                            Place your order and pay
                                                        </button>

                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            disabled
                                                            className="mt-6 w-full rounded-md bg-blue-400 py-1.5 font-medium text-blue-50 "
                                                        >
                                                            Place your order and pay
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {paymentok ? (
                                    <>
                                        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black h-screen">
                                            <div className="text-center">
                                                <h1 className="mt-4 text-lg font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Your Order Placed Successfully</h1>
                                                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">We are dispatch your order within 24 hours</p>



                                                {contextData.newOrderData.length !== 0 &&
                                                    <div className=' block my-4 w-full h-full'>
                                                        <div className='flex justify-center align-bottom'>
                                                            <img src={contextData.newOrderData[0].image} alt='Item Images' className="w-40 rounded-lg aspect-[10/7] object-contain border-[1px]" />
                                                            {contextData.newOrderData.length > 1 &&
                                                                <>
                                                                    <small className='relative pt-[30%] md:pt-[25%] inline-block h-full' >
                                                                        <span >
                                                                            + {contextData.newOrderData.length - 1}
                                                                        </span>
                                                                    </small>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                }

                                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                                    <NavLink
                                                        to="/"
                                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        onClick={() => {
                                                            contextData.setNewOrderData([])
                                                            contextData.orderNotPlaced()
                                                        }}
                                                    >
                                                        Continue Shopping
                                                    </NavLink>
                                                    <Link
                                                        to="/myorders"
                                                        className="text-sm font-semibold text-gray-900 dark:text-white"
                                                        onClick={() => {
                                                            contextData.setNewOrderData([])
                                                            contextData.orderNotPlaced()
                                                        }}
                                                    >
                                                        Go to my orders
                                                        <span aria-hidden="true">&rarr;</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </main>
                                    </>
                                ) : (
                                    <>
                                        {cardid > 0 ? (
                                            <>
                                                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black h-screen">
                                                    <div className="text-center">
                                                        <h1 className="mt-4 text-lg font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Your Order Not Placed</h1>
                                                        <p className="mt-6 text-base leading-7 text-red-500">Wrong CVV Entered</p>

                                                        {contextData.newOrderData.length !== 0 &&
                                                            <div className=' block my-4 w-full h-full'>
                                                                <div className='flex justify-center align-bottom'>
                                                                    <img src={contextData.newOrderData[0].image} alt='Item Images' className="w-40 rounded-lg aspect-[10/7] object-contain border-[1px]" />
                                                                    {contextData.newOrderData.length > 1 &&
                                                                        <>
                                                                            <small className='relative pt-[30%] md:pt-[25%] inline-block h-full' >
                                                                                <span >
                                                                                    + {contextData.newOrderData.length - 1}
                                                                                </span>
                                                                            </small>
                                                                        </>
                                                                    }
                                                                </div>
                                                            </div>
                                                        }

                                                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                                            <NavLink
                                                                to="/"
                                                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                onClick={() => {
                                                                    contextData.setNewOrderData([])
                                                                    contextData.orderNotPlaced()
                                                                }}
                                                            >
                                                                Continue Shopping
                                                            </NavLink>
                                                            <Link
                                                                to="/cart"
                                                                className="text-sm font-semibold text-gray-900 dark:text-white"
                                                                onClick={() => {
                                                                    contextData.setNewOrderData([])
                                                                    contextData.rendomcode()
                                                                }}
                                                            >
                                                                Order Again
                                                                <span aria-hidden="true">&rarr;</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </main>
                                            </>
                                        ) : (
                                            <>
                                                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black h-screen">
                                                    <div className="text-center">
                                                        <h1 className="mt-4 text-lg font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Your Order Not Placed</h1>
                                                        <p className="mt-6 text-base leading-7 text-red-500">Worng UPI Pin Entered</p>

                                                        {contextData.newOrderData.length !== 0 &&
                                                            <div className=' block my-4 w-full h-full'>
                                                                <div className='flex justify-center align-bottom'>
                                                                    <img src={contextData.newOrderData[0].image} alt='Item Images' className="w-40 rounded-lg aspect-[10/7] object-contain border-[1px]" />
                                                                    {contextData.newOrderData.length > 1 &&
                                                                        <>
                                                                            <small className='relative pt-[30%] md:pt-[25%] inline-block h-full' >
                                                                                <span >
                                                                                    + {contextData.newOrderData.length - 1}
                                                                                </span>
                                                                            </small>
                                                                        </>
                                                                    }
                                                                </div>
                                                            </div>
                                                        }

                                                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                                            <NavLink
                                                                to="/"
                                                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                onClick={() => {
                                                                    contextData.setNewOrderData([])
                                                                    contextData.orderNotPlaced()
                                                                }}
                                                            >
                                                                Continue Shopping
                                                            </NavLink>
                                                            <Link
                                                                to="/cart"
                                                                className="text-sm font-semibold text-gray-900 dark:text-white"
                                                                onClick={() => {
                                                                    contextData.setNewOrderData([])
                                                                    contextData.rendomcode()
                                                                }}
                                                            >
                                                                Order Again
                                                                <span aria-hidden="true">&rarr;</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </main>
                                            </>
                                        )}

                                    </>
                                )}

                            </>
                        )}
                    </>
                )}
            </>
        </div>
    )
}

export default CheckOut
