import React from 'react';
import './App.css';
import Entry from './Entry';
import PersonalTranscations from './PersonalTranscation';
import * as Parse from "./ParseString"; 

class Person{
  constructor(data, name){
    this.name = name; 
    this.finaStatement = [];
    this.balance = 0;

    //Initalize person class with given data
    //Calculate balance as well
    this.addArrTransaction(data);
  }

  calculateBalance(){
    this.balance = 0; 
    for(let i = 0; i < this.finaStatement.length; i++){
      if(this.finaStatement[i] === 'A'){
        this.balance += this.finaStatement[i].amount;
      }
      else{
        this.balance -= this.finaStatement[i].amount;
      }
    }
  }

  addArrTransaction(data){
    for(let i = 0; i < data.length; i++){
      if(data[i].owner === this.name){
        this.finaStatement.push({
          transactionName: data[i].name,
          amount: data[i].amount,
          type: "A",
        })
      }
      //Check user 0
      if(data[i].user.includes(this.name)){
        this.finaStatement.push({
          transactionName: data[i].name,
          amount: data[i].amount/data[i].user.length,
          type: "L",
        })
      }
    }
    this.calculateBalance();
  }

  addOneTransaction(data){
    if(data.owner === this.name){
      this.finaStatement.push({
        transactionName: data.name,
        amount: data.amount,
        type: "A",
      })
    }
    //Check user 0
    if(data.user.includes(this.name)){
      this.finaStatement.push({
        transactionName: data.name,
        amount: data.amount/data.user.length,
        type: "L",
      })
    }
  }

  debug(){
    console.log("Name: " + this.name);
    console.log("Balance: " + this.balance);
    console.log("Financial Statement");
    for(let i = 0; i < this.finaStatement.length; i++){
      console.log("==Transaction " + i + "==");
      console.log("Transaction Name: " + this.finaStatement[i].transactionName); 
      console.log("Transaction Amount: " + this.finaStatement[i].amount);
    }
  }

}

class App extends React.Component{

  constructor(props){
    super(props);
    this.keyCount = 0; 
    this.personList = ["Fox", "Tommy", "Rex"];
    this.state = {
      personList : ["Fox", "Tommy", "Rex", "Stardust", "Jacky", "Kin", "Arnold"],     //To be gathered from parse string later
      data: [],
      finaStatement: [],    //?
      textEntry: "",
    }

    //Adding unique keys to the objects

    this.getListFromData = this.getListFromData.bind(this);
    this.removeData = this.removeData.bind(this); 
    this.test = this.test.bind(this);
    this.updateFinaStatement = this.updateFinaStatement.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fromTransactionsToStatement = this.fromTransactionsToStatement.bind(this);

    this.test(); 
  }

  handleTextAreaChange(ev) { this.setState(
    {textEntry: ev.target.value}
  )}

  handleSubmit() {
    let temp; 
    temp = Parse.ParseString(this.state.textEntry); 
    //Parse.ParseString(this.state.textEntry);
    this.setState(
        {data: temp}
    );
    console.log(temp);
  }


  test(){
    let testPerson = new Person(this.state.data, "Rex");
    testPerson.debug();
  }

  //TODO
  getListFromData(){
    let list = this.state.data.map((data)=>{
      this.keyCount++;
      return(<Entry transactionName = {data.transactionName} amount = {data.amount} personPaid = {data.personPaid} user = {"data.user"} key = {data.key} numKey = {data.key} removeData = {this.removeData}/>)
    })
    return list; 
  }

  updateFinaStatement(){
    let finaStatements = this.fromTransactionsToStatement();
    this.setState({finaStatement: <PersonalTranscations statements = {finaStatements}></PersonalTranscations>});
  }

  /**
   * Generate personalized statements from the list of transactions in the state
   * @returns an array of objects representing the transaction record of a person
   */
  fromTransactionsToStatement(){
    // {
    //   transactionName: "",
    //   amount: "",
    //   personPaid: "",
    //   personsUsedItem: [],
    //   key: undefined, 
    // }
    let statementArray = []; 

    for(let person of this.state.personList)
    {
      let statement = {
        personName: person,
        records: [],
      }
      statement.personName = person;    //Strings in personArray
      for(let data of this.state.data){
        if(data.personPaid === person){    //Validity of person to be enforced later
          statement.records.push(
            {
              transactionName: data.transactionName,
              amount: data.amount,
              type: "Paid For"
            }
          )
        }
        if(data.personsUsedItem.includes(person)){
          statement.records.push(
            {
              transactionName: data.transactionName,
              amount: -(data.amount/data.personsUsedItem.length),
              type: "Used"
            }
          )
        }
      }

      statementArray.push(statement);
    }
    console.log(statementArray);
    return statementArray;
  }

  /**
   * Removes an entry from this data list using the unqiue key
   * @param {number} key 
   */
  removeData(key){
    //Probably has better way to do this
    this.setState((state)=>{
      let temp = state.data.filter(item => item.key !== key);
      return{ data: temp };
    })
  }

  render(){
    //console.log(this.state.data);
    return(
      <div className = "app">
        <textarea value = {this.state.textEntry} onChange = {this.handleTextAreaChange}></textarea>
        <button onClick = {this.handleSubmit}>Submit</button>
        <div className = "TransactionList">
          {this.getListFromData(this.data)}
        </div>
        <button onClick = {this.updateFinaStatement}>UPDATE</button>
        <div className = "FinaStatements">
          {this.state.finaStatement}
        </div>
      </div>  
    )
  }
}

export default App;
