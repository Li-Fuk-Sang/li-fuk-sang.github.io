import React from "react";
import NameSelector from "./NameSelector";

class InputArea extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "MainTextAreaDiv">
                <textarea className = "MainTextArea" value = {this.props.textAreaTextEntry} onChange = {this.props.handleTextAreaChange}></textarea>
                    <NameSelector updatePersonList = {this.props.updatePersonList}/>
                <button className = "SubmitButton" onClick = {this.props.handleSubmit}>Submit</button>
            </div>
        )
    } 

}

export default InputArea; 