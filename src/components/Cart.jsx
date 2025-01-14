import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, incrementQuantity, decrementQuantity } from '../state/cartSlice'
import Checkout from './Checkout'
import { Link } from 'react-router-dom'

export default function Cart() {

    const dispatch = useDispatch()
    var allTotal = 0

    const cartProducts = useSelector((state) => state.cart);

    return (
        <div>
            <section class="h-100 gradient-custom">
                <div class="container py-5">
                    <div class="row d-flex justify-content-center my-4">
                        <div className="row">

                            <div className="col-lg-8">
                                <div class="card mb-4">
                                    <div class="card-header py-3">
                                        <h5 class="mb-0">Cart - 2 items</h5>
                                    </div>
                                    <div class="card-body">
                                        {/* <!-- Single item --> */}
                                        {
                                            cartProducts.map((product) => {

                                                allTotal += product.price * product.quantity
                                                return (
                                                    <div class="row">
                                                        <hr />
                                                        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                            {/* <!-- Image --> */}
                                                            <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                                                                    class="w-100" alt="Blue Jeans Jacket" />
                                                                <a href="#!">
                                                                    <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                                </a>
                                                            </div>
                                                            {/* <!-- Image --> */}
                                                        </div>

                                                        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                            {/* <!-- Data --> */}
                                                            <p><strong>{product.brand}</strong>  <strong>{product.name}</strong></p>
                                                            <p></p>
                                                            <p>Color: {product.color}</p>
                                                            <p>Size: {product.size}</p>
                                                            <button onClick={() => dispatch(removeProduct(product.id))} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                                                                title="Remove item">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                            {/* <!-- Data --> */}
                                                        </div>

                                                        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                            {/* <!-- Quantity --> */}
                                                            <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                                <button onClick={() => dispatch(decrementQuantity(product.id))} data-mdb-button-init data-mdb-ripple-init class="btn btn-primary px-3 me-2"
                                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i class="fas fa-minus"></i>
                                                                </button>

                                                                <div data-mdb-input-init class="form-outline">
                                                                    <input value={product.quantity} id="form1" min="0" name="quantity" type="number" class="form-control" />
                                                                    <label class="form-label" for="form1">Quantity</label>
                                                                </div>

                                                                <button onClick={() => dispatch(incrementQuantity(product.id))} data-mdb-button-init data-mdb-ripple-init class="btn btn-primary px-3 ms-2"
                                                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i class="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            {/* <!-- Quantity --> */}

                                                            {/* <!-- Price --> */}
                                                            <p class="text-start text-md-center">
                                                                <strong>₹ {product.price * product.quantity}/-</strong>
                                                            </p>
                                                            {/* <!-- Price --> */}
                                                        </div>
                                                        <hr />
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <!-- Single item --> */}

                                        <hr class="my-4" />


                                    </div>
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            <p><strong>Expected shipping delivery</strong></p>
                                            <p class="mb-0">12.10.2020 - 14.10.2020</p>
                                        </div>
                                    </div>
                                    {/* <div class="card mb-4 mb-lg-0">
                                        <div class="card-body">
                                            <p><strong>We accept</strong></p>
                                            <img class="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                                alt="Visa" />
                                            <img class="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                                alt="American Express" />
                                            <img class="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                                alt="Mastercard" />
                                            <img class="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                                                alt="PayPal acceptance mark" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div class="col-md-8">
                                    <div class="card mb-4">
                                        <div class="card-header py-3">
                                            <h5 class="mb-0">Summary</h5>
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                    Products
                                                    <span>₹ {allTotal} /-</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                                    Discount %
                                                    <span>500 /- </span>
                                                </li>
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                    <div>
                                                        <strong>Total amount</strong>

                                                    </div>
                                                    <span><strong>{allTotal - 500}</strong></span>
                                                </li>
                                            </ul>

                                            <Link to={"/checkout"}>
                                                <button onClick={() => {
                                                    localStorage.setItem("allTotal", allTotal)
                                                }} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block">
                                                    Go to checkout
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
