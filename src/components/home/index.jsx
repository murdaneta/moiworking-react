import React, {Component} from 'react';
import Banner from "./banner.jsx";
import SecctionPhp from "./secction-php.jsx";
import SecctionDb from "./secction-db.jsx";
import SecctionJs from "./secction-js.jsx";
import { imgs } from "../../assets";
import { Parallax } from 'react-scroll-parallax';

export default class Home extends Component {
    render () {
		return (
            <>
                <Banner />
                <div className="container-fluid">
                    <div className="row justify-content-md-left align-items-center h-95vh position-relative">
                        <div className="col-md-7 pt-5">
                            <h1 className="mb-4">
                                <span className="bg-black px-4 py-0 text-white">Sobre mí</span>
                            </h1>
                            <p>
                                Me gusta darle vida a una buena idea, 
                                conocer sobre nuevas tecnologías y el debatir 
                                sobre cualquier tema, también me llama la atención 
                                el diseño y como conceptualiza la forma de interactuar 
                                de manera fácil con cosas que pueden ser muy complejas.
                                <br />
                                ¡Ah! me encanta las películas y los juegos online.
                                ¡Ah! me encanta las películas y los juegos online.
                            </p>
                        </div>
                        <img className="img-fluid astronaut-png" src={imgs.astronutPng} />
                    </div>
                    <SecctionPhp />
                    <SecctionDb />
                    <SecctionJs />
                </div>
            </>
		);
	}
}