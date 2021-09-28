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
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.deltaTotal(this.props.record.amount);
        console.log(this.props.record.transactionName + " Updated Balance of " + this.props.record.amount);
    }

    componentWillUnmount(){
        this.props.deltaTotal(-this.props.record.amount);
        console.log(this.props.record.transactionName + " Updated Balance of " + (-this.props.record.amount));
    }
    
    render(){
        return(
            <div className = {"Record " + this.props.record.type}>
                <p className = "StatementTransactionName">{this.props.record.transactionName}</p>
                <p className = "StatementAmount">{this.props.record.amount}</p>
                <button className = "Statement Cross">X</button>
            </div>
        )
    }
    
}

export default Record; 