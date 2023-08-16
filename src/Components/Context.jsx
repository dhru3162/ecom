import React, { Component } from "react";
import { toast } from "react-toastify";
export const Datacontext = React.createContext()
export class Dataprovider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            total: 0,
            count: 1
        }
    }

    addToCart = (data) => {
        const check = this.state.cart.every(item => {
            return item.id !== data.id
        })
        if (check) {
            this.setState({ cart: [...this.state.cart, data] })
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
            });
        }
    }

    gettotal = () => {
        const { cart } = this.state
        const res = cart.reduce((item) => {
            return parseInt(item.price);
        }, 0)
        this.setState({ total: res })
    }


    render() {
        const { cart } = this.state
        const { addToCart } = this
        return (
            <Datacontext.Provider value={{ addToCart, cart }}>
                {this.props.children}
            </Datacontext.Provider>
        )
    }
}