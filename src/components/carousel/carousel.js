import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';

export default class carousel extends Component {
    render() {
        return (
            <OwlCarousel className="slide-one-item home-slider owl-carousel">

                <div className="site-blocks-cover inner-page overlay hero1"  data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 text-center" data-aos="fade">
                                <h1 className="font-secondary  font-weight-bold text-uppercase">Welcome to Colorlib</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-blocks-cover inner-page overlay hero2"  data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade">
                                <h1 className="font-secondary font-weight-bold text-uppercase">Free Bootstrap 4 Templates</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        )
    }
}
