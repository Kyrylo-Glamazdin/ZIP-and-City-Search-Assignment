import React from "react"
import "./Info.css"

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return(
			<div className="info-container">
				{this.props.zips.map(zip => (
					<div className="info-element">{zip}</div>
				))}
			</div>
		)
	}
}

export default Info;