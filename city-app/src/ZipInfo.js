import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ZipInfo.css'

class ZipInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			zipCodes: props.zips
		}
	}
	
	render(){
		return <div className="info-container">
			{this.props.zips.map( zip => (
                        <div key={zip} className="info-element">
                    {zip}
                </div>
                ))}
		</div>
	}
};

ZipInfo.propTypes = {
	zipCodes: PropTypes.array
};

export default ZipInfo
