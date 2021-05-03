import React from 'react';
import { withRouter } from 'react-router-dom';
import mm1 from '../stuff/mm1.jpg';
import mm2 from '../stuff/mm2.jpg';
import MmComponent from './components/mm.component';
const images = [mm1, mm2];

class FindMurdererPage extends React.Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.handleNumAns = this.handleNumAns.bind(this);
        this.handleAns = this.handleAns.bind(this);
        this.state = {
            currentLevel: 0,
            passed: false,
            numPassed: false,
            ansInput: "",
            componentInput: "",
        };
    }

  handler() {
      if (this.state.currentLevel == 0) {
        this.setState({
            currentLevel: 1,
            passed: false,
            numPassed: false,
            ansInput: "",
            componentInput: "",
          })
      } else {
        this.props.history.push("/challenge9")
      }
  }

  handleNumAns(event) {
    this.setState({
        ansInput: event.target.value,
    })
    if (this.state.currentLevel == 0) {
        if (event.target.value == "4") {
            this.setState({
                numPassed: true,
            })
        }
    } else {
        if (event.target.value == "3") {
            this.setState({
                numPassed: true,
            })
        } 
    }
  }

  handleAns(event) {
    var acceptedwords1 = /torn shirt|shirt tear/;
    var acceptedwords2 = /left hand|cast can hide weapon/;
    this.setState({
        componentInput: event.target.value,
    })
    if (this.state.currentLevel == 0) {
        if (acceptedwords1.test(event.target.value)) {
            this.setState({
                passed: true,
            })
        }
    } else {
        if (acceptedwords2.test(event.target.value)) {
            this.setState({
                passed: true,
            })
        } 
    }
  }

    render() {
        console.log(this.props)
        return (<div className = 'welcome'>
                    <h1 className = 'title'>
                        <MmComponent 
                        componentInput = {this.state.componentInput}
                        handleAns = {this.handleAns}
                        ansInput = {this.state.ansInput} 
                        numPassed = {this.state.numPassed} 
                        handleNumAns = {this.handleNumAns} 
                        passed = {this.state.passed} 
                        handler = {this.handler} 
                        img = {images[this.state.currentLevel]} 
                        currentLevel = {this.state.currentLevel}/>
                    </h1>
                </div>)
    }
}
    


export default withRouter(FindMurdererPage);