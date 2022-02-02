import React from "react";
import NewPerson from "./NewPerson";

class NameSelector extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            textAreaText: "",
            personList: [], 
        }

        this.handlePersonAdd = this.handlePersonAdd.bind(this); 
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.removePerson = this.removePerson.bind(this);
    }

    /**
     * This function will fire when the user clicks on the "+" button
     * The value of the text area will be taken and added to the personList of the this.state
     */
    handlePersonAdd(){

        let name = this.state.textAreaText;

        if(this.state.personList.includes(name.toUpperCase())){
            alert("Person to add already exist.");
        } else {
            this.setState((state)=>{
                return{ 
                    textAreaText: "", 
                    data: state.personList.push(name.toUpperCase()) 
                };
            })
            this.props.updatePersonList(this.state.personList);
        }
    }

    handleTextAreaChange(ev) { this.setState(
        {textAreaText: ev.target.value}
    )}

    removePerson(personName){
        this.setState(
          function(state) {
            let originalPersonList = state.personList;
            let filtered = originalPersonList.filter(function(name){
                return name !== personName;
            })
            return(
                {personList: filtered}
            )
          }
        )
        this.props.updatePersonList(this.state.personList);
    }

    render(){
        return(
            <div className = "NameSelector">
                <textarea onChange = {this.handleTextAreaChange} value = {this.state.textAreaText}></textarea>
                <button onClick = {this.handlePersonAdd}>+</button>
                {
                    this.state.personList.map((personName) => {
                        return(
                            <NewPerson newPersonName = {personName} removeThis = {this.removePerson}></NewPerson>
                        )
                    })
                }
            </div>
        )
    }

}

export default NameSelector; 