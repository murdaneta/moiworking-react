import React, {Component} from 'react';
import Slider from "react-slick";
import { imgs } from "../../assets";

export default class Banner extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="banner container-fiuld">
                <Slider {...settings}>
                    <div className="banner-home">
                        <div className="row align-items-center container-fiuld">
                            <div className="banner-bg"/>
                            <div className="col">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="text-center text-md-right font-9rem">{'<\/>'}</h1>
                                </div>
                                <div className="col-md-6">
                                    <h1 className="text-center text-md-left">
                                        Soy un
                                        <br/>
                                        desarrollador
                                        <br/>
                                        web!
                                    </h1>
                                </div>
                                <div className="col-md-12">
                                    <br/>
                                    <p className="text-center m-auto">
                                        Puedo ayudarte en muchos ámbitos profesionales ya que
                                        <br className="d-none d-md-flex"/>
                                        tengo más de 6 años de experiencia en el mundo del desarrollo web
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-home bg-white p-3 triangle-rt triangle-lb triangle">
                        <div className="row align-items-center">
                            <div className="col text-center mt-3">
                                <p className="text-muted h5">
                                    Puedo brindar mis servicios en
                                    <br/>
                                    <strong className="text-dark h3">
                                        Back-End
                                    </strong>
                                </p>
                                <img src={imgs.horsePng} className="img-fluid m-auto" style={{maxHeight:'30rem',}}/>
                            </div>
                            <div className="col text-center d-none d-md-flex">
                                <p className="text-muted h3 m-auto">
                                    Siempre tengo algo que proponer como
                                    <br/>
                                    <strong className="text-dark h1">
                                        Full-Stack
                                    </strong>
                                </p>
                            </div>
                            <div className="col text-center mt-3">
                                <p className="text-muted h5">
                                    También puedo apoyarte en
                                    <br/>
                                    <strong className="text-dark h3">
                                        Front-End
                                    </strong>
                                </p>
                                <img src={imgs.queenPng} className="img-fluid m-auto" style={{maxHeight:'30rem',}}/>
                            </div>
                             <div className="col-12 text-center d-flex d-md-none mt-negative-15">
                                <p className="text-muted h5 m-auto">
                                    Siempre tengo algo que proponer como
                                    <br/>
                                    <strong className="text-dark h3">
                                        Full-Stack
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-home p-3 bg-white triangle-rb triangle-lt triangle px-5 px-md-3">
                        <div className="row align-items-center d-none d-md-flex">
                            <div className="col-4">
                                <h2 className="text-right text-dark">
                                    <span className="text-muted">
                                        Tengo experiencia en 
                                    </span>
                                    <br/>
                                    Administración y
                                    <br/>
                                    Migración
                                </h2>
                            </div>
                            <div className="col-4 text-center">
                                <h1 className="text-center text-dark">
                                    Base de datos
                                </h1>
                                <img src={imgs.rookPng} className="img-fluid m-auto" style={{height:'30rem',}}/>
                            </div>
                            <div className="col-4">
                                <h2 className="text-left text-dark">
                                    <span className="text-muted">
                                        Puedo crear mediante
                                    </span>
                                    <br/>
                                    Modelado y
                                    <br/>
                                    Análisis 
                                </h2>
                            </div>
                        </div>
                        {/*Moobile*/}
                        <div className="row align-items-center d-md-none">
                            <div className="col-6 px-0">
                                <h3 className="text-center text-dark">
                                    Base de Datos
                                </h3>
                                <p className="text-center text-dark">
                                    <span className="text-muted">
                                        Tengo experiencia en 
                                    </span>
                                    <br/>
                                    Administración
                                </p>
                                <p className="text-center text-dark">
                                    <span className="text-muted">
                                        Puedo organizar sus
                                    </span>
                                    <br/>
                                    Entidades y relaciones
                                </p>
                            </div>
                            <div className="col-6 text-center px-0">
                                <img src={imgs.rookPng} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                     <div className="banner-home bg-white triangle-rt triangle-lb triangle px-5 px-md-3">
                        <div className="row align-items-center container-fiuld d-none d-md-flex">
                            <div className="col-4 text-right">
                                <h1 className="text-black">
                                    Administración de
                                    <br />
                                    Servidores
                                </h1>
                            </div>
                            <div className="col-4 text-center">
                                <img src={imgs.kingPng} className="img-fluid m-auto" style={{height: "37rem"}}/>
                                
                            </div>
                             <div className="col-4 text-left">
                                <p className="h5 text-muted mr-5 pr-5 w-75">
                                    Puedo brindarte mis servicios como administrador servidores
                                    ya que montar cada pieza del servidor es una de las tareas
                                    que mas disfruto en mi profesión.
                                </p>
                            </div>
                            {/*<div className="col-6 bg-black h-100 d-none">
                                <div className="row align-items-center container-fiuld h-100">
                                    <div className="col bg-black text-center">
                                    <p className="m-auto px-5 w-75 h4">
                                        Puedo brindarte mis servicios como administrador servidores
                                        ya que montar cada pieza del servidor es una de las tareas
                                        que mas disfruto en mi profesión.
                                    </p>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        {/*Moobile*/}
                        <div className="row align-items-center container-fiuld d-md-none">
                            <div className="col-6 text-center p-0">
                                <h5 className="text-black">
                                    Administración de
                                    <br />
                                    Servidores
                                </h5>
                                <p className="text-muted small">
                                    Puedo brindarte mis servicios como administrador servidores
                                    ya que montar cada pieza del servidor es una de las tareas
                                    que mas disfruto en mi profesión.
                                </p>
                            </div>
                            <div className="col-6 text-center px-0">
                                <img src={imgs.kingPng} className="img-fluid"/>
                                
                            </div>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        );
    }
}