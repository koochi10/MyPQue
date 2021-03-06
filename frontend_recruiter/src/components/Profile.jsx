import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import {indigoA700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Checkbox from 'material-ui/Checkbox';

import '../css/Profile.css';

const style = {
  margin: 12,
};


const styles = {
  block: {
    marginTop: 15,
    maxWidth: 170,
    display: 'inline-block',
   
  },
  checkbox: {
  },
};


const muiTheme = getMuiTheme({
  palette: {
    textColor: indigoA700
,
  },

  });

export default class Profile extends Component {
  render() {
    return (

       <div className = "Profile">
       
     <form action ="/CompanyProfile" method="post">
          <div className="mui--text-center">Company Profile</div>
           
          <div className="mui--text-left">Name</div>
          <Input hint="Company name"/>
          

          <div className="mui--text-left">Description</div>
          <Textarea hint="Company Description" name="description"/>

        <div className="mui--text-left">Required major</div>


        <MuiThemeProvider>
          <div className="Checkbox" style={styles.checkbox}>
            <Checkbox
              name="major" 
              label="Computer Science"
              style={styles.block} />
            <Checkbox 
              major="major"
              label="Computer Engineering"
              style={styles.block} />

            <Checkbox 
              name="major"
              label="Electrical Engineering"
              style={styles.block} />
            </div>
        </MuiThemeProvider>
          

          <div className="mui--text-left">Looking for</div>


        <MuiThemeProvider>
          <div className="Checkbox" style={styles.checkbox}>
            <Checkbox 
              name="lookingFor"
              label="Full-time"
              style={styles.block} />
            <Checkbox 
              name="lookingFor"
              label="Internship"
              style={styles.block} />
            </div>
        </MuiThemeProvider>
      
         <div className="mui--text-left">Hiring</div>
          <MuiThemeProvider>
          <div className="Checkbox" style={styles.checkbox}>
            <Checkbox 
              name = "hiring"
              label="Freshman"
              style={styles.block} />
            <Checkbox 
              name = "hiring"
              label="Sophomore"
              style={styles.block} />
            <Checkbox 
              name = "hiring"
              label="Junior"
              style={styles.block} />
            <Checkbox 
              name = "hiring"
              label="Senior"
              style={styles.block} />
            </div>
            </MuiThemeProvider>


          <div className="mui--text-left">Sponsoring Visas ?</div>
          <Select defaultValue="option-2" name="sponsers">
            <Option value="Yes" label="Yes" />
            <Option value="No" label="No" />
          </Select>

          <div className="mui--text-left">Time per student</div>
           <Input hint="Estimated" name="timePer"/>
        <MuiThemeProvider>
          <RaisedButton label="Submit" type="submit" primary={true} style={style} />
        </MuiThemeProvider> 
      </form>

       </div>

    );
  }
}

