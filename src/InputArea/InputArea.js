import React from "react";
import NameSelector from "./NameSelector";

class InputArea extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "MainTextAreaDiv">
                <NameSelector updatePersonList = {this.props.updatePersonList} isIgnore = {false}/>    
                <NameSelector updatePersonList = {this.props.updateIgnorePerson} isIgnore = {true}/>   
                <div className="main-text-area">
                    <div className = "main-text-area-prompt">
                        Copy and Paste transcation record here: 
                    </div>
                    <textarea className = "MainTextArea" value = {this.props.textAreaTextEntry} onChange = {this.props.handleTextAreaChange}></textarea>
                </div>
                <button className = "SubmitButton ledger-button" onClick = {this.props.handleSubmit}>Submit</button>
            </div>
        )
    } 

}

export default InputArea; 