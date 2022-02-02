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
     * This function add the name in the name input to both the name selector state and the app state. 
     * This function is triggered every time the + button is added.
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
            }, () => {
                //Updating the outer app state.
                this.props.updatePersonList(this.state.personList);
            })
        }
    }

    handleTextAreaChange(ev) { this.setState(
        {textAreaText: ev.target.value}
    )}

    /**
     * Removes a person by string. 
     * 
     * This function removes a person from the name selector state, as well as the outer app state. 
     * This function is passed down to NewPerson, and triggered when the "X" button is pressed. 
     * @param {string} personName 
     */
    removePerson(personName){
        this.setState(
          function(state) {
            let originalPersonList = state.personList;
            let filtered = originalPersonList.filter(function(name){
                return name !== personName;
            })
            //Updating the outer app state. 
            this.props.updatePersonList(filtered);
            return(
                {personList: filtered}
            )
          }
        )
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