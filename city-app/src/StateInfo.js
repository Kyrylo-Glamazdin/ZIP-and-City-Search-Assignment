
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './StateInfo.css'

class StateInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
        stateNames: props.stateNames
        }
    }
    
    render(){
        return <div className="state-container">
        {this.props.stateNames.map( st => (
                                      <div key={st} className="state-element">
                                      {st}
                                      </div>
                                      ))}
        </div>
    }
};

StateInfo.propTypes = {
    stateNames: PropTypes.array
};

export default StateInfo
