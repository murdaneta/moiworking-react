import React, {Component} from 'react';
import { imgs } from "../../assets";
import Slider from "react-slick";
export default class SecctionJs extends Component {
    render () {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const SliderContent= () => {
            return (
                <div className="container">
                    <h3 className="text-yellow">
                        {'<'}FrontEnd{'/>'}
                    </h3>
                    <Slider {...settings} className="img-frameworks">
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.jsSvgImg} alt="" className="m-auto" style={{height:'6rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Frameworks{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center ">
                                <div className="col-6 col-md-4 mb-3">
                                    <img src={imgs.reactPng} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                                <div className="col-6 col-md-4 mb-3">
                                    <img src={imgs.vuejs} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                                <div className="col-6 col-md-4 mb-3">
                                    <img src={imgs.angular} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.htmlSvgImg} alt="" className="m-auto" style={{height:'6rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Template{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.bootstrapPng} alt="" className="img-fluid m-auto" style={{height:'1.5rem'}} />
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.fundation} alt="" className="img-fluid m-auto" style={{height:'1.5rem'}} />
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.purecss} alt="" className="img-fluid m-auto" style={{height:'1.5rem'}} />
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.materialize} alt="" className="img-fluid m-auto" style={{height:'1.5rem'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.css} alt="" className="m-auto" style={{height:'6rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Manejadores{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-6">
                                    <img src={imgs.sassPng} alt="" className="img-fluid m-auto" style={{height:'3rem'}} />
                                </div>
                                <div className="col-6 col-md-6">
                                    <img src={imgs.lessPng} alt="" className="img-fluid m-auto" style={{height:'3rem'}} />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            )
        }
		return (
            <div className="row justify-content-md-end align-items-center">
                <div className="col-md-6 py-5">
                    <h1 className="mb-4">
                        <span className="bg-black px-4 py-0 text-white">Dev. FrontEnd</span>
                    </h1>
                    <p className="text">
                        Me gusta el desarrollo front-end, especialmente en <strong>react </strong>
                        también conozco otros frameworks como <strong> vuejs</strong>,
                        y <strong> angular</strong>, considero que tengo mucho que aporta en cuanto a
                        UX-UI ya que tengo gran experiencia en simplificar procesos complejos
                        de un sistema usando los componetes ya sea de una plantilla o componentes de librerías
                        útiles que permiten acelerar el desarrollo, considero que puedo
                        crear componentes desde cero con buenas animaciones usando <strong> sass</strong>
                        <strong> js</strong>, cuidando el rendimiento de una pagina web o aplicacion web.

                    </p>
                </div>
                 <div className="col-md-6 d-md-none d-flex bg-black py-5">
                    <SliderContent />
                </div>
                <div className="col-md-6 h-95vh bg-black bg-php d-none d-md-flex">
                    <SliderContent />
                </div>
            </div>
        );
	}
}