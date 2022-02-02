import React from 'react';

class NewPerson extends React.Component{

    constructor(props){
        super(props);
        this.removeThis = this.removeThis.bind(this);
    }

    removeThis(ev){
        this.props.removeThis(this.props.newPersonName);
    }

    render(){
        return(
            <div className = "newPerson">
                <div>{this.props.newPersonName}</div>
                <button onClick = {this.removeThis}>X</button>
            </div>
        )
    }
}

export default NewPerson; 