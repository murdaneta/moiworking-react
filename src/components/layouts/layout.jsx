import React, {Component} from 'react';
import  NavBarTop  from "./nav-bar-top.jsx";
import  Footer  from "./footer.jsx";
export default class Layout extends Component {
    render () {
		//let class_cont= "layout-main px-3 h-100"
		return (
            	<>
			<div className="container-fluid px-0 h-100" id="container-main">
				<NavBarTop/>
				<div className="mt-5 pt-3">
					{this.props.children}
				</div>
			</div>
			<Footer/>
            	</>
		);
	}
}