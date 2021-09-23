import React from 'react';
import './App.css';
import Entry from './Entry';
import PersonalTranscation from './PersonalTranscation';

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
      data: [
        {
          name: "Apple",
          amount: 12,
          owner: "Fox",
          user: ["Tommy", "Rex", "Jacky"],
          key: 1,
        },
        {
          name: "Taxi",
          amount: 31.2,
          owner: "Tommy",
          user: ["Tommy", "Rex"],
          key: 2,
        },
        {
          name: "Cleaner",
          amount: 21,
          owner: "Rex",
          user: ["Fox", "Rex"],
          key: 3,
        },
        {
          name: "Water Bill",
          amount: 219.4,
          owner: "Fox",
          user: ["Stardust", "Rex"],
          key: 4,
        },
      ],
      finaStatement: [],
    }

    //Adding unique keys to the objects

    this.getListFromData = this.getListFromData.bind(this);
    this.removeData = this.removeData.bind(this); 
    this.test = this.test.bind(this);
    this.updateFinaStatement = this.updateFinaStatement.bind(this);

    this.test(); 
  }

  test(){
    let testPerson = new Person(this.state.data, "Rex");
    testPerson.debug();
  }

  getListFromData(data){
    let list = this.state.data.map((data)=>{
      this.keyCount++;
      return(<Entry name = {data.name} amount = {data.amount} owner = {data.owner} user = {data.user} key = {data.key} numKey = {data.key} removeData = {this.removeData}/>)
    })
    return list; 
  }

  updateFinaStatement(){
    let list = this.personList.map((name)=>{
      return(<PersonalTranscation personObj = {new Person(this.state.data, name)} />); 
    })
    this.setState({finaStatement: list}); 
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
