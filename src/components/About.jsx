import React from 'react'
import truck from '../assets/images/truck.svg'
import bag from '../assets/images/bag.svg'
import support from '../assets/images/support.svg'
import back from '../assets/images/back.svg'
import about from '../assets/images/about.jpg'




export default function About() {
    return (
        <div class="why-choose-section">
			<div class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-6">
						<h2 class="section-title">Why Choose Us</h2>
						<p>"Choose us for unparalleled quality, unique styles, and exceptional customer service in every shopping experience."</p>

						<div class="row my-5">
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={truck} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Enjoy fast and free shipping on all orders, ensuring you receive your stylish finds quickly and at no extra cost.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={bag} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Experience effortless shopping with our user-friendly website and seamless checkout process..</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={support} alt="Image" class="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Benefit from our 24/7 support, always available to assist you with any questions or concerns..</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={back} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Shop with confidence knowing we offer hassle-free returns for a seamless shopping experience.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src={about} alt="Image" class="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
    )
}
