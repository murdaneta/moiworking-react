import React, {Component} from 'react';
import { imgs } from "../../assets";
import Slider from "react-slick";
export default class SecctionDb extends Component {
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
                        {'<'}Motores{'/>'}
                    </h3>
                    <Slider {...settings} className="img-frameworks">
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.mysql} alt="" className="m-auto" style={{height:'5rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Manejadores{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center ">
                                <div className="col-6 col-md-6 mb-3">
                                    <img src={imgs.workbench} alt="" className="img-fluid m-auto" style={{height:'4rem'}} />
                                </div>
                                <div className="col-6 col-md-6 mb-3">
                                    <img src={imgs.phpmyadmin} alt="" className="img-fluid m-auto" style={{height:'4rem'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.postgres} alt="" className="m-auto" style={{height:'5rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Manejadores{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6">
                                    <img src={imgs.pgAdmin} alt="" className="img-fluid m-auto" style={{height:'3rem'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                            <div className="col-12 pb-4">
                                <img src={imgs.mongoDB} alt="" className="m-auto" style={{height:'5rem'}}/>
                                <h5 className="text-white text-center pt-4">
                                    {'<'}Manejadores{'/>'}
                                </h5>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6">
                                    <img src={imgs.roboto3T} alt="" className="img-fluid m-auto" style={{height:'4'}} />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            )
        }
		return (
            <div className="row justify-content-md-end align-items-center">
                <div className="col-md-6 h-95vh bg-black bg-php d-none d-md-flex">
                    <SliderContent />
                </div>
                <div className="col-md-6 py-5">
                    <h1 className="mb-4">
                        <span className="bg-black px-4 py-0 text-white">DBA SQL</span>
                    </h1>
                    <p className="text">
                        Considero que dentro de mis fortaleza secuendarias 
                        esta el manejo de este lenguaje, me centro principalmente 
                        en el gestor de base de datos <strong>Mysql</strong> y también
                        <strong> PostgreSql</strong>, puedo realizar querys complejas 
                        mediante el uso de  <strong> procedimientos almacenados </strong> ,  <strong> funciones</strong> 
                        especificas creadas o nativa del mismo <strong>Mysql</strong> 
                        o <strong>PostgreSql</strong>, también se usar subquerys,  <strong>optimizar
                        cualquier query</strong> que se presente, también puedo realizar test y seguimiento
                        de rendimiento del motor a nivel de  <strong>auditorias en logs</strong>.
                         <strong>Respaldos</strong> ,  <strong>Migraciones</strong> o  <strong>depuración</strong>  de datos mediante querys.
                        <br/>
                        <br/>
                        Tambien manejo de manera basica  <strong>mongoDB</strong>.
                    </p>
                </div>
                <div className="col-md-6 d-md-none d-flex bg-black py-5">
                    <SliderContent />
                </div>
            </div>
		);
	}
}