import React, {Component} from 'react';
import { imgs } from "../../assets";
import Slider from "react-slick";
export default class SecctionPhp extends Component {
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
                        {'<'}Lenguajes{'/>'}
                    </h3>
                    <Slider {...settings} className="img-frameworks">
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.php} alt="" className="m-auto" style={{height:'5rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Frameworks{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.laravel} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.lumen} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.phalcon} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <img src={imgs.yii} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.python} alt="" className="m-auto" style={{height:'5rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Frameworks{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <img src={imgs.django} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.ruby} alt="" className="m-auto" style={{height:'5rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Frameworks{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <img src={imgs.rails} alt="" className="img-fluid m-auto" style={{height:'2rem'}} />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            )
        }
		return (
            <div className="row justify-content-md-end align-items-center">
                <div className="col-md-6 pt-5">
                    <h1 className="mb-4 mt-3">
                        <span className="bg-black px-4 py-0 text-white">Dev. BackEnd</span>
                    </h1>
                    <p>
                        Como desarrollador <strong>BackEnd</strong> me manejo entre el lenguaje
                        php principalmente,conozco un poco de python u de ruby, normalmente siempre
                        uso Frameworks para ser mas productivos en factores de tiempo, me gusta crear un BackEnd
                        escalable y reutilizable, con secciones de codigo que me sirvan para aumentar mi agilidad
                        al momento de crear uno nuevo, Se implementar el <strong>MVC</strong>, crear <strong>API REST</strong>, 
                        Generacion de <strong>EXCEL</strong>, <strong>PDF</strong>, entre otros.
                        Tambien se utilizar servicios de <strong>Correos transaccionales</strong>, <strong>Notificaciones Push</strong>,
                        Gestion de <strong>Llamadas telefonica computarizadas</strong>, envios de <strong>SMS</strong> de manera nacional e internacional
                        <br />
                        <br />
                        - Espero ser ultil como desarrollador BackEnd.
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