// matrix.js

import React from 'react';
import Column from './column'

var style = {
	display: "flex",
	justifyContent: "center"
}
export default class Matrix extends React.Component {
	render() {
		return (
			<div className="matrix" style={style}>
				{this.props.model.map( (column, i) => <Column model={column} column={i} updateMatrix={this.props.updateMatrix}/>)}
			</div>
		)
	}
}