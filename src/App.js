import React from 'react';
import './App.css';
import './NameTag.css';
import './Individual.css';
import './AppHeader.css';
import './InputArea/InputArea.css';
import Entry from './Entry';
import PersonalTranscations from './PersonalTranscation';
import * as Parse from "./ParseString"; 
import InputArea from './InputArea/InputArea';
import Title from './AppTitle';

class App extends React.Component{

  constructor(props){
    super(props);
    this.keyCount = 0;  //Redun?
    this.personList = ["Fox", "Tommy", "Rex"];
    this.state = {
      personList : [],     //PersonList is created by Update Person List
      data: [],
      finaStatement: [],    //?
      textEntry: "",
    }

    //Adding unique keys to the objects
    this.updatePersonList = this.updatePersonList.bind(this); 
    this.getListFromData = this.getEntriesFromParseString.bind(this);
    this.removeData = this.removeData.bind(this); 
    this.updateFinaStatement = this.updateFinaStatement.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fromTransactionsToStatement = this.fromTransactionsToStatement.bind(this);
    this.removePersonUsed = this.removePersonUsed.bind(this);
    this.addPersonUsed = this.addPersonUsed.bind(this); 
    
  }

  handleTextAreaChange(ev) { this.setState(
    {textEntry: ev.target.value}
  )}

  /**
   * Passed down to `handlePersonAdd()` of name selector
   * Updates the person list of app state. 
   * @param {List} newPersonList 
   */
  updatePersonList(newPersonList) {
    console.log(newPersonList);
    this.setState(
      {personList: newPersonList}
    );
  }

  handleSubmit() {
    let temp; 
    temp = Parse.ParseString(this.state.textEntry, this.state.personList); 
    if (temp === false){
      return;
    }
    // for(let entry of temp){
    //   entry.personsUsedItem = this.state.personList;
    // }
    //Parse.ParseString(this.state.textEntry);
    this.setState(
        {data: temp}
    );
    //console.log(temp);
  }

  getEntriesFromParseString(){
    let entryNum = 0; 
    let list = this.state.data.map((data)=>{
      //this.keyCount++;
      entryNum++; 
      return(<Entry data = {data} key = {data.key} validPersonList = {this.state.personList} numKey = {data.key} entryNum = {entryNum} removeData = {this.removeData} removePersonUsed = {this.removePersonUsed} addPersonUsed = {this.addPersonUsed}/>)
    })
    return list; 
  }

  updateFinaStatement(){
    let finaStatements = this.fromTransactionsToStatement();
    console.log(finaStatements)
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
        if(data.personPaid.toUpperCase() === person.toUpperCase()){    //Validity of person to be enforced later
          statement.records.push(
            {
              transactionName: data.transactionName,
              amount: data.amount,
              type: "paidFor",
              sharedWith: undefined,
            }
          )
        }
        if(data.personsUsedItem.includes(person)){
          statement.records.push(
            {
              transactionName: data.transactionName,
              amount: -(data.amount/data.personsUsedItem.length),
              type: "used",
              sharedWith: data.personsUsedItem.length, 
            }
          )
        }
      }

      statementArray.push(statement);
    }
    //console.log(statementArray);
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

  /**
   * Removes a person from the User List of an entry
   * This function modifies the "data" field of the state
   * @param {num} key 
   * @param {String} personName 
   */
  removePersonUsed(key, personName){
    this.setState(
      function(state) {
        let temp = state.data;
        for (let data of temp){
          //Find the Entry to be modified
          if(data.key === key){
            //Located entry to be modified
            //Now find the person to be removed
            for(let i = 0; i < data.personsUsedItem.length; i++){
              if(data.personsUsedItem[i] === personName){
                let tempArr = [];
                for(let j = 0; j < data.personsUsedItem.length; j++){
                  if(j != i){
                    tempArr.push(data.personsUsedItem[j]);
                  }
                }
                data.personsUsedItem = tempArr; 
                return {
                  data: temp
                }; 
              }
            }
          }
        }
      }
    )
  }

  /**
   * Adds a person from the User List of an entry
   * This function modifies the "data" field of the state
   * @param {num} key 
   * @param {String} personName 
   */
  addPersonUsed(key, personName){
    this.setState(
      function(state) {
        let temp = state.data;
        for (let data of temp){
          //Find the Entry to be modified
          if(data.key === key){
            if(data.personsUsedItem.includes(personName)){
            } else {
              data.personsUsedItem.push(personName); 
              break; 
            }
          }
        }
        return {
          data: temp
        }
      }
    )
  }

  // <textarea value = {this.state.textEntry} onChange = {this.handleTextAreaChange}></textarea>
  // <button onClick = {this.handleSubmit}>Submit</button>

  render(){
    return(
      <div className = "app">
        <Title/>
        <InputArea 
          handleTextAreaChange = {this.handleTextAreaChange} 
          handleSubmit = {this.handleSubmit} 
          textAreaTextEntry = {this.state.textEntry}
          updatePersonList = {this.updatePersonList}
          />
        <div className = "TransactionList">
          {this.getEntriesFromParseString(this.data)}
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
