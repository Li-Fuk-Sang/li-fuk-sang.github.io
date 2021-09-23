import React from 'react';
import './App.css';
import Entry from './Entry';


class App extends React.Component{

  constructor(props){
    super(props);
    this.keyCount = 0; 
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
          owner: "Stardust",
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
      ]
    }

    //Adding unique keys to the objects

    this.getListFromData = this.getListFromData.bind(this);
    this.removeData = this.removeData.bind(this); 
  }

  getListFromData(data){
    let list = this.state.data.map((data)=>{
      this.keyCount++;
      return(<Entry name = {data.name} amount = {data.amount} owner = {data.owner} user = {data.user} key = {data.key} numKey = {data.key} removeData = {this.removeData}/>)
    })
    return list; 
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
      <div>
        {this.getListFromData(this.data)}
      </div>  
    )
  }
}

export default App;
