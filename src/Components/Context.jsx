import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

const Datacontext = createContext()

const Dataprovider = ({ children }) => {
    const [cart, setcart] = useState([])
    const [totalprice, setTotalPrice] = useState()
    const [change, setchang] = useState(true)
    const [userdata, setuserdata] = useState({})
    const [loading, setloading] = useState(false)
    const [firstloading, setFirstLoading] = useState(true)
    const storeemail = sessionStorage.getItem('email')
    const storemobile = sessionStorage.getItem('mobile')

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
                        setTotalPrice(eval(proprice))
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

    useEffect(() => {
        fatchcartdata()
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


    return (
        <Datacontext.Provider value={{ addToCart, cart, change, setchang, fatchcartdata, removeProduct, loading, increaseQtn, decreaseQtn, totalprice, firstloading }}>
            {children}
        </Datacontext.Provider>
    )

}

export { Dataprovider, Datacontext }
