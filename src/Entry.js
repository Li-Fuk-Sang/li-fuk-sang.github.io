import React from "react";

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transactionName: props.transactionName,     //Done
            amount: props.amount,                       //Done
            personPaid: props.personPaid,               //Done
            personUsed: props.user,      
        }
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        // alert(this.state.entryName); 
        this.props.removeData(this.props.numKey);
    }

    render(){
        return(
            <div className = "Entry" owner = {this.state.personPaid}>
                <div className = "EntryName">Item: {this.state.transactionName}</div>
                <div className = "PersonUsed">Users: {this.state.personUsed}</div>
                <div className = "Amount">Amount: ${this.state.amount}</div>
                <div className = "Owned By">Who Paid? {this.state.personPaid}</div>
                <button onClick = {this.handleRemove}>X</button>
            </div>
        )
    }
}

export default Entry;