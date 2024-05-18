import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import cardImg from '../assets/images/p8.png'
import { useDispatch } from 'react-redux'
import {addToCart} from '../state/cartSlice'


export default function Product() {
    const dispatch = useDispatch()

    const [productData, setProductData] = useState([]);

    function loadData() {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                // console.log(res.data);
                setProductData(res.data)
            })
    };

    function addProductToCart(product) {
        // console.log(product);
        const cartProduct = {
            "id": product.id,
            "brand": product.brand,
            "name": product.name,
            "price": product.price,
            "mrp": product.mrp,
            "size": product.size,
            "color": product.color,
            "image": product.image,
            "quantity": 1
        }

        dispatch(addToCart(cartProduct))
    };

    useEffect(() => {
        loadData()
    }, []);
    console.log("productData",productData);

    return (
        <div>
            <h1>Product</h1>
            <div className="container">
                <div className="row">
                    {
                        productData.map((product) => {
                            console.log(product);
                            return (
                                <div className="col-lg-3">
                                    <div className="card" style={{ width: "18rem" }}>
                                        {/* <img src={require(`${product.image}`)} className="card-img-top" alt="..." /> */}
                                        <Link to={"/productdetails/" + product.id}>
                                            {/* <img src={cardImg} className="card-img-top" alt="..." /> */}
                                            <img src={product.image} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.brand}</h5>
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h3>₹{product.price}/-</h3>
                                            <h5><del>₹{product.mrp}/-</del></h5>
                                            <a className="btn btn-primary" onClick={() => addProductToCart(product)}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
