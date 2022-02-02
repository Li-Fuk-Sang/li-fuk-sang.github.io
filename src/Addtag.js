import React from "react";

class Addtag extends React.Component{
    constructor(props){
        super(props);
        
        this.addThis = this.addThis.bind(this);
    }

    addThis(){
        this.props.add(this.props.personName);
    }

    render(){
        return(
            <button className="AddTag" onClick = {this.addThis}>
                <div className = "AddTagName">{this.props.personName}</div>
            </button>
        )
    }
}

export default Addtag; 