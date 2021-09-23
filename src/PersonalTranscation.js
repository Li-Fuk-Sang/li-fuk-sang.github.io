import React from "react";

class PersonalTranscation extends React.Component{
    constructor(props){
        super(props); 
    }

    render(){
        let transactionList = this.props.personObj.finaStatement.map((transaction) => {
            return(
                <div>
                    <p>Transaction: {transaction.transactionName}</p>
                    <p>Amount: ${transaction.amount}</p>
                </div>
                
            )
        })
        return(
            <div className = "PersonalTransactionRecord">
                <div>Name: {this.props.personObj.name}</div>
                <div>Balance: {this.props.personObj.balance}</div>
                <div>{transactionList}</div>
            </div>
        )
    }
}

export default PersonalTranscation;