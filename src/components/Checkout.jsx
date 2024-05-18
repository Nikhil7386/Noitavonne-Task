import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default function Checkout() {

    const [total, setTotal] = useState("")

    useEffect(() => {
        var totlaPrice = localStorage.getItem("allTotal");
        setTotal(totlaPrice)
    }, []);

    return (
        <div className='container'>
            <div class="container" />
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src={require("../assets/images/brand.png")} alt="" width="72" height="72" />
                <h2>Checkout form</h2>
            </div>

            <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0">Product Price</h6><br />
                                <small class="text-muted"> </small>
                            </div>
                            <span class="text-muted">₹ {total}/-</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0">Discount</h6><br />
                                <small class="text-muted"></small>
                            </div>
                            <span class="text-muted">₹ 500/-</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (INR)</span>
                            <strong>₹ {total - 500} /-</strong>
                        </li>
                    </ul>


                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" novalidate />
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">Email <span class="text-muted">(Optional)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                    </div>

                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="country">Country</label>
                            <select class="form-control custom-select d-block w-100" id="country" required>
                                <option value="">Choose...</option>
                                <option>India</option>
                                <option>United States</option>
                                <option>Dubai</option>
                                <option>London</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="state">State</label>
                            <select class="form-control custom-select d-block w-100" id="state" required>
                                <option value="">Choose...</option>
                                <option>Maharashtra</option>
                                <option>Uttar Pradesh</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Goa</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="zip">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required />
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4" />


                    <Link to={"/"}>
                        <button onClick={(e) => swal("Good job!", "You're Order Placed Successfully!", "success")} class="btn btn-primary btn-lg btn-block" type="submit">Proceed to checkout</button>
                    </Link>

                </div>
            </div>


        </div>

    )
}
