import React from "react";
import Addtag from "./Addtag";
import Nametag from "./Nametag";

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transactionName: props.data.transactionName,     //Done
            amount: props.data.amount,                       //Done
            personPaid: props.data.personPaid,               //Done
            personUsed: props.data.personsUsedItem,      
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleRemove() {
        // alert(this.state.entryName); 
        this.props.removeData(this.props.numKey);
    }

    removeUser(personName){
        this.props.removePersonUsed(this.props.numKey, personName);
    }

    addUser(personName){
        this.props.addPersonUsed(this.props.numKey, personName);
    }

    /**
     * MODIFY DEFAULT BEHAVIOR HERE
     * The function removes a person from the entry on load
     * Used when a person should be ignored from all entry
     */
    componentDidMount(){
        //REFACTOR: Put this function in ParseString for better performance
        for(let person of this.props.ignorePerson){
            this.removeUser(person); 
        }
    }

    render(){
        let remain = this.props.validPersonList.slice(); 
        return(
            <div className = "transaction-entry" owner = {this.state.personPaid}>
                <div className = "UpperBox">
                    <div className = "TitleAndOwner">
                        <div className = "EntryName">Item {this.props.entryNum}: <span>{this.state.transactionName}</span></div>
                        <div className = "OwnedBy">Paid By: <span>{this.state.personPaid}</span></div>
                    </div>
                    <div className = "PersonUsed">
                    {
                        this.props.data.personsUsedItem.map((user)=>{
                            remain = remain.filter(name => name !== user); 
                            return (
                                <Nametag personName = {user} remove = {this.removeUser}/>
                            )
                        })
                    }
                    {
                        remain.map((user)=>{
                            return (
                                <Addtag personName = {user} add = {this.addUser} />
                            )
                        })
                    }
                    </div>

                </div>
                
                
                <div className = "AmountAndDelete">
                        <div className = "Amount">$<span>{this.state.amount}</span>  </div>
                        <button onClick = {this.handleRemove}>X</button>
                </div>
               
            </div>
        )
    }
}

export default Entry;