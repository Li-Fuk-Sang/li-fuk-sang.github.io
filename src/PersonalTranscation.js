import React from "react";
import IndividualTransaction from "./IndividualTransaction";

class PersonalTranscations extends React.Component{
    // constructor(props){
    //     super(props); 
    // }

    // render(){
    //     let transactionList = this.props.personObj.finaStatement.map((transaction) => {
    //         return(
    //             <div>
    //                 <p>Transaction: {transaction.transactionName}</p>
    //                 <p>Amount: ${transaction.amount}</p>
    //             </div>
                
    //         )
    //     })
    //     return(
    //         <div className = "PersonalTransactionRecord">
    //             <div>Name: {this.props.personObj.name}</div>
    //             <div>Balance: {this.props.personObj.balance}</div>
    //             <div>{transactionList}</div>
    //         </div>
    //     )
    // }

    /*
    props: Array of (
        {
        personName: person,
        records: [],
        }
    )
    */
    constructor(props){
        super(props); 
        this.state = {
            statements: this.props.statements,
        }
    }

    render(){
        let statementList = this.props.statements.map((statement)=> {
            return(
            <IndividualTransaction personName = {statement.personName} records = {statement.records}></IndividualTransaction>
            )
        })
        return(statementList);
    }


}

export default PersonalTranscations;