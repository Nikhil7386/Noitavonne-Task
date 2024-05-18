import React from 'react'
import carousel1 from '../assets/images/C1.jpg'
import carousel2 from '../assets/images/C2.jpg'
import carousel3 from '../assets/images/C3.jpg'

export default function Home() {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carousel1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carousel2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carousel3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
