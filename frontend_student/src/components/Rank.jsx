
import React, { Component } from 'react';
import axios from 'axios';
import Post_rank from './Post_rank';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';


export default class Rank extends Component {
  //IMPORTANT README BEFORE WRITING
  //PLEASE MOVE THIS INTO A NEW FILE THIS FILE IS BECOMMING TOO BIG WE ARE ALL GONNA DIE IF ANY MORE CODE IS WRITTEN HERE K THANKS
  //THIS COMPONENT HAS ACCESS TO THE this.props.companies which is a list of companies that the student has selected

  constructor(props) {
    super(props);
    this.state ={
      rank: []
    };
    console.log(this.props.companies);
    this.changeRank = this.changeRank.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  changeRank(index, rank) {
    console.log(this.state.rank);
    let arr  = this.state.rank;
    arr[index] = rank;
    this.setState({
      rank: arr
    }, () => {
      console.log(this.state.arr);
    });
  }
  
  onSubmit() {
    //use axios to send post request to server
    let str = "{";
    const arr = this.state.rank;
    const newArr = [];
    for(let i = 0; i<this.state.rank.length; i++) {
      if(arr[i] == null)
        continue;
      if(newArr[arr[i]-1] != null) {
        //throw error
        console.log('error');
        return;
      }
      else
        newArr[arr[i]-1] = this.props.companies[i]._id;
    }

    for(let i = 0; i<newArr.length; i++) {
      if(newArr[i] == null) {
        console.log('err');
        return;
        //throw error
      }
      str = str+newArr[i] + ",";   
    }
    str = str.substring(0, str.length - 1);
    str = str + "}";

    console.log("str is "+str);
    axios.post('http://localhost:3000/studentPreferences', {
      companies: str
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      //throw error
      console.log(err);
      return;
    })
  }
  render() {

    let mapped = this.props.companies.map((product, index) => {
      return(
        //should display filtered
        <Post_rank Name={product.Name} key={product.Name} Description={product.Description} changeRank={this.changeRank} index={index}/>

      );
    })
    return(
      <div>
         <div className="mui--text-center">Rank the companies</div>
        {mapped}
        <MuiThemeProvider>
          <RaisedButton label="Submit" primary={true} onClick={this.onSubmit}/>
        </MuiThemeProvider> 
      </div>


    );
  }
}

