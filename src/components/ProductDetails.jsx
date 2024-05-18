import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

	let { id } = useParams();

	const [product, setProduct] = useState({
		"id": "aa94",
		"brand": "Adidas",
		"name": "Mens Shirt",
		"price": 599,
		"mrp": 699,
		"size": "XL",
		"color": "Yellow",
		"image": "",
	});

	function loadData() {
		axios.get("http://localhost:3000/products/" + id)
			.then((res) => {
				console.log(res.data);
				setProduct(res.data)
			})
	};


	useEffect(() => {
		loadData()
	}, []);


	return (
		<div>
			<section style={{ backgroundColor: "#eee" }}>
				<div class="container py-5">
					<div class="row justify-content-center">
						<div class="col-md-8 col-lg-6 col-xl-4">
							<div class="card text-black">
								<i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
								<img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
									class="card-img-top" alt="Apple Computer" />
								<div class="card-body">
									<div class="text-center">
										<h5 class="card-title">{product.brand}</h5>
										<p class="text-muted mb-4">{product.name}</p>
									</div>
									<div>
										<div class="d-flex justify-content-between">
											<span>Price</span><span>{product.price}</span>
										</div>
										<div class="d-flex justify-content-between">
											<span>MRP</span><span><del>{product.mrp}</del></span>
										</div>
										<div class="d-flex justify-content-between">
											<span>Discount</span><span>10%</span>
										</div>
										<div class="d-flex justify-content-between">
											<span>You Saved</span><span>{product.price / 100 * 10}</span>
										</div>
									</div>
									<div class="d-flex justify-content-between total font-weight-bold mt-4">
										<span>Total</span><span>{product.price - product.price / 100 * 10}</span>
									</div>
									<div class="input-group mb-4">
										<span class="input-group-btn">
											<button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
												<i class="icon-minus2"></i>
											</button>
										</span>
									</div>
									<div className="div">
										<button className='btn btn-success'>Add to Cart</button>
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
