import React from "react";

class Nametag extends React.Component{
    constructor(props){
        super(props);
        
        this.removeThis = this.removeThis.bind(this);
    }

    removeThis(){
        this.props.remove(this.props.personName);
    }

    render(){
        return(
            <div className="name-tag">
                <div className = "name-tag-name">
                    {this.props.personName}
                </div>
                <button className = "name-tag-remove-button" onClick = {this.removeThis}>X</button>
            </div>
        )
    }
}

export default Nametag; 