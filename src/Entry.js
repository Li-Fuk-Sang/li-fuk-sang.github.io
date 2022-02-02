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
        console.log("Key is: " +  this.props.numKey);
        this.props.removePersonUsed(this.props.numKey, personName);
    }

    addUser(personName){
        this.props.addPersonUsed(this.props.numKey, personName);
    }

    /**
     * MODIFY DEFAULT BEHAVIOR HERE
     */
    componentDidMount(){
        this.removeUser("Kin"); 
        this.removeUser("Stardust");
        this.removeUser("Arnold");
    }

    render(){
        let remain = this.props.validPersonList.slice(); 
        return(
            <div className = "TransactionEntry" owner = {this.state.personPaid}>
                <div className = "UpperBox">
                    <div className = "TitleAndOwner">
                        <div className = "EntryName">Item {this.props.entryNum}: <a>{this.state.transactionName}</a></div>
                        <div className = "OwnedBy">Paid By: <a>{this.state.personPaid}</a></div>
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
                        <div className = "Amount">$<a>{this.state.amount}</a>  </div>
                        <button onClick = {this.handleRemove}>X</button>
                </div>
               
            </div>
        )
    }
}

export default Entry;