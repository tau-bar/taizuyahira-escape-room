import React from 'react';
import { withRouter } from 'react-router-dom';
import mm1 from '../stuff/mm1.jpg';
import mm2 from '../stuff/mm2.jpg';
import MmComponent from './components/mm.component';
import Button from '@material-ui/core/Button';
import PageTitle from './components/page-title.component';
import Paragraph from './components/paragraph.component';
import './findmurderer.styles.scss';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const images = [mm1, mm2];
const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
class FindMurdererPage extends React.Component {
    constructor() {
        super();
        this.handleNumAns = this.handleNumAns.bind(this);
        this.handleAns = this.handleAns.bind(this);
        this.state = {
            currentLevel: 0,
            passed1: false,
            numPassed1: false,
            passed2: false,
            numPassed2: false,
            ansInput: "",
            componentInput: "",
        };
    }



  handleNumAns(event, id) {
      console.log(this.id)
    if (id == "0") {
        if (event.target.value == "4") {
            this.setState({
                numPassed1: true,
            })
        } else {
            this.setState({
                numPassed1: false,
            })
        }
    } else {
        if (event.target.value == "3") {
            this.setState({
                numPassed2: true,
            })
        } else {
            this.setState({
                numPassed2: false,
            })
        }
    }
  }

  handleAns(event, id) {
      console.log(this.id);
    var acceptedwords1 = /torn shirt|shirt tear/;
    var acceptedwords2 = /left hand|cast can hide weapon/;
    if (id == "0") {
        if (acceptedwords1.test(event.target.value)) {
            this.setState({ passed1 : true });
        } else {
            this.setState({ passed1 : false });
        }
    } else {
        if (acceptedwords2.test(event.target.value)) {
            this.setState({ passed2 : true });
        } else {
            this.setState({ passed2 : false });
        }
    }
  }
  

    render() {
        return (
            <div className = "mm-page">
            <div className = 'page-text'>
                <PageTitle content = "The Unforgiving Soul."/>
                <Paragraph content = "As you proceed, you encounter a wailing soul. It says to you, 'Traveller... in my absence my brother and sister were murdered ... and I wish to take revenge on thsoe who did it. I have drawings of the location at the time they were murdered, but I cannot figure out who did in my brother and sister. Find out who the murderers are... or else...'. You scramble to try and figure out who the murderers are lest the spirit ends your life there, but ... the answer is not obvious! Find out who did it."/>
            </div>
        <MmComponent 
            correctNum = {this.state.numPassed1}
            correctAns = {this.state.passed1}
            handleAns = {this.handleAns}
            ansInput = {this.state.ansInput} 
            handleNumAns = {this.handleNumAns} 
            img = {images[0]} 
            id = "0"/>
        <MmComponent 
            correctNum = {this.state.numPassed2}
            correctAns = {this.state.passed2}
            handleAns = {this.handleAns}
            ansInput = {this.state.ansInput} 
            handleNumAns = {this.handleNumAns} 
            img = {images[1]} 
            id = "1"/>
            
        <div className = "proceed-button">
            {this.state.passed1 && this.state.passed2 && this.state.numPassed1 && this.state.numPassed2 ? 
        <div className = 'page-text'>
        <Paragraph content = "The spirit is satisfied and will now exact their revenge. Leave before it changes it's mind!."/>
        <ThemeProvider theme = {theme}>
        <Button variant="contained" color = "primary">
            Proceed
        </Button>
        </ThemeProvider>
        </div> :
        <div className = 'page-text'>
        <Paragraph content = "The spirit is unsatisfied. You may not proceed."/>
        <Button variant="contained" disabled>
            WRONG
        </Button>
        </div>
    }
        </div>
        </div>)
        
    }
}
    


export default withRouter(FindMurdererPage);