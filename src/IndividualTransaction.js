import React from "react";
import Record from "./Record";

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
        this.deltaTotal = this.deltaTotal.bind(this);
    }

    deltaTotal(delta){
        this.setState((state)=>{
            return({Total: state.Total += delta});
        })
    }

    getListOfRecords(){
        let listRecord = this.state.Records.map((record) => {
            return(
                <Record record={record} deltaTotal={this.deltaTotal}></Record>//MORE TO DO HERE
            )
        })
        return listRecord;
    }

    render(){
        return(
            <div className = "IndividualTransaction">
                <div className = "PersonName">{this.state.Name}</div>
                <div className = "Records">{this.getListOfRecords()}</div>
                <div className = "Total">Total: {this.state.Total}</div>
            </div>
        )
    }

    
}

export default IndividualTransaction;