import React, { Component } from 'react';

class PropComp extends Component{
    render(){
        const {firstName, lastName, Age, hairColor} = this.props;   
        return(
            <div>
                <h1>{lastName}{firstName} </h1>
                {Age}
                {hairColor}
            </div>
        );
    }
}

export default PropComp;