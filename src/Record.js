import React from "react";

/*
    Record:
    {
        transactionName: data.transactionName,
        amount: data.amount,
        type: "Paid For"
    }
    deltaTotal: deltaTotal()
 */

class Record extends React.Component{

    // componentDidMount(){
    //     this.props.deltaTotal(this.props.record.amount);
    //     //console.log(this.props.record.transactionName + " Updated Balance of " + this.props.record.amount);
    // }

    // componentWillUnmount(){
    //     this.props.deltaTotal(-this.props.record.amount);
    //     //console.log(this.props.record.transactionName + " Updated Balance of " + (-this.props.record.amount));
    // }
    
    render(){
        if(this.props.record.type === "paidFor"){
            return(
                <div className = "Record" transactionsign = "positive">
                    <div className = "RecordNameAndShare">
                        <div className = "RecordTransactionName">{this.props.record.transactionName}</div>
                    </div>
                    <div className = "RecordAmountAndCross">
                        <div className = "RecordAmount">+{Math.round(this.props.record.amount * 100)/100}</div>
                    </div>
                </div>
            )
        }
        //All negative transaction
        else if(this.props.record.sharedWith > 1){
            return(
                <div className = "Record" transactionsign = "negative">
                    <div className = "RecordNameAndShare">
                        <div className = "RecordTransactionName">{this.props.record.transactionName}</div>
                        <div className = "SharedWith">
                            <div>Original: <span>{Math.round(this.props.record.amount*this.props.record.sharedWith)}</span></div>
                            <div>Shared with <span>{this.props.record.sharedWith - 1}</span> other people</div>
                        </div>
                    </div>
                    <div className = "RecordAmountAndCross">
                        <div className = "RecordAmount">{Math.round(this.props.record.amount * 100)/100}</div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className = "Record" transactionsign = "negative">
                    <div className = "RecordNameAndShare">
                        <div className = "RecordTransactionName">{this.props.record.transactionName}</div>
                    </div>
                    <div className = "RecordAmountAndCross">
                        <div className = "RecordAmount">{Math.round(this.props.record.amount * 100)/100}</div>
                    </div>
                </div>
            )
        }
            
        
    }
    
}

export default Record; 