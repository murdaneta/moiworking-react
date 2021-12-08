import React, {Component} from 'react';

export default class View404 extends Component {
    render () {
		//let class_cont= "layout-main px-3 h-100"
		return (
			<div className="container-fluid h-100" id="container-main">
                <div id="page404" className="row align-items-center">
                    <div className="col text-center">
                        <h1>
                            Ups!..
                        </h1>
                        <h3>
                            <strong>404</strong>
                        </h3>
                        Pagina no encontrada...
                    </div>
                </div>
			</div>
		)
	}
}