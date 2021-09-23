import React from "react";

class Nametag extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="NameTag">{this.props.PersonName}</div>
        )
    }
}

export default Nametag; 