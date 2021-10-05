import React from "react";
import Record from "./Record";
import Total from "./Total";

class IndividualTransaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name: this.props.personName,
            Records: this.props.records,
            /**
             * {
              transactionName: data.transactionName,
              amount: data.amount,
              type: "Paid For"
                }
             */
            Total: 0,
        }
        //this.deltaTotal = this.deltaTotal.bind(this);
        this.getListOfRecords = this.getListOfRecords.bind(this);
        this.getTotal = this.getTotal.bind(this);
    }

    // deltaTotal(delta){
    //     this.setState((state)=>{
    //         return({Total: state.Total += delta});
    //     })
    // }

    getListOfRecords(){
        let listRecord = this.props.records.map((record) => {
            return(
                <Record record={record}></Record>//MORE TO DO HERE
            )
        })
        return listRecord;
    }

    /**
     * Return the amount a person owns/owes depending on what passed on this.props.record
     * @returns the total amount a person owns / owes
     */
    getTotal(){
        let totalCount = 0; 
        this.props.records.map((record) => {
            //Might be redundent
            if (typeof(record.amount) !== 'number'){
                alert("ERROR: IndividiualTransaction.js getTotal(): record.amount is not a number");
                return false; 
            }
            totalCount += record.amount;
        })
        return totalCount;
    }

    render(){
        return(
            <div className = "IndividualTransaction">
                <div className = "PersonName">{this.state.Name}</div>
                <div className = "Records">{this.getListOfRecords()}</div>
                <Total total = {Math.round(this.getTotal()*100)/100} />
            </div>
        )
    }

    
}

export default IndividualTransaction;