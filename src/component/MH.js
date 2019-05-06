import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Box extends Component{
	render() {
		return(
			
			<div className="box">
				<img src={this.props.img} className="" alt="" />
				<center><Link to={this.props.link}><h3>{this.props.name}</h3></Link></center>
				<p>{this.props.des}</p>
				<p>{this.props.tel}</p>
				<p>{this.props.mail}</p>
				
			</div>
			
		
            
		);
	}
}

export default Box;