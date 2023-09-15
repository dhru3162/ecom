import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

const Datacontext = createContext()

const Dataprovider = ({ children }) => {
    const [palceorder, setpalceorder] = useState('')
    const [cart, setcart] = useState([])
    const [address, setAddress] = useState([])
    const [card, setCard] = useState([])
    const [upi, setupi] = useState([])
    const [myOrders, setMyOrders] = useState([])
    const [newOrderData, setNewOrderData] = useState([])
    const [totalprice, setTotalPrice] = useState(0)
    const [change, setchang] = useState(true)
    const [userdata, setuserdata] = useState({})
    const [loading, setloading] = useState(false)
    const [firstloading, setFirstLoading] = useState(true)
    const storeemail = sessionStorage.getItem('email')
    const storemobile = sessionStorage.getItem('mobile')

    const rendomcode = () => {
        const characters = "abcdefghiklmnopqrstuvwxyz1234567890"

        //specify the length for the new string
        const lenString = 10;
        var randomstring = '';

        //loop to select a new character in each iteration
        for (var i = 0; i < lenString; i++) {
            var rnum = Math.floor(Math.random() * characters.length);
            randomstring += characters.substring(rnum, rnum + 1);
        }
        setpalceorder(randomstring)
    }

    useEffect(() => {
        fatchcartdata()
        rendomcode()
        // eslint-disable-next-line
    }, [change])

    const fatchcartdata = () => {
        if (storeemail !== null || storemobile !== null) {
            if (storemobile === null) {
                axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${storeemail}`)
                    .then((data) => {
                        setuserdata(data.data[0])
                        if (data.data[0].cart[0] !== null) {
                            setcart(data.data[0].cart)
                            const res = data.data[0].cart.reduce((prev, item) => {
                                return prev + (item.price * item.qtn)
                            }, 0)
                            setTotalPrice(res.toFixed(2))
                        } else {
                            setcart([])
                        }
                        if (data.data[0].address[0] !== null) {
                            setAddress(data.data[0].address)
                        } else {
                            setAddress([])
                        }
                        if (data.data[0].card[0] !== null) {
                            setCard(data.data[0].card)
                        } else {
                            setCard([])
                        }
                        if (data.data[0].upi[0] !== null) {
                            setupi(data.data[0].upi)
                        } else {
                            setupi([])
                        }
                        if (data.data[0].myorders[0] !== null) {
                            setMyOrders(data.data[0].myorders)
                        } else {
                            setMyOrders([])
                        }
                        setFirstLoading(false)
                    })
                    .catch((errd) => {
                        alert(errd.massage)
                        setFirstLoading(false)
                    })
            } else {
                axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?mobile=${storemobile}`)
                    .then((data) => {
                        setuserdata(data.data[0])
                        if (data.data[0].cart[0] !== null) {
                            setcart(data.data[0].cart)
                            const res = data.data[0].cart.reduce((prev, item) => {
                                return prev + (item.price * item.qtn)
                            }, 0)
                            setTotalPrice(res.toFixed(2))
                        } else {
                            setcart([])
                        }
                        if (data.data[0].address[0] !== null) {
                            setAddress(data.data[0].address)
                        } else {
                            setAddress([])
                        }
                        if (data.data[0].card[0] !== null) {
                            setCard(data.data[0].card)
                        } else {
                            setCard([])
                        }
                        if (data.data[0].upi[0] !== null) {
                            setupi(data.data[0].upi)
                        } else {
                            setupi([])
                        }
                        if (data.data[0].myorders[0] !== null) {
                            setMyOrders(data.data[0].myorders)
                        } else {
                            setMyOrders([])
                        }
                        setFirstLoading(false)
                    })
                    .catch((errd) => {
                        alert(errd.massage)
                        setFirstLoading(false)
                    })
            }
        } else {
            setcart([])
            setFirstLoading(false)
        }
    }

    const addToCart = (data) => {
        setloading(true)
        if (storeemail === null && storemobile === null) {
            toast.info('Please Login First', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setloading(false)
        } else {
            const check = cart.every(item => {
                if (item.productid !== data.id) {
                    return true
                } else {
                    return false
                }
            })

            if (check) {
                axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { cart: [...cart, { productid: data.id, title: data.title, price: data.price, image: data.image, qtn: 1 }] }, {
                    headers: { 'content-type': 'application/json' },
                })
                    .then(() => {
                        setcart([...cart, { productid: data.id, title: data.title, price: data.price, image: data.image, qtn: 1 }])
                        toast.success('Product Added Successfully', {
                            position: 'bottom-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light"
                        })
                        const proprice = `${totalprice} + ${data.price}`
                        // eslint-disable-next-line
                        setTotalPrice(eval(proprice).toFixed(2))
                        setloading(false)
                    })
                    .catch(() => {
                        toast.error('Something Went Wrong')
                        setloading(false)
                    })
            } else {
                toast.warn('The product has already added to cart.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                setloading(false)
            }
        }
    }

    const removeProduct = (data) => {
        if (window.confirm("Do you want to delete this product?")) {
            setloading(true)
            const remove = cart.filter((pro) => pro.productid !== data.productid)
            axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { cart: remove }, {
                headers: { 'content-type': 'application/json' },
            })
                .then(() => {
                    setcart(cart.filter((pro) => pro.productid !== data.productid))
                    toast.success('Product removed Successfully', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    const priceqtn = data.price * data.qtn
                    const proprice = `${totalprice} - ${priceqtn}`
                    // eslint-disable-next-line
                    setTotalPrice(eval(proprice).toFixed(2))
                    setloading(false)
                })
                .catch(() => {
                    toast.error('Something Went Wrong')
                    setloading(false)
                })
        }
    }

    const increaseQtn = (data) => {
        setloading(true)
        const cartdata = cart
        const inqtn = cart.findIndex(((obj) => obj.productid === data.productid))
        cartdata[inqtn].qtn = cartdata[inqtn].qtn + 1
        axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { cart: cartdata }, {
            headers: { 'content-type': 'application/json' },
        })
            .then(() => {
                setcart(cartdata)
                totalamount()
                setloading(false)
            })
            .catch(() => {
                toast.error('Something Went Wrong')
                setloading(false)
            })
    }

    const decreaseQtn = (data) => {
        if (data.qtn !== 1) {
            setloading(true)
            const cartdata = cart
            const inqtn = cart.findIndex(((obj) => obj.productid === data.productid))
            cartdata[inqtn].qtn = cartdata[inqtn].qtn - 1
            axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { cart: cartdata }, {
                headers: { 'content-type': 'application/json' },
            })
                .then(() => {
                    setcart(cartdata)
                    totalamount()
                    setloading(false)
                })
                .catch(() => {
                    toast.error('Something Went Wrong')
                    setloading(false)
                })
        }
    }

    const totalamount = () => {
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.qtn)
        }, 0)
        setTotalPrice(res.toFixed(2))
    }

    const orderPlaced = (radiodata, payment, paymentMode, totalp, code) => {
        setloading(true)
        const date = new Date()
        const time = date.toDateString()
        const addNewUpi = () => {
            if (myOrders.length !== 0) {
                const orderid = myOrders.map(data => {
                    return data.orderid
                })
                return (Math.max(...orderid) + 1)
            } else {
                return 1
            }
        }
        const neworderDetails = {
            orderid: addNewUpi(),
            time: time,
            orderItem: cart,
            addressdetails: radiodata,
            paymentdetails: payment,
            paymentmode: paymentMode,
            total: totalp,
            appliedcode: code
        }
        setNewOrderData(cart)
        axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { cart: [], myorders: [...myOrders, neworderDetails] }, {
            headers: { 'content-type': 'application/json' },
        })
            .then(() => {
                setMyOrders([...myOrders, neworderDetails])
                setcart([])
                setTotalPrice(0)
                setloading(false)
            })
            .catch(() => {
                toast.error('Something Went Wrong')
                setNewOrderData([])
                setloading(false)
            })
    }

    const addAddress = (data) => {
        setloading(true)
        axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { address: [...address, data] }, {
            headers: { 'content-type': 'application/json' },
        })
            .then(() => {
                setAddress([...address, data])
                setloading(false)
            })
            .catch(() => {
                toast.error('Something Went Wrong')
                setloading(false)
            })
    }

    const addCard = (data) => {
        setloading(true)
        axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { card: [...card, data] }, {
            headers: { 'content-type': 'application/json' },
        })
            .then(() => {
                setCard([...card, data])
                setloading(false)
            })
            .catch(() => {
                toast.error('Something Went Wrong')
                setloading(false)
            })
    }

    const addUpi = (data) => {
        setloading(true)
        axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { upi: [...upi, data] }, {
            headers: { 'content-type': 'application/json' },
        })
            .then(() => {
                setupi([...upi, data])
                setloading(false)
            })
            .catch(() => {
                toast.error('Something Went Wrong')
                setloading(false)
            })
    }

    const orderNotPlaced = () => {
        setloading(true)
        axios.put(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${userdata.id}`, { cart: [] }, {
            headers: { 'content-type': 'application/json' },
        })
            .then(() => {
                setcart([])
                setloading(false)
            })
            .catch(() => {
                toast.error('Something Went Wrong')
                setloading(false)
            })
        rendomcode()
    }

    return (
        <Datacontext.Provider value={{
            upi,
            cart,
            card,
            change,
            address,
            loading,
            palceorder,
            totalprice,
            newOrderData,
            firstloading,
            addUpi,
            addCard,
            setchang,
            addToCart,
            setloading,
            rendomcode,
            addAddress,
            orderPlaced,
            increaseQtn,
            decreaseQtn,
            fatchcartdata,
            removeProduct,
            orderNotPlaced,
            setNewOrderData
        }}>
            {children}
        </Datacontext.Provider>
    )

}

export { Dataprovider, Datacontext }
