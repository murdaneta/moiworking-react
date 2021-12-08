import React, {Component} from 'react';

export default class Footer extends Component {
    render () {
		//let class_cont= "layout-main px-3 h-100"
		return (
            <div class="px-3 pt-3" style={{background:'#ffa500'}}>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <ul class="list-group list-group-flush text-left">
                            <li class="list-group-item bg-transparent"><span class="font-weight-bold text-black">HOLA!</span></li>
                            <li class="list-group-item bg-transparent">
                                <p class="h4">
                                    Cuéntame que proyecto tienes en mente y te diré en que puedo ayudarte, no dudes en contactarme para cualquier duda que tengas.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4">
                        <ul class="list-group list-group-flush text-left">
                            <li class="list-group-item bg-transparent"><span class="font-weight-bold text-black">SERVICIOS</span></li>
                            <li class="list-group-item bg-transparent">DevOps</li>
                            <li class="list-group-item bg-transparent">Developer Front-End</li>
                            <li class="list-group-item bg-transparent">Developer Back-End</li>
                            <li class="list-group-item bg-transparent">DBA SQL</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <ul class="list-group list-group-flush text-left">
                            <li class="list-group-item bg-transparent"><span class="font-weight-bold text-black">CONTACTO</span></li>
                            <li class="list-group-item bg-transparent">
                                <a href="mailto:moiworkinggood@gmail.com?Subject=Desde%20Web%20" target="_blank" className="text-black">
                                    moiworkinggood@gmail.com
                                </a>
                            </li>
                            <li class="list-group-item bg-transparent">
                                <a href="https://wa.me/+56972475290" target="_blank" className="text-black">
                                    +56 972475290
                                </a>
                            </li>
                        </ul>
                    </div>
                     <div class="col-12 text-center py-3">
                        © 2019 
                        <br/>
                        Porwered By Moises Urdaneta
                    </div>
                </div>
            </div>
		)
	}
}