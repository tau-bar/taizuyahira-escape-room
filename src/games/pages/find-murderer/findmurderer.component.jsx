import React from 'react';
import { withRouter } from 'react-router-dom';
import mm1 from '../../../stuff/mm1.jpg';
import mm2 from '../../../stuff/mm2.jpg';
import MmComponent from '../../components/mm-component/mm.component';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import './findmurderer.styles.scss';
import CustomButton from '../../components/button/button.component';

const images = [mm1, mm2];
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
    if (id === "0") {
        if (event.target.value === "4") {
            this.setState({
                numPassed1: true,
            })
        } else {
            this.setState({
                numPassed1: false,
            })
        }
    } else {
        if (event.target.value === "3") {
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
    var acceptedwords1 = /torn shirt|shirt tear/;
    var acceptedwords2 = /left hand|cast can hide weapon/;
    if (id === "0") {
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
        const toNext = () => {this.props.history.push('/challenge9')};
        const { numPassed1, numPassed2, ansInput, passed1, passed2 } = this.state;
        return (
            <div className = "mm-page">
            <div className = 'page-text'>
                <PageTitle>the unforgiving soul</PageTitle>
                <Paragraph content = "As you proceed, an apparition manifests in front of you. It's Taizuyahira, in the *flesh*? It says to you, 'Traveller... in my absence my brother and sister were murdered ... and I wish to take revenge on thsoe who did it. I have drawings of the location at the time they were murdered, but I cannot figure out who did in my brother and sister. Find out who the murderers are... or else...'. You scramble to try and figure out who the murderers are lest the spirit ends your life there, but ... the answer is not obvious! Find out who did it."/>
            </div>
        <MmComponent 
            correctNum = {numPassed1}
            correctAns = {passed1}
            handleAns = {this.handleAns}
            ansInput = {ansInput} 
            handleNumAns = {this.handleNumAns} 
            img = {images[0]} 
            id = "0"/>
        <MmComponent 
            correctNum = {numPassed2}
            correctAns = {passed2}
            handleAns = {this.handleAns}
            ansInput = {ansInput} 
            handleNumAns = {this.handleNumAns} 
            img = {images[1]} 
            id = "1"/>
            
        <div className = "proceed-button">
            <CustomButton 
            onClick = {toNext}
            passed = {passed1 && passed2 && numPassed1 && numPassed2}
            // passed = {true}
            successPara = "the spirit is satisfied, leave before it changes it's mind!"
            failPara = "the spirit is unsatisfied, you may not proceed."
            ></CustomButton>
        </div>
        </div>)
        
    }
}
    


export default withRouter(FindMurdererPage);