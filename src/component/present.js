import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
			
			<div className="box">
				
				
				<p>{this.props.des}</p>
			</div>
			
		
            
		);
	}
}

export default Box;